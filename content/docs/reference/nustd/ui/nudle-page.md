---
title: nudle.page
description: "Top-level Shape kinds for nudle."
---

Module `nu.ui.nudle.page`.

Top-level Shape kinds for nudle.

- `Index`: the browser entrypoint. One per app. Carries structural Refs
  (document title, navigation, ...) and a `pages` map.
- `Page`: a sub-shape that lives inside an Index's `pages` map. Display
  Refs and Section slots only.
- `Pages`: declarative class-attribute holder mapping URI -> Page subclass.

Wire-path rule (via `Ref._aresolve_address` + `_wire_prefix` hook):
- Refs rooted on an `Index` resolve to their slot name alone ("title",
  "nav") -- Index carries no `_wire_prefix` so segments join bare.
- Refs rooted on a `Page` resolve to "<PageShapeName>.<slot>"; `Page`
  defines `_wire_prefix` returning `[cls.__name__]`.
- Refs rooted on a `Section` mounted under a Page resolve via the
  `_wire_prefix` classmethod stamped on the section subclass here
  (`[page_cls.__name__, *slot_path]`).

| Name | Call | Meaning |
| --- | --- | --- |
| [Index](#index) |  | Browser entrypoint. One per app. |
| [Page](#page) |  | Sub-shape that lives inside an Index's `pages` map. |

## Index

Browser entrypoint. One per app.

Path `nu.ui.Index`.

Class body declares structural Refs as Slots (title, nav, ...) and a
`pages` attribute of type `Pages` mapping URIs to Page subclasses.

Refs rooted on an Index resolve to their slot name alone -- no
`_wire_prefix` here, so `Ref._aresolve_address` joins segments bare.

Undocumented: example.

## Page

Sub-shape that lives inside an Index's `pages` map.

Path `nu.ui.Page`.

Undocumented: example.
