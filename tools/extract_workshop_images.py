#!/usr/bin/env python3
"""Extract the original workbook screenshots used by the online tutorials.

Requires pypdf. Images are copied without cropping, resampling, or redrawing.
Run from the manual root: python tools/extract_workshop_images.py
"""

import argparse
from pathlib import Path

from pypdf import PdfReader


# One-based workbook page, followed by the embedded image name.
SOURCES = {
    "import-units.png": (5, "FormXob.9c99ff868eb2770bfc475669e2a4450f.png"),
    "case1a-import.jpg": (5, "FormXob.0a5cfb973ca682eed254e07e342e9e8a.jpg"),
    "section-view-a.png": (6, "FormXob.23bfe233d12b13c5a54b9a89838d3618.png"),
    "section-view-b.png": (6, "FormXob.25c90bb0ec7337cc6e90372ce65a2bca.png"),
    "section-navigation.png": (6, "FormXob.6f141c1efc4d779c2cbeccdf827fafe7.png"),
    "mohr-coulomb-properties.png": (7, "FormXob.9caefa77ea829a229b928a1bb8a4ff49.png"),
    "case1a-anchor.png": (8, "FormXob.3ab31e35b63c0d02be7f0fe0d9fa08c8.png"),
    "case1a-preview.png": (8, "FormXob.d0453b59e6fe699cc2d8e45981cf7e73.png"),
    "slope-settings.png": (8, "FormXob.2cae2ea60ff320958905264edaa21ce3.png"),
    "case1a-simulation.png": (10, "FormXob.ebb3d3378ef684430d9c047a1b5c8084.png"),
    "case1a-result.png": (11, "FormXob.ad0ca4fef4f2083ba910a4484f781d15.png"),
    "hoek-brown-properties.png": (13, "FormXob.c7796bda8490d52e3b9736892a55ced3.png"),
    "case1b-anchor.png": (14, "FormXob.bc1ec3c8b7a365ab67a8f9ca5a819315.png"),
    "case1b-preview.png": (14, "FormXob.8f81d25df32394357f34ee4d56be868b.png"),
    "case1b-result.png": (16, "FormXob.96bd2e81d8634deb732427745f0de0a8.png"),
    "case2-import.jpg": (17, "FormXob.a120162a26d6ba898ecf29d8e6cadf47.jpg"),
    "case2-anchor.png": (19, "FormXob.6b8446c45dcfd1d49d35ad1ed0933eff.png"),
    "case2-preview.png": (19, "FormXob.6397e562ded84a9c42fdbe4d20720580.png"),
    "case2-result.png": (21, "FormXob.c2416d081895f673f7abb24f66fc6609.png"),
    "case3a-import.jpg": (22, "FormXob.b23cdbb471dba496e560abcbb1e8622c.jpg"),
    "water-entity.png": (24, "FormXob.dc290dcf8269fade8afcc34b050c4d82.png"),
    "case3a-anchor.png": (25, "FormXob.5c12f6e4bbfae890af7f19598cd918cc.png"),
    "case3a-preview.png": (25, "FormXob.43423041179438c6ec597316043b4417.png"),
    "case3a-result.png": (27, "FormXob.e724bbddfef9962a5562ef170d6863ce.png"),
    "case3b-anchor.png": (28, "FormXob.9f492213bd7e39f67f707804b2f4dd23.png"),
    "case3b-preview.png": (28, "FormXob.2bcefd87146a7ea81a94c7818c69f18e.png"),
    "case3b-result.png": (30, "FormXob.2dd8cd21504bcc52b003bf1633cd386a.png"),
    "case4-import.jpg": (31, "FormXob.bd54e36077682f3eb776ff90e900392a.jpg"),
    "fault-entity.png": (33, "FormXob.09f614ec964d287af9df1d60adce7085.png"),
    "case4-result.png": (36, "FormXob.e2ab970840f64339bdbec1bdfb290058.png"),
    "export-output.png": (37, "FormXob.cecd2130404f07f576cc213903566d0d.png"),
    "create-output-section.png": (38, "FormXob.b8a94895aa6c6b059972c1d1809485ce.png"),
    "output-section.jpg": (38, "FormXob.28da98402a135fe07ab418bf130c0369.jpg"),
}


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--pdf", type=Path, default=Path("assets/tutorials/workshop/Workshop_Instructions_EN.pdf"))
    parser.add_argument("--out", type=Path, default=Path("assets/tutorials/workshop/images"))
    args = parser.parse_args()
    reader = PdfReader(args.pdf)
    args.out.mkdir(parents=True, exist_ok=True)
    for filename, (page, name) in SOURCES.items():
        image = next(image for image in reader.pages[page - 1].images if image.name == name)
        (args.out / filename).write_bytes(image.data)
        print(f"Page {page:2}: {filename}")


if __name__ == "__main__":
    main()
