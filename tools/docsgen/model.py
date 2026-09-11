"""What a page is, once the records are gathered and grouped."""

from __future__ import annotations

import re
from dataclasses import dataclass, field
from typing import Any

__all__ = ["Index", "Page", "Section", "slug"]

_NON_WORD = re.compile(r"[^a-z0-9]+")


def slug(title: str, under: str) -> str:
    """A section's filename, derived from the dotted module path it is headed by.

    ``nu.mem.refs.std`` under ``nu.mem`` is ``refs-std``. A section defined
    outside the page's own package (``nu.lang.forms`` on the ``nu.forms`` page)
    keeps its full path, so the file still says where it came from.
    """
    tail = title[len(under) + 1 :] if title.startswith(f"{under}.") else title
    return _NON_WORD.sub("-", tail.lower()).strip("-")


@dataclass(frozen=True)
class Section:
    """One heading on a page, plus the subjects under it.

    ``record`` is the defining submodule's own ``ModuleRecord`` when the page
    sections by submodule, and None when it falls back to grouping by kind.
    """

    title: str
    record: Any | None
    subjects: tuple[Any, ...] = ()
    slug: str = ""


@dataclass(frozen=True)
class Page:
    """One module's reference page: a single file, or a folder of section files."""

    base: str
    module: Any
    record: Any
    sections: tuple[Section, ...] = field(default_factory=tuple)
    split: bool = False

    @property
    def index(self) -> str:
        """Where the page is served from."""
        return f"{self.base}/index.md" if self.split else f"{self.base}.md"


@dataclass(frozen=True)
class Index:
    """A section landing page: a table of the child pages under it."""

    path: str
    title: str
    record: Any | None
    children: tuple[tuple[Any, str], ...] = field(default_factory=tuple)
