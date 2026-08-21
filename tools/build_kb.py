#!/usr/bin/env python3
"""
Build the knowledge-base text file used by the OptimalSlope manual assistant.

Reads the *rendered* Jekyll output in _site/ (not the source markdown, which is
mostly inline <style> blocks) and emits a single plain-text file where every
section is labelled with its live URL and heading anchor, so the assistant can
cite a clickable deep link.

Page order follows the manual's own navigation: the <link rel="next"> chain that
_layouts/post.html emits from nav_order, walked from the home page.

Stdlib only - no dependencies to install in CI.

Usage:
    python tools/build_kb.py [--site _site] [--out kb] [--check]

    --check   exit 1 if the output would differ from what is already in --out
              (useful to fail a PR that forgets to rebuild)
"""

from __future__ import annotations

import argparse
import hashlib
import json
import re
import sys
from datetime import datetime, timezone
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import unquote, urlparse

# Wrapper that holds the actual page prose in the jekyll-gitbook theme.
CONTENT_CLASS = "markdown-section"

# Structural chrome that lives inside the content wrapper but is not prose.
SKIP_CLASSES = {
    "os-guide-nav",
    "os-page-meta",
    "os-manual-meta",
    "os-search-suggestions",
    "search-results",
    "navigation",
    # Card grids that just re-link other manual pages - the prose they point at
    # is already in the KB, and flattened cards read as run-on noise.
    "os-link-grid",
}

SKIP_TAGS = {"script", "style", "svg", "noscript", "button"}

BLOCK_TAGS = {
    "p", "div", "section", "article", "header", "footer", "aside",
    "h1", "h2", "h3", "h4", "h5", "h6",
    "ul", "ol", "li", "dl", "dt", "dd",
    "table", "thead", "tbody", "tr", "pre", "blockquote", "figure",
    "figcaption", "br", "hr",
}

HEADING_TAGS = {"h1", "h2", "h3"}


class Section:
    """One heading and the prose beneath it."""

    def __init__(self, heading: str, anchor: str, level: int):
        self.heading = heading
        self.anchor = anchor
        self.level = level
        self.parts: list[str] = []

    def text(self) -> str:
        return normalise("".join(self.parts))


def normalise(raw: str) -> str:
    raw = raw.replace(" ", " ")
    # collapse runs of spaces/tabs, but keep newlines meaningful
    raw = re.sub(r"[ \t]+", " ", raw)
    raw = re.sub(r" *\n *", "\n", raw)
    raw = re.sub(r"\n{3,}", "\n\n", raw)
    return raw.strip()


class PageParser(HTMLParser):
    """Pull prose + heading anchors out of one rendered page."""

    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.title: str | None = None
        self.next_url: str | None = None
        self.sections: list[Section] = []

        self._depth = 0                 # nesting depth inside the content wrapper
        self._in_content = False
        self._skip_depth = 0            # >0 while inside skipped chrome
        self._in_title_tag = False
        self._heading: Section | None = None   # heading currently being read

    # -- helpers ---------------------------------------------------------

    def _current(self) -> Section | None:
        return self.sections[-1] if self.sections else None

    def _emit(self, text: str) -> None:
        if self._heading is not None:
            self._heading.parts.append(text)
        elif self._in_content and self._skip_depth == 0:
            cur = self._current()
            if cur is not None:
                cur.parts.append(text)

    # -- parser callbacks ------------------------------------------------

    def handle_starttag(self, tag, attrs):
        a = dict(attrs)

        if tag == "title":
            self._in_title_tag = True
            return

        # Nav order comes from the theme's prev/next links in <head>.
        if tag == "link" and a.get("rel") == "next" and a.get("href"):
            self.next_url = a["href"]
            return

        classes = set((a.get("class") or "").split())

        if not self._in_content:
            if CONTENT_CLASS in classes:
                self._in_content = True
                self._depth = 1
                # Prose before the first heading still needs somewhere to go.
                self.sections.append(Section("", "", 0))
            return

        self._depth += 1

        if self._skip_depth:
            self._skip_depth += 1
            return

        if tag in SKIP_TAGS or (classes & SKIP_CLASSES):
            self._skip_depth = 1
            return

        if tag in HEADING_TAGS:
            # The theme stamps the page path onto the leading <h1>
            # (id="/pages/glossary"), which is not a usable fragment.
            anchor = a.get("id") or ""
            if "/" in anchor:
                anchor = ""
            self._heading = Section("", anchor, int(tag[1]))
            return

        if tag == "img":
            alt = (a.get("alt") or "").strip()
            if alt:
                self._emit("\n[figure: " + alt + "]\n")
            return

        if tag in ("td", "th"):
            self._emit(" | ")
            return

        if tag in BLOCK_TAGS:
            self._emit("\n")

    def handle_endtag(self, tag):
        if tag == "title":
            self._in_title_tag = False
            return

        if not self._in_content:
            return

        if tag in HEADING_TAGS and self._heading is not None:
            h = self._heading
            self._heading = None
            h.heading = normalise("".join(h.parts))
            h.parts = []
            if h.heading:
                self.sections.append(h)
            self._depth -= 1
            return

        if self._skip_depth:
            self._skip_depth -= 1
        elif tag in BLOCK_TAGS:
            self._emit("\n")

        self._depth -= 1
        if self._depth <= 0:
            self._in_content = False

    def handle_data(self, data):
        if self._in_title_tag and self.title is None:
            self.title = data.strip()
            return
        if not data.strip():
            # keep a single space so inline elements don't run together
            if self._in_content:
                self._emit(" ")
            return
        self._emit(data)


