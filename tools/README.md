# docsgen

Generates `content/docs/reference/` from `nu.inspect`.

The code is the source of truth for every fact on a reference page. Names,
sorts, call forms, argument defaults, what an atom yields, its notes and its
worked examples all live on the class, so the pages read them off the records
instead of restating them by hand.

## Run it

```bash
npm run docs:gen          # write the pages
npm run docs:gen:check    # write nothing, exit 1 when committed output is stale
```

`docs:gen:check` prints a unified diff per stale page, so it works as a CI gate.

Generate one page:

```bash
tools/.venv/bin/python -m docsgen --only nu.mem
```

## Set it up

```bash
cd tools && uv venv --python 3.12 && uv pip install -e .
```

**The nu dependency is a local editable path, on purpose.** Wave B1 of
task-142 (the `nu.inspect` extension this tool reads) is not released yet, so
`pyproject.toml` points `nucore` and `nustd` at `../../nu/packages/*` through
`[tool.uv.sources]`. That makes the output depend on whatever is checked out
next door, which is wrong for a generator whose whole point is that
regenerating is an explicit act tied to a version.

**When B1 ships, drop the `[tool.uv.sources]` block and pin the release:**
`nucore==<version>` and `nustd[all]==<version>`.

## What it writes

`docsgen/pages.py` maps a module to an output file, by hand. 29 module pages
plus the three directory landing pages (`core`, `fabrics`, `std`).

A page is one file, or a folder. Past `SPLIT` lines (600) with more than one
section it becomes `<slug>/index.md` holding the module prose and one summary
table per section, plus `<slug>/<section>.md` per section holding the full
entries. Fumadocs serves `mem/index.md` at the same URL `mem.md` served, so the
split is invisible to `lib/refs.ts`, the ten marketing pages and the eleven
hardcoded links in `content/docs/index.mdx`. A single-section page never splits,
however long: the code declares no seam to cut it on.

A section's filename is its dotted module path minus the page's own prefix, so
`nu.mem.refs.std` under `nu.mem` is `refs-std.md`. A section defined outside the
page's package keeps its full path.

It deletes what it stops owning: when a page crosses the threshold in either
direction, the file or folder left behind still resolves to a URL in fumadocs,
so `docsgen` removes it and `--check` reports it as an orphan.

Two things it deliberately never writes:

- **`meta.json`.** Sidebar order is a teaching sequence (fabrics before core
  before std) and that intent exists nowhere in the code. Those files stay
  handwritten, including the one per page folder.
- **The ten fabric slugs.** `lib/refs.ts` builds
  `/docs/reference/fabrics/<slug>` and every marketing fabric page links off
  it, so `kv, ui, cluster, llm, mem, proxy, http, service, cc, mp` are fixed.
  Core and std slugs are free.

## The rule

Nothing on a page is invented by the renderer. Where a record is thin the page
says `Undocumented: ...` and stops. The fix is a docstring in `nu`, never prose
in this tool.

## Layout

| File | What |
| --- | --- |
| `docsgen/pages.py` | module to output path, handwritten |
| `docsgen/collect.py` | runs the six catalogues, groups subjects into sections |
| `docsgen/model.py` | `Page` and `Section` |
| `docsgen/render.py` | records to markdown |
| `docsgen/prose.py` | reStructuredText leftovers to markdown |
| `docsgen/__main__.py` | the command, including `--check` |
