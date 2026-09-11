"""Module in, Page out. Every fact comes off a nu.inspect record."""

from __future__ import annotations

import importlib
import sys
from types import ModuleType
from typing import Any

from nu.inspect import (
    BuilderRecord,
    InteractionRecord,
    catalogue_calls,
    catalogue_forms,
    catalogue_interactions,
    catalogue_refs,
    catalogue_services,
    catalogue_shapes,
    parse_module,
)

from .model import Index, Page, Section, slug
from .pages import PAGES, IndexSpec, PageSpec

__all__ = ["build", "build_index", "href"]

_CATALOGUES = (
    catalogue_interactions,
    catalogue_forms,
    catalogue_refs,
    catalogue_shapes,
    catalogue_services,
    catalogue_calls,
)


def build(spec: PageSpec) -> Page:
    """Gather every public subject the page covers and group it into sections."""
    module = importlib.import_module(spec.module)
    records: tuple[Any, ...] = ()
    for dotted in (spec.module, *spec.also):
        records += _subjects(importlib.import_module(dotted))
    return Page(
        base=spec.base,
        module=module,
        record=parse_module(module, path=spec.module),
        sections=_sections(records, spec.module),
    )


def build_index(spec: IndexSpec) -> Index:
    """The landing page for a directory: each child module's record and its URL."""
    record = None
    if spec.module is not None:
        record = parse_module(importlib.import_module(spec.module), path=spec.module)
    children = tuple(
        (parse_module(importlib.import_module(dotted), path=dotted), href(dotted))
        for dotted in spec.children
    )
    return Index(path=spec.path, title=spec.title, record=record, children=children)


def href(dotted: str) -> str:
    """The site URL of a module's page. Unchanged by the folder split, which is the point."""
    spec = next(s for s in PAGES if s.module == dotted)
    return "/" + spec.base.removeprefix("content/")


def _subjects(module: ModuleType) -> tuple[Any, ...]:
    """Every record the six catalogues return, in export order, deduped by path."""
    seen: dict[str, Any] = {}
    for catalogue in _CATALOGUES:
        for record in catalogue(module):
            seen.setdefault(record.path, record)
    return tuple(seen.values())


def _sections(records: tuple[Any, ...], under: str) -> tuple[Section, ...]:
    """Group by defining submodule, or by kind when there is no split."""
    modules = _ordered({r.module for r in records}, records, key=lambda r: r.module)
    if len(modules) > 1:
        grouped = [
            Section(
                title=name,
                record=_module_record(name),
                subjects=tuple(r for r in records if r.module == name),
            )
            for name in modules
        ]
    else:
        kinds = _ordered({_kind(r) for r in records}, records, key=_kind)
        grouped = [
            Section(title=name, record=None, subjects=tuple(r for r in records if _kind(r) == name))
            for name in kinds
        ]
    return _slugged(grouped, under)


def _slugged(sections: list[Section], under: str) -> tuple[Section, ...]:
    """Give each section its filename, disambiguating any collision."""
    out: list[Section] = []
    seen: dict[str, int] = {}
    for section in sections:
        base = slug(section.title, under) or "section"
        count = seen.get(base, 0)
        seen[base] = count + 1
        name = base if count == 0 else f"{base}-{count}"
        out.append(
            Section(
                title=section.title,
                record=section.record,
                subjects=section.subjects,
                slug=name,
            )
        )
    return tuple(out)


def _ordered(names: set[str], records: tuple[Any, ...], key: Any) -> list[str]:
    """``names`` sorted by where each first appears in export order."""
    order = {}
    for record in records:
        order.setdefault(key(record), len(order))
    return sorted(names, key=lambda n: order[n])


def _kind(record: Any) -> str:
    """The grouping label when a page has no submodule split."""
    if isinstance(record, InteractionRecord | BuilderRecord):
        return record.kind or type(record).__name__
    return type(record).__name__.removesuffix("Record")


def _module_record(dotted: str) -> Any | None:
    """The submodule's own record, or None when it is not importable."""
    module = sys.modules.get(dotted)
    if module is None:
        try:
            module = importlib.import_module(dotted)
        except ImportError:
            return None
    return parse_module(module, path=dotted)