def url_to_file(url: str, site: Path, baseurl: str) -> Path | None:
    path = unquote(urlparse(url).path)
    if baseurl and path.startswith(baseurl):
        path = path[len(baseurl):]
    path = path.strip("/")
    candidate = site / path / "index.html" if path else site / "index.html"
    return candidate if candidate.is_file() else None


def _config_value(config: Path, key: str) -> str:
    if not config.is_file():
        return ""
    pattern = r"^" + key + r":\s*['\"]?([^'\"\n]*)"
    m = re.search(pattern, config.read_text(encoding="utf-8"), re.M)
    return (m.group(1).strip() if m else "").rstrip("/")


def walk_pages(site: Path, baseurl: str) -> list[tuple[Path, str]]:
    """Follow the rel=next chain from the home page. Returns (file, url_path)."""
    ordered: list[tuple[Path, str]] = []
    seen: set[Path] = set()

    current = site / "index.html"
    url_path = baseurl + "/"

    while current and current.is_file() and current not in seen:
        seen.add(current)
        ordered.append((current, url_path))

        parser = PageParser()
        parser.feed(current.read_text(encoding="utf-8", errors="replace"))
        if not parser.next_url:
            break
        nxt = url_to_file(parser.next_url, site, baseurl)
        if nxt is None:
            print("  ! rel=next points nowhere: " + parser.next_url, file=sys.stderr)
            break
        url_path = unquote(urlparse(parser.next_url).path)
        current = nxt

    return ordered


def build(site: Path, config: Path) -> tuple[str, dict]:
    baseurl = _config_value(config, "baseurl")
    # _config.yml spells the host with capitals; hosts are case-insensitive but
    # the citations read as typos unless normalised.
    site_url = _config_value(config, "url").lower()
    pages = walk_pages(site, baseurl)

    chunks: list[str] = []
    meta_pages: list[dict] = []

    for path, url_path in pages:
        parser = PageParser()
        parser.feed(path.read_text(encoding="utf-8", errors="replace"))

        # <title> is "Page Name · User Manual" - keep the page name only.
        title = (parser.title or path.parent.name).split("·")[0].strip()
        page_url = site_url + url_path
        kept = 0

        for section in parser.sections:
            body = section.text()
            if not body:
                continue
            if section.heading:
                label = title + " > " + section.heading
                link = page_url + "#" + section.anchor if section.anchor else page_url
            else:
                label = title
                link = page_url
            chunks.append("### " + label + "\nURL: " + link + "\n\n" + body + "\n")
            kept += 1

        meta_pages.append({"title": title, "url": page_url, "sections": kept,
                           "source": str(path.relative_to(site))})
        print("  {:<28} {:>3} sections  {}".format(title, kept, url_path))

    text = "\n".join(chunks).strip() + "\n"
    meta = {
        "generated": datetime.now(timezone.utc).isoformat(timespec="seconds"),
        "sha256": hashlib.sha256(text.encode("utf-8")).hexdigest(),
        "bytes": len(text.encode("utf-8")),
        "sections": sum(p["sections"] for p in meta_pages),
        "pages": meta_pages,
    }
    return text, meta


def main() -> int:
    ap = argparse.ArgumentParser(description=__doc__)
    ap.add_argument("--site", default="_site", type=Path)
    ap.add_argument("--config", default="_config.yml", type=Path)
    ap.add_argument("--out", default="kb", type=Path)
    ap.add_argument("--check", action="store_true",
                    help="fail if the existing output is out of date")
    args = ap.parse_args()

    if not args.site.is_dir():
        print("error: " + str(args.site) + " not found - run `bundle exec jekyll build` first",
              file=sys.stderr)
        return 2

    print("reading " + str(args.site) + " ...")
    text, meta = build(args.site, args.config)

    out_txt = args.out / "manual.txt"
    out_meta = args.out / "manual.meta.json"

    if args.check:
        if not out_txt.is_file():
            print("error: no existing manual.txt to check against", file=sys.stderr)
            return 1
        old = hashlib.sha256(out_txt.read_bytes()).hexdigest()
        if old != meta["sha256"]:
            print("error: manual.txt is out of date - run tools/build_kb.py",
                  file=sys.stderr)
            return 1
        print("manual.txt is up to date")
        return 0

    args.out.mkdir(parents=True, exist_ok=True)
    out_txt.write_text(text, encoding="utf-8", newline="\n")
    out_meta.write_text(json.dumps(meta, indent=2) + "\n", encoding="utf-8", newline="\n")

    kb = meta["bytes"]
    print("\n{}: {:,} bytes, {} sections across {} pages (~{:,} tokens)".format(
        out_txt, kb, meta["sections"], len(meta["pages"]), kb // 4))
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
