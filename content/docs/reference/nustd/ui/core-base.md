---
title: core.base
description: "Generic UI Ref -- host-independent base for the widget kit."
---

Module `nu.ui.core.base`.

Generic UI Ref -- host-independent base for the widget kit.

A Ref is a Nu Ref whose storage is a client rendering surface (a browser
tab, in nudle's case). The class name is the wire identifier the client
uses to pick a renderer; the methods a Ref exposes (`store`, `append`,
`changed`, ...) decide which interactions it accepts.

Built on `StructuredRef` (parent chain, `_root_shape`). Address
resolution walks the on-tree parent chain and joins segments; hosts
that need a prefix (Page name, section slot path, ...) declare a
`_wire_prefix` classmethod on the root shape and this class picks it up.
Async-only: nu.ui is a browser fabric.

| Name | Sort | Call | Meaning |
| --- | --- | --- | --- |
| [Ref](#ref) | `ref` | `Ref(address, parent_ref=None, owner_shape=None)` | Base for Refs backed by a client rendering surface. Async-only. |

## Ref

Base for Refs backed by a client rendering surface. Async-only.

```python
Ref(address, parent_ref=None, owner_shape=None)
```

Path `nu.ui.Ref`. Kind `Ref`, sort `ref`, cardinality `scalar`.

Undocumented: example.
