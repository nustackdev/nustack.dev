---
title: nu.ui.refs.layout
description: "Layout Sections -- Shape-based containers that wrap other Refs."
---

Layout Sections -- Shape-based containers that wrap other Refs.

Most of these are `Section` subclasses (not Refs) -- Shape-based
composition primitives that mount other Refs and Sections. Section
and SectionRef come from `nu.ui.core`; this module defines the
concrete layout primitives (Row, Column, Card, Tabs, Modal, Field,
Fieldset, Form, Accordion) that build on them, plus the chrome
interactions those primitives expose.

The chrome commands (`_SetSectionStr`, `_SetTabs`, `_SetActive`) target
the abstract `Session` from core -- so this module is host-agnostic;
any host that implements `Session` runs it. Address resolution for
section-scoped chrome writes goes through `_SectionMountRef`, which
asks the section's own `_wire_prefix()` classmethod (stamped by the
host, e.g. nudle's Page) for its wire path.

| Name | Call | Meaning |
| --- | --- | --- |
| [Accordion](#accordion) |  | Stack of collapsible sections. Tab owns open state, server owns the section list. |
| [Card](#card) |  | Card-styled Section: title + subtitle + body slots + footer. |
| [Column](#column) |  | Vertical flex layout. Pin chrome on the slot(). |
| [Container](#container) |  | Styled card-like box. Pin chrome on slot(). |
| [Field](#field) |  | Label + child input + help / error text. Exactly one child slot. |
| [Fieldset](#fieldset) |  | Grouped fields with a legend. Display-only, server-owned. |
| [Form](#form) |  | Semantic form wrapper. Pin chrome on slot(); submit lives on a child ButtonRef. |
| [Modal](#modal) |  | Dialog overlay. Pin chrome on slot(); declare body Refs as slots. |
| [Row](#row) |  | Horizontal flex layout. Pin chrome on slot(). |
| [Tabs](#tabs) |  | Tab strip plus active body. Subclass and declare one child slot per tab body. |

## Accordion

Stack of collapsible sections. Tab owns open state, server owns the section list.

Path `nu.ui.Accordion`.

Undocumented: example.

## Card

Card-styled Section: title + subtitle + body slots + footer.

Path `nu.ui.Card`.

Undocumented: example.

## Column

Vertical flex layout. Pin chrome on the slot().

Path `nu.ui.Column`.

Undocumented: example.

## Container

Styled card-like box. Pin chrome on slot().

Path `nu.ui.Container`.

Undocumented: example.

## Field

Label + child input + help / error text. Exactly one child slot.

Path `nu.ui.Field`.

Undocumented: example.

## Fieldset

Grouped fields with a legend. Display-only, server-owned.

Path `nu.ui.Fieldset`.

Undocumented: example.

## Form

Semantic form wrapper. Pin chrome on slot(); submit lives on a child ButtonRef.

Path `nu.ui.Form`.

Undocumented: example.

## Modal

Dialog overlay. Pin chrome on slot(); declare body Refs as slots.

Path `nu.ui.Modal`.

Undocumented: example.

## Row

Horizontal flex layout. Pin chrome on slot().

Path `nu.ui.Row`.

Undocumented: example.

## Tabs

Tab strip plus active body. Subclass and declare one child slot per tab body.

Path `nu.ui.Tabs`.

Undocumented: example.
