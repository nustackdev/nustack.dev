"""Which module becomes which file.

Handwritten on purpose, and the ordering in it means nothing: sidebar order
lives in the handwritten ``meta.json`` files, which the generator never
touches. The ten fabric slugs are load-bearing outside the docs tree
(``lib/refs.ts`` builds ``/docs/reference/fabrics/<slug>`` and every marketing
fabric page links off it), so they are fixed. Core and std slugs are free.

A page whose single-file form runs past ``SPLIT`` lines and has more than one
section is written as a folder instead: ``mem/index.md`` plus one file per
section. Fumadocs serves ``mem/index.md`` at the same URL ``mem.md`` served, so
the split is invisible to every link into the tree.
"""

from __future__ import annotations

from dataclasses import dataclass

__all__ = ["INDEXES", "PAGES", "SPLIT", "IndexSpec", "PageSpec"]

SPLIT = 600
"""Line count above which a multi-section page becomes a folder.

600 rendered lines is already past what anyone scrolls. Below it the folder
form costs a directory, a ``meta.json`` and an extra click to buy nothing.
A single-section page never splits whatever its length: there is no seam to
cut on that the code declares, and inventing one is the emitter writing
structure the module does not have.
"""


@dataclass(frozen=True)
class PageSpec:
    """One page: the module it is titled after, plus any module it also covers.

    ``also`` exists for a surface a package documents but does not re-export.
    ``nu.mem.refs.jqueue`` is the case: the janus queue ref needs an optional
    dependency, so it is imported by its own path and falls out of every
    ``nu.mem`` catalogue. It is still part of what the page is about.
    """

    module: str
    path: str
    also: tuple[str, ...] = ()

    @property
    def base(self) -> str:
        """The path with no extension. ``<base>.md`` or ``<base>/index.md``."""
        return self.path.removesuffix(".md")


@dataclass(frozen=True)
class IndexSpec:
    """A section landing page: the parent module's prose over a table of children.

    ``module`` is None for ``core`` and ``fabrics``, which are directories in
    the docs tree and nothing in the code, so those two get the table alone.
    """

    path: str
    title: str
    module: str | None
    children: tuple[str, ...]


_REF = "content/docs/reference"

PAGES = (
    # core
    PageSpec("nu.core", f"{_REF}/core/interactions.md"),
    PageSpec("nu.forms", f"{_REF}/core/forms.md"),
    PageSpec("nu.core.flows", f"{_REF}/core/flows.md"),
    PageSpec("nu.core.spans", f"{_REF}/core/spans.md"),
    PageSpec("nu.context", f"{_REF}/core/context.md"),
    # fabrics: the ten slugs are fixed
    PageSpec("nu.kv", f"{_REF}/fabrics/kv.md"),
    PageSpec("nu.ui", f"{_REF}/fabrics/ui.md"),
    PageSpec("nu.cluster", f"{_REF}/fabrics/cluster.md"),
    PageSpec("nu.llm", f"{_REF}/fabrics/llm.md"),
    PageSpec("nu.mem", f"{_REF}/fabrics/mem.md", also=("nu.mem.refs.jqueue",)),
    PageSpec("nu.proxy", f"{_REF}/fabrics/proxy.md"),
    PageSpec("nu.http", f"{_REF}/fabrics/http.md"),
    PageSpec("nu.service", f"{_REF}/fabrics/service.md"),
    PageSpec("nu.cc", f"{_REF}/fabrics/cc.md"),
    PageSpec("nu.mp", f"{_REF}/fabrics/mp.md"),
    # std
    PageSpec("nu.std.asyncio", f"{_REF}/std/asyncio.md"),
    PageSpec("nu.std.cmath", f"{_REF}/std/cmath.md"),
    PageSpec("nu.std.datetime", f"{_REF}/std/datetime.md"),
    PageSpec("nu.std.decimal", f"{_REF}/std/decimal.md"),
    PageSpec("nu.std.fin", f"{_REF}/std/fin.md"),
    PageSpec("nu.std.fractions", f"{_REF}/std/fractions.md"),
    PageSpec("nu.std.functools", f"{_REF}/std/functools.md"),
    PageSpec("nu.std.itertools", f"{_REF}/std/itertools.md"),
    PageSpec("nu.std.logging", f"{_REF}/std/logging.md"),
    PageSpec("nu.std.math", f"{_REF}/std/math.md"),
    PageSpec("nu.std.pathlib", f"{_REF}/std/pathlib.md"),
    PageSpec("nu.std.random", f"{_REF}/std/random.md"),
    PageSpec("nu.std.time", f"{_REF}/std/time.md"),
    PageSpec("nu.std.uuid", f"{_REF}/std/uuid.md"),
)

INDEXES = (
    IndexSpec(
        f"{_REF}/core/index.md",
        "Core",
        None,
        ("nu.core", "nu.forms", "nu.core.flows", "nu.core.spans", "nu.context"),
    ),
    IndexSpec(
        f"{_REF}/fabrics/index.md",
        "Fabrics",
        None,
        (
            "nu.kv",
            "nu.ui",
            "nu.cluster",
            "nu.llm",
            "nu.mem",
            "nu.proxy",
            "nu.http",
            "nu.service",
            "nu.cc",
            "nu.mp",
        ),
    ),
    IndexSpec(
        f"{_REF}/std/index.md",
        "Std",
        "nu.std",
        tuple(s.module for s in PAGES if s.module.startswith("nu.std.")),
    ),
)
