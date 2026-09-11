"""The command. ``docsgen`` writes the pages, ``docsgen --check`` says whether it would."""

from __future__ import annotations

import argparse
import difflib
import sys
from pathlib import Path

from .collect import build, build_index
from .pages import INDEXES, PAGES
from .render import files, index

__all__ = ["main"]

ROOT = Path(__file__).resolve().parents[2]


def main(argv: list[str] | None = None) -> int:
    parser = argparse.ArgumentParser(prog="docsgen", description=__doc__)
    parser.add_argument(
        "--check",
        action="store_true",
        help="write nothing; exit 1 when regenerating would change a committed file.",
    )
    parser.add_argument(
        "--only",
        action="append",
        default=[],
        metavar="MODULE",
        help="generate one module only. Repeatable. Skips the index pages.",
    )
    args = parser.parse_args(argv)

    specs = [s for s in PAGES if not args.only or s.module in args.only]
    if not specs:
        print("no page matched --only", file=sys.stderr)
        return 2

    written: dict[str, str] = {}
    owned: list[str] = []
    for spec in specs:
        written |= files(build(spec))
        owned.append(spec.base)
    if not args.only:
        for spec in INDEXES:
            written[spec.path] = index(build_index(spec))

    stale = [p for p in sorted(written) if _read(p) != written[p]]
    orphans = _orphans(owned, written)

    if args.check:
        for path in stale:
            print(f"stale: {path}", file=sys.stderr)
            sys.stderr.writelines(
                difflib.unified_diff(
                    _read(path).splitlines(keepends=True),
                    written[path].splitlines(keepends=True),
                    fromfile=f"a/{path}",
                    tofile=f"b/{path}",
                    n=1,
                )
            )
        for path in orphans:
            print(f"orphan: {path}", file=sys.stderr)
        print(
            f"{len(stale)} of {len(written)} file(s) stale, {len(orphans)} orphan(s)",
            file=sys.stderr,
        )
        return 1 if stale or orphans else 0

    for path in orphans:
        (ROOT / path).unlink()
        print(f"removed: {path}")
    for path in sorted(written):
        target = ROOT / path
        target.parent.mkdir(parents=True, exist_ok=True)
        fresh = written[path]
        changed = _read(path) != fresh
        target.write_text(fresh)
        print(f"{'wrote' if changed else 'unchanged'}: {path}")
    for base in owned:
        _prune(ROOT / base)
    return 0


def _read(path: str) -> str:
    target = ROOT / path
    return target.read_text() if target.is_file() else ""


def _orphans(owned: list[str], written: dict[str, str]) -> list[str]:
    """Markdown the generator used to own and no longer writes.

    A page that grows past the split threshold turns ``mem.md`` into
    ``mem/index.md``, and a page that shrinks turns it back. Either way the
    file left behind still resolves to a URL in fumadocs, so it goes.
    ``meta.json`` is never touched: it is handwritten.
    """
    found: list[str] = []
    for base in owned:
        candidates = [ROOT / f"{base}.md", *sorted((ROOT / base).glob("*.md"))]
        for path in candidates:
            rel = path.relative_to(ROOT).as_posix()
            if path.is_file() and rel not in written:
                found.append(rel)
    return found


def _prune(folder: Path) -> None:
    """Drop a page folder once nothing is left in it but a stale ``meta.json``."""
    if folder.is_dir() and not any(folder.glob("*.md")):
        for leftover in folder.iterdir():
            leftover.unlink()
        folder.rmdir()


if __name__ == "__main__":
    raise SystemExit(main())
