---
title: ui
description: "nu.ui -- component fabric."
---

Module `nu.ui`.

nu.ui -- component fabric.

Layout under `src/nu/ui/`:

- `core/`   -- host-independent UI fabric: `Ref`, `Section` /
                 `SectionRef`, abstract `Session` / `Subscription`,
                 wire `Frame` + interactions (`Write` / `Append` /
                 `Changed`). Reusable by any host.
- `refs/`   -- widget kit (Row, Card, Table, Input, ...); depends only on core.
- `nudle/`  -- Page-based host: `Page` / `Index` / `Pages` +
                 `NudleSession` over ws + FastAPI serve fabric.
- `web/`    -- everything for the browser: npm workspace with `core`,
                 `kit`, and the `nudle` Vite SPA (also the pypi wheel
                 that ships the compiled SPA).

Public entry stays at `nu.ui`: this `__init__` re-exports the core
fabric, widget kit, and nudle host names so existing ``import nu.ui as
nu_ui`` code keeps working.

## core.interactions

Module `nu.ui.core.interactions`.

Wire interactions -- ops that flow over a Session on a Ref.

[Full entries](/docs/reference/nustd/ui/core-interactions)

| Name | Sort | Call | Meaning |
| --- | --- | --- | --- |
| [Append](/docs/reference/nustd/ui/core-interactions#append) | `scalar_command` | `Append()` | Send an `append` frame on a Ref -- push onto a sequence. |
| [Changed](/docs/reference/nustd/ui/core-interactions#changed) | `scalar_query` | `Changed()` | Subscribe to client-side change notifications on a Ref. |
| [Write](/docs/reference/nustd/ui/core-interactions#write) | `scalar_command` | `Write()` | Send a `write` frame on a Ref -- replace the value. |

## refs.output

Module `nu.ui.refs.output`.

Display / output Refs -- server-owned sinks that render into the body.

[Full entries](/docs/reference/nustd/ui/refs-output)

| Name | Sort | Call | Meaning |
| --- | --- | --- | --- |
| [AlertRef](/docs/reference/nustd/ui/refs-output#alertref) | `ref` | `AlertRef(address, parent_ref=None, owner_shape=None)` | Display banner ref. `write` carries partial updates; `notify` fires on user dismiss. |
| [BadgeRef](/docs/reference/nustd/ui/refs-output#badgeref) | `ref` | `BadgeRef(address, parent_ref=None, owner_shape=None)` | Display-only badge ref. One `write` op carries every mutation. |
| [CodeBlockRef](/docs/reference/nustd/ui/refs-output#codeblockref) | `ref` | `CodeBlockRef(address, parent_ref=None, owner_shape=None)` | Display-only code block. One `write` carries a partial dict {code, language, show_copy}. |
| [DividerRef](/docs/reference/nustd/ui/refs-output#dividerref) | `ref` | `DividerRef(address, parent_ref=None, owner_shape=None)` | Display-only divider ref. One `write` op carries every mutation. |
| [GaugeRef](/docs/reference/nustd/ui/refs-output#gaugeref) | `ref` | `GaugeRef(address, parent_ref=None, owner_shape=None)` | Display-only gauge ref. One `write` op carries every mutation. |
| [HeadingRef](/docs/reference/nustd/ui/refs-output#headingref) | `ref` | `HeadingRef(address, parent_ref=None, owner_shape=None)` | Display-only heading ref. One `write` op carries every mutation. |
| [ImageRef](/docs/reference/nustd/ui/refs-output#imageref) | `ref` | `ImageRef(address, parent_ref=None, owner_shape=None)` | Display-only image ref. One `write` op carries every mutation. |
| [JsonViewerRef](/docs/reference/nustd/ui/refs-output#jsonviewerref) | `ref` | `JsonViewerRef(address, parent_ref=None, owner_shape=None)` | Display-only json viewer ref. One `write` op carries every mutation via partial-merge. |
| [LinkRef](/docs/reference/nustd/ui/refs-output#linkref) | `ref` | `LinkRef(address, parent_ref=None, owner_shape=None)` | Display-only link ref. One `write` op carries every mutation. |
| [MarkdownRef](/docs/reference/nustd/ui/refs-output#markdownref) | `ref` | `MarkdownRef(address, parent_ref=None, owner_shape=None)` | Display-only markdown ref. Source string rendered as commonmark. |
| [ProgressRef](/docs/reference/nustd/ui/refs-output#progressref) | `ref` | `ProgressRef(address, parent_ref=None, owner_shape=None)` | Display-only progress ref. One `write` op carries every mutation. |
| [StatRef](/docs/reference/nustd/ui/refs-output#statref) | `ref` | `StatRef(address, parent_ref=None, owner_shape=None)` | Display-only stat ref. Server-owned, single `write` op carries partial updates. |
| [TableRef](/docs/reference/nustd/ui/refs-output#tableref) | `ref` | `TableRef(address, parent_ref=None, owner_shape=None)` | Tabular data; display by default, optional sortable headers and row click. |
| [TextRef](/docs/reference/nustd/ui/refs-output#textref) | `ref` | `TextRef(address, parent_ref=None, owner_shape=None)` | Display-only string ref. Body copy. |

## refs.chart

Module `nu.ui.refs.chart`.

Chart Refs -- typed visualization sinks over series payloads.

[Full entries](/docs/reference/nustd/ui/refs-chart)

| Name | Sort | Call | Meaning |
| --- | --- | --- | --- |
| [AreaChart](/docs/reference/nustd/ui/refs-chart#areachart) | `ref` | `AreaChart(address, parent_ref=None, owner_shape=None)` | Display-only area chart. `write` (partial) and `append` (one row). |
| [BarChart](/docs/reference/nustd/ui/refs-chart#barchart) | `ref` | `BarChart(address, parent_ref=None, owner_shape=None)` | Display-only chart ref. `write` (partial) and `append` (one bar). |
| [LineChart](/docs/reference/nustd/ui/refs-chart#linechart) | `ref` | `LineChart(address, parent_ref=None, owner_shape=None)` | Display-only chart ref. `write` (partial) and `append` (one point or one series row). |
| [PieChart](/docs/reference/nustd/ui/refs-chart#piechart) | `ref` | `PieChart(address, parent_ref=None, owner_shape=None)` | Display-only pie chart ref. `write` (partial) and `append` (one slice). |
| [Sparkline](/docs/reference/nustd/ui/refs-chart#sparkline) | `ref` | `Sparkline(address, parent_ref=None, owner_shape=None)` | Display-only inline trend line. `write` (partial) and `append` (one point). |

## refs.input

Module `nu.ui.refs.input`.

Input Refs -- tab-owned; server reads via `read` + `notify` path.

[Full entries](/docs/reference/nustd/ui/refs-input)

| Name | Sort | Call | Meaning |
| --- | --- | --- | --- |
| [ButtonRef](/docs/reference/nustd/ui/refs-input#buttonref) | `ref` | `ButtonRef(address, parent_ref=None, owner_shape=None)` | Click trigger; subscribe via `.clicked()`. |
| [CheckboxRef](/docs/reference/nustd/ui/refs-input#checkboxref) | `ref` | `CheckboxRef(address, parent_ref=None, owner_shape=None)` | Boolean toggle whose checked state lives in the browser. |
| [DatePickerRef](/docs/reference/nustd/ui/refs-input#datepickerref) | `ref` | `DatePickerRef(address, parent_ref=None, owner_shape=None)` | Date input whose ISO yyyy-mm-dd value lives in the browser. |
| [InputRef](/docs/reference/nustd/ui/refs-input#inputref) | `ref` | `InputRef(address, parent_ref=None, owner_shape=None)` | Text input whose value lives in the browser. |
| [NumberInputRef](/docs/reference/nustd/ui/refs-input#numberinputref) | `ref` | `NumberInputRef(address, parent_ref=None, owner_shape=None)` | Numeric input whose value lives in the browser. |
| [ProseRef](/docs/reference/nustd/ui/refs-input#proseref) | `ref` | `ProseRef(address, parent_ref=None, owner_shape=None)` | Editable rich text. Value is a markdown string; the browser edits wysiwyg. |
| [RadioGroupRef](/docs/reference/nustd/ui/refs-input#radiogroupref) | `ref` | `RadioGroupRef(address, parent_ref=None, owner_shape=None)` | Single-choice radio group whose value lives in the browser. |
| [SelectRef](/docs/reference/nustd/ui/refs-input#selectref) | `ref` | `SelectRef(address, parent_ref=None, owner_shape=None)` | Dropdown single-select whose value lives in the browser. |
| [SliderRef](/docs/reference/nustd/ui/refs-input#sliderref) | `ref` | `SliderRef(address, parent_ref=None, owner_shape=None)` | Numeric slider whose value lives in the browser. |
| [SwitchRef](/docs/reference/nustd/ui/refs-input#switchref) | `ref` | `SwitchRef(address, parent_ref=None, owner_shape=None)` | On/off switch whose checked state lives in the browser. |
| [TagInputRef](/docs/reference/nustd/ui/refs-input#taginputref) | `ref` | `TagInputRef(address, parent_ref=None, owner_shape=None)` | Multi-tag entry field whose committed list lives in the browser. |
| [TextAreaRef](/docs/reference/nustd/ui/refs-input#textarearef) | `ref` | `TextAreaRef(address, parent_ref=None, owner_shape=None)` | Multi-line text input whose value lives in the browser. |

## refs.structural

Module `nu.ui.refs.structural`.

Structural Refs -- bound to non-render browser APIs.

[Full entries](/docs/reference/nustd/ui/refs-structural)

| Name | Sort | Call | Meaning |
| --- | --- | --- | --- |
| [NavRef](/docs/reference/nustd/ui/refs-structural#navref) | `ref` | `NavRef(address, parent_ref=None, owner_shape=None)` | Bound to window.history + window.location. Index-level structural Ref. |
| [TitleRef](/docs/reference/nustd/ui/refs-structural#titleref) | `ref` | `TitleRef(address, parent_ref=None, owner_shape=None)` | Bound to document.title. Index-level structural Ref. |

## core.base

Module `nu.ui.core.base`.

Generic UI Ref -- host-independent base for the widget kit.

[Full entries](/docs/reference/nustd/ui/core-base)

| Name | Sort | Call | Meaning |
| --- | --- | --- | --- |
| [Ref](/docs/reference/nustd/ui/core-base#ref) | `ref` | `Ref(address, parent_ref=None, owner_shape=None)` | Base for Refs backed by a client rendering surface. Async-only. |

## core.section

Module `nu.ui.core.section`.

Section -- shape-based container primitive for the UI kit.

[Full entries](/docs/reference/nustd/ui/core-section)

| Name | Sort | Call | Meaning |
| --- | --- | --- | --- |
| [SectionRef](/docs/reference/nustd/ui/core-section#sectionref) | `ref` | `SectionRef(address, section_cls, parent_ref=None, owner_shape=None)` | Substrate Ref backing a Section slot. |
| [Section](/docs/reference/nustd/ui/core-section#section) |  |  | Base for shape-based layout primitives. |

## refs.layout

Module `nu.ui.refs.layout`.

Layout Sections -- Shape-based containers that wrap other Refs.

[Full entries](/docs/reference/nustd/ui/refs-layout)

| Name | Call | Meaning |
| --- | --- | --- |
| [Accordion](/docs/reference/nustd/ui/refs-layout#accordion) |  | Stack of collapsible sections. Tab owns open state, server owns the section list. |
| [Card](/docs/reference/nustd/ui/refs-layout#card) |  | Card-styled Section: title + subtitle + body slots + footer. |
| [Column](/docs/reference/nustd/ui/refs-layout#column) |  | Vertical flex layout. Pin chrome on the slot(). |
| [Container](/docs/reference/nustd/ui/refs-layout#container) |  | Styled card-like box. Pin chrome on slot(). |
| [Field](/docs/reference/nustd/ui/refs-layout#field) |  | Label + child input + help / error text. Exactly one child slot. |
| [Fieldset](/docs/reference/nustd/ui/refs-layout#fieldset) |  | Grouped fields with a legend. Display-only, server-owned. |
| [Form](/docs/reference/nustd/ui/refs-layout#form) |  | Semantic form wrapper. Pin chrome on slot(); submit lives on a child ButtonRef. |
| [Modal](/docs/reference/nustd/ui/refs-layout#modal) |  | Dialog overlay. Pin chrome on slot(); declare body Refs as slots. |
| [Row](/docs/reference/nustd/ui/refs-layout#row) |  | Horizontal flex layout. Pin chrome on slot(). |
| [Tabs](/docs/reference/nustd/ui/refs-layout#tabs) |  | Tab strip plus active body. Subclass and declare one child slot per tab body. |

## nudle.page

Module `nu.ui.nudle.page`.

Top-level Shape kinds for nudle.

[Full entries](/docs/reference/nustd/ui/nudle-page)

| Name | Call | Meaning |
| --- | --- | --- |
| [Index](/docs/reference/nustd/ui/nudle-page#index) |  | Browser entrypoint. One per app. |
| [Page](/docs/reference/nustd/ui/nudle-page#page) |  | Sub-shape that lives inside an Index's `pages` map. |

## nudle.fabric

Module `nu.ui.nudle.fabric`.

`NudleServer` -- fabric that runs a nudle UI over ws for a body's duration.

[Full entries](/docs/reference/nustd/ui/nudle-fabric)

| Name | Call | Meaning |
| --- | --- | --- |
| [server](/docs/reference/nustd/ui/nudle-fabric#server) | `ui.server(app, host='127.0.0.1', port=8080, log_level='warning', open_browser=True, ready_timeout=10.0, shutdown_timeout=5.0)` | Boot a nudle ws server around a body: `Provide(NudleServer, {...})`. |
