#!/usr/bin/env python3
"""Sync a source fork's docs/ folder into this site's docs/<product>/ folder.

Copies every Markdown file, skipping non-doc artifacts like the FastAPI
template's openapi-snapshot.json baseline. Adds Docusaurus frontmatter
(title, derived from the first H1) to any file that doesn't already have
it, since the source forks write plain Markdown with no Docusaurus-specific
frontmatter. Writes a _category_.json for the product folder if one isn't
already there, so a newly synced product gets a labeled sidebar entry.
"""
import argparse
import json
import re
from pathlib import Path

SKIP_FILES = {"openapi-snapshot.json"}


def ensure_frontmatter(text: str) -> str:
    if text.startswith("---\n"):
        return text
    match = re.search(r"^#\s+(.+)$", text, re.MULTILINE)
    title = match.group(1).strip() if match else "Untitled"
    title = title.replace('"', '\\"')
    return f'---\ntitle: "{title}"\n---\n\n{text}'


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--source", required=True)
    parser.add_argument("--dest", required=True)
    parser.add_argument("--label", required=True)
    parser.add_argument("--position", type=int, default=99)
    args = parser.parse_args()

    source = Path(args.source)
    dest = Path(args.dest)
    dest.mkdir(parents=True, exist_ok=True)

    category_file = dest / "_category_.json"
    if not category_file.exists():
        category_file.write_text(
            json.dumps({"label": args.label, "position": args.position}, indent=2) + "\n",
            encoding="utf-8",
        )

    if not source.is_dir():
        print("[warn] no docs/ folder found in source repo, nothing to sync")
        return

    synced = []
    for path in sorted(source.rglob("*.md")):
        if path.name in SKIP_FILES:
            continue
        rel = path.relative_to(source)
        target = dest / rel
        target.parent.mkdir(parents=True, exist_ok=True)
        text = path.read_text(encoding="utf-8")
        target.write_text(ensure_frontmatter(text), encoding="utf-8")
        synced.append(str(rel))

    print(f"Synced {len(synced)} file(s) for {args.label}: {synced}")


if __name__ == "__main__":
    main()
