#!/usr/bin/env python3
"""
Build the assistant's copy of the optimalslope.com marketing site.

The manual explains how to use the software; the website explains what the
product is, who makes it, case studies and how to get it. Together they cover
the questions people actually ask a support chatbot.

Deliberately fetches an explicit page list rather than crawling. A crawler on a
marketing site wanders into PDFs, anchors and third-party links, and the page
set changes rarely enough that a list is easier to reason about.

Stdlib only.

Usage:
    python tools/build_site_kb.py [--out kb] [--check]
"""

from __future__ import annotations

import argparse
import hashlib
import json
import re
import sys
import urllib.error
import urllib.request
from html.parser import HTMLParser
from pathlib import Path

BASE = "https://optimalslope.com/"

# Privacy-policy is deliberately absent: legal boilerplate costs tokens on every
# request and answers nothing anyone asks a support assistant.
PAGES = [
    ("", "Overview"),
    ("Case-Studies.html", "Case Studies"),
    ("Publications.html", "Publications"),
    ("Presentations.html", "Presentations"),
    ("Our-Story-and-Traction.html", "Our Story and Traction"),
    ("Our-Team.html", "Our Team"),
    ("Download.html", "Download"),
    ("Contact-Us.html", "Contact"),
]

SKIP_TAGS = {"script", "style", "svg", "noscript", "head", "nav", "footer",
             "form", "select", "option"}

BLOCK_TAGS = {
    "p", "div", "section", "article", "header", "aside", "br", "hr",
    "h1", "h2", "h3", "h4", "h5", "h6",
    "ul", "ol", "li", "dl", "dt", "dd", "table", "tr", "blockquote",
    "figcaption",
}

HEADING_TAGS = {"h1", "h2", "h3", "h4"}

# Void elements never fire handle_endtag, so counting them would leave the depth
# counters permanently unbalanced - <meta> and <link> in <head> alone are enough
# to strand the parser in "skipping" forever.
VOID_TAGS = {"area", "base", "br", "col", "embed", "hr", "img", "input",
             "link", "meta", "param", "source", "track", "wbr"}

USER_AGENT = "OptimalSlope-KB-Builder/1.0 (+https://optimalslope.github.io/manual/)"


def normalise(raw: str) -> str:
    raw = raw.replace(" ", " ")
    raw = re.sub(r"[ \t]+", " ", raw)
    raw = re.sub(r" *\n *", "\n", raw)
    raw = re.sub(r"\n{3,}", "\n\n", raw)
    return raw.strip()


class SiteParser(HTMLParser):
    """Generic body-text extractor with heading-based sectioning."""

    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.sections: list[tuple[str, list[str]]] = [("", [])]
        self._skip = 0
        self._heading: list[str] | None = None
        self._in_body = False

    def handle_starttag(self, tag, attrs):
        if tag == "body":
            self._in_body = True
            return
        if tag in VOID_TAGS:
            return
        if self._skip:
            self._skip += 1
            return
        if tag in SKIP_TAGS:
            self._skip = 1
            return
        if not self._in_body:
            return
        if tag in HEADING_TAGS:
            self._heading = []
            return
        if tag in BLOCK_TAGS:
            self._emit("\n")

    def handle_endtag(self, tag):
        if tag in VOID_TAGS:
            return
        if self._skip:
            self._skip -= 1
            return
        if tag in HEADING_TAGS and self._heading is not None:
            title = normalise("".join(self._heading))
            self._heading = None
            if title:
                self.sections.append((title, []))
            return
        if self._in_body and tag in BLOCK_TAGS:
            self._emit("\n")

    def handle_data(self, data):
        if self._skip or not self._in_body:
            return
        if not data.strip():
            self._emit(" ")
            return
        self._emit(data)

    def _emit(self, text: str) -> None:
        if self._heading is not None:
            self._heading.append(text)
        else:
            self.sections[-1][1].append(text)


def fetch(url: str, timeout: int = 30) -> str:
    request = urllib.request.Request(url, headers={"User-Agent": USER_AGENT})
    with urllib.request.urlopen(request, timeout=timeout) as response:
        charset = response.headers.get_content_charset() or "utf-8"
        return response.read().decode(charset, errors="replace")


def build() -> tuple[str, dict]:
    chunks: list[str] = []
    meta_pages: list[dict] = []

    for path, title in PAGES:
        url = BASE + path
        try:
            html = fetch(url)
        except (urllib.error.URLError, TimeoutError) as exc:
            print(f"  ! {title}: {exc}", file=sys.stderr)
            meta_pages.append({"title": title, "url": url, "sections": 0,
                               "error": str(exc)})
            continue

        parser = SiteParser()
        parser.feed(html)
        kept = 0

        for heading, parts in parser.sections:
            body = normalise("".join(parts))
            # Marketing pages are full of one-word decorative headings; a section
            # with almost no prose is navigation furniture, not content.
            if len(body) < 60:
                continue
            label = f"{title} > {heading}" if heading else title
            chunks.append(f"### [Website] {label}\nURL: {url}\n\n{body}\n")
            kept += 1

        meta_pages.append({"title": title, "url": url, "sections": kept})
        print(f"  {title:<26} {kept:>3} sections  {url}")

    text = "\n".join(chunks).strip() + "\n"
    # See build_kb.py: no wall-clock field in a committed generated file.
    meta = {
        "sha256": hashlib.sha256(text.encode("utf-8")).hexdigest(),
        "bytes": len(text.encode("utf-8")),
        "sections": sum(p["sections"] for p in meta_pages),
        "pages": meta_pages,
    }
    return text, meta


def main() -> int:
    ap = argparse.ArgumentParser(description=__doc__)
    ap.add_argument("--out", default="kb", type=Path)
    ap.add_argument("--check", action="store_true")
    args = ap.parse_args()

    print(f"fetching {BASE} ...")
    text, meta = build()

    failed = [p for p in meta["pages"] if p.get("error")]
    if failed:
        print(f"error: {len(failed)} page(s) could not be fetched - refusing to "
              f"publish a partial site snapshot", file=sys.stderr)
        return 1

    out_txt = args.out / "website.txt"
    out_meta = args.out / "website.meta.json"

    if args.check:
        if not out_txt.is_file():
            print("error: no existing website.txt to check against", file=sys.stderr)
            return 1
        if hashlib.sha256(out_txt.read_bytes()).hexdigest() != meta["sha256"]:
            print("error: website.txt is out of date", file=sys.stderr)
            return 1
        print("website.txt is up to date")
        return 0

    args.out.mkdir(parents=True, exist_ok=True)
    out_txt.write_text(text, encoding="utf-8", newline="\n")
    out_meta.write_text(json.dumps(meta, indent=2) + "\n", encoding="utf-8", newline="\n")

    kb = meta["bytes"]
    print(f"\n{out_txt}: {kb:,} bytes, {meta['sections']} sections "
          f"across {len(meta['pages'])} pages (~{kb // 4:,} tokens)")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
