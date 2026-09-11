---
title: nu.ui.core.section
description: "Section -- shape-based container primitive for the UI kit."
---

Section -- shape-based container primitive for the UI kit.

A Section is a Shape (not a Ref) that groups other Refs and Sections as
declared slots. Concrete layout primitives (Row, Column, Card, Tabs, ...)
subclass Section and pin chrome defaults; user code subclasses those.

Hosts stamp their own mount metadata onto a Section subclass at class
creation time (e.g. nudle's Page stamps `_nudle_mount`). This module
carries no host-specific markers.

SectionRef is the substrate Ref that backs a Section slot. Attribute
access on a bound SectionRef (e.g. `page.toolbar.text`) walks into the
section's child slots.

| Name | Sort | Call | Meaning |
| --- | --- | --- | --- |
| [SectionRef](#sectionref) | `ref` | `SectionRef(address, section_cls, parent_ref=None, owner_shape=None)` | Substrate Ref backing a Section slot. |
| [Section](#section) |  |  | Base for shape-based layout primitives. |

## SectionRef

Substrate Ref backing a Section slot.

```python
SectionRef(address, section_cls, parent_ref=None, owner_shape=None)
```

Path `nu.ui.SectionRef`. Kind `Ref`, sort `ref`, cardinality `scalar`.

Instances are created by `Section.slot()` and exposed at the parent
(Page or another Section) level. Carries `section_cls`; attribute
access returns a child Ref whose `parent` is this SectionRef.

Undocumented: example.

## Section

Base for shape-based layout primitives.

Path `nu.ui.Section`.

Subclass to declare child slots and pin chrome defaults:

    class Toolbar(Row):
        gap = 3
        text = TextRef.slot()
        btn = ButtonRef.slot()

Hosts may stamp their own metadata onto Section subclasses (e.g.
nudle's Page stamps mount-path info); this base carries none.

Undocumented: example.
