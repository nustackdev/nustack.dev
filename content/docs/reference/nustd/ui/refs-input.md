---
title: refs.input
description: "Input Refs -- tab-owned; server reads via `read` + `notify` path."
---

Module `nu.ui.refs.input`.

Input Refs -- tab-owned; server reads via `read` + `notify` path.

The browser owns the live value. Host reads via `Ref` (round-trip
through session), subscribes to changes via `.changed()` / `.clicked()`.

| Name | Sort | Call | Meaning |
| --- | --- | --- | --- |
| [ButtonRef](#buttonref) | `ref` | `ButtonRef(address, parent_ref=None, owner_shape=None)` | Click trigger; subscribe via `.clicked()`. |
| [CheckboxRef](#checkboxref) | `ref` | `CheckboxRef(address, parent_ref=None, owner_shape=None)` | Boolean toggle whose checked state lives in the browser. |
| [DatePickerRef](#datepickerref) | `ref` | `DatePickerRef(address, parent_ref=None, owner_shape=None)` | Date input whose ISO yyyy-mm-dd value lives in the browser. |
| [InputRef](#inputref) | `ref` | `InputRef(address, parent_ref=None, owner_shape=None)` | Text input whose value lives in the browser. |
| [NumberInputRef](#numberinputref) | `ref` | `NumberInputRef(address, parent_ref=None, owner_shape=None)` | Numeric input whose value lives in the browser. |
| [ProseRef](#proseref) | `ref` | `ProseRef(address, parent_ref=None, owner_shape=None)` | Editable rich text. Value is a markdown string; the browser edits wysiwyg. |
| [RadioGroupRef](#radiogroupref) | `ref` | `RadioGroupRef(address, parent_ref=None, owner_shape=None)` | Single-choice radio group whose value lives in the browser. |
| [SelectRef](#selectref) | `ref` | `SelectRef(address, parent_ref=None, owner_shape=None)` | Dropdown single-select whose value lives in the browser. |
| [SliderRef](#sliderref) | `ref` | `SliderRef(address, parent_ref=None, owner_shape=None)` | Numeric slider whose value lives in the browser. |
| [SwitchRef](#switchref) | `ref` | `SwitchRef(address, parent_ref=None, owner_shape=None)` | On/off switch whose checked state lives in the browser. |
| [TagInputRef](#taginputref) | `ref` | `TagInputRef(address, parent_ref=None, owner_shape=None)` | Multi-tag entry field whose committed list lives in the browser. |
| [TextAreaRef](#textarearef) | `ref` | `TextAreaRef(address, parent_ref=None, owner_shape=None)` | Multi-line text input whose value lives in the browser. |

## ButtonRef

Click trigger; subscribe via `.clicked()`.

```python
ButtonRef(address, parent_ref=None, owner_shape=None)
```

Path `nu.ui.ButtonRef`. Kind `Ref`, sort `ref`, cardinality `scalar`.

**Methods**

### `.clicked()`

Builds `Changed`.

Undocumented: summary, example.

### `.set_label(text)`

Builds `Nu`.

**Arguments**

| Name | Type | Default | Meaning |
| --- | --- | --- | --- |
| `text` | `StrArg` |  |  |

Undocumented: summary, example.

### `.set_variant(name)`

Builds `Nu`.

**Arguments**

| Name | Type | Default | Meaning |
| --- | --- | --- | --- |
| `name` | `Variant \| StrArg` |  |  |

Undocumented: summary, example.

### `.set_disabled(flag)`

Builds `Nu`.

**Arguments**

| Name | Type | Default | Meaning |
| --- | --- | --- | --- |
| `flag` | `BoolArg` |  |  |

Undocumented: summary, example.

### `.set(label, variant=<UNSET>, disabled=<UNSET>, icon=<UNSET>)`

Builds `Nu`.

**Arguments**

| Name | Type | Default | Meaning |
| --- | --- | --- | --- |
| `label` | `StrArg` |  |  |
| `variant` | `Variant \| StrArg` | `<UNSET>` |  |
| `disabled` | `BoolArg` | `<UNSET>` |  |
| `icon` | `StrArg` | `<UNSET>` |  |

Undocumented: summary, example.

Undocumented: example.

## CheckboxRef

Boolean toggle whose checked state lives in the browser.

```python
CheckboxRef(address, parent_ref=None, owner_shape=None)
```

Path `nu.ui.CheckboxRef`. Kind `Ref`, sort `ref`, cardinality `scalar`.

**Methods**

### `.set(value)`

Builds `Nu`.

**Arguments**

| Name | Type | Default | Meaning |
| --- | --- | --- | --- |
| `value` | `BoolArg` |  |  |

Undocumented: summary, example.

### `.changed()`

Builds `Changed`.

Undocumented: summary, example.

Undocumented: example.

## DatePickerRef

Date input whose ISO yyyy-mm-dd value lives in the browser.

```python
DatePickerRef(address, parent_ref=None, owner_shape=None)
```

Path `nu.ui.DatePickerRef`. Kind `Ref`, sort `ref`, cardinality `scalar`.

**Methods**

### `.set(value)`

Builds `Nu`.

**Arguments**

| Name | Type | Default | Meaning |
| --- | --- | --- | --- |
| `value` | `StrArg` |  |  |

Undocumented: summary, example.

### `.changed()`

Builds `Changed`.

Undocumented: summary, example.

Undocumented: example.

## InputRef

Text input whose value lives in the browser.

```python
InputRef(address, parent_ref=None, owner_shape=None)
```

Path `nu.ui.InputRef`. Kind `Ref`, sort `ref`, cardinality `scalar`.

Default face is display (Inter); code-shaped fields opt into
JetBrains Mono via `mono=True`, which flips `font-mono` at render time.

**Methods**

### `.set(value)`

Builds `Nu`.

**Arguments**

| Name | Type | Default | Meaning |
| --- | --- | --- | --- |
| `value` | `StrArg` |  |  |

Undocumented: summary, example.

### `.changed()`

Builds `Changed`.

Undocumented: summary, example.

Undocumented: example.

## NumberInputRef

Numeric input whose value lives in the browser.

```python
NumberInputRef(address, parent_ref=None, owner_shape=None)
```

Path `nu.ui.NumberInputRef`. Kind `Ref`, sort `ref`, cardinality `scalar`.

**Methods**

### `.set_value(value)`

Builds `Nu`.

**Arguments**

| Name | Type | Default | Meaning |
| --- | --- | --- | --- |
| `value` | `FloatArg` |  |  |

Undocumented: summary, example.

### `.set_min(value)`

Builds `Nu`.

**Arguments**

| Name | Type | Default | Meaning |
| --- | --- | --- | --- |
| `value` | `FloatArg \| None` |  |  |

Undocumented: summary, example.

### `.set_max(value)`

Builds `Nu`.

**Arguments**

| Name | Type | Default | Meaning |
| --- | --- | --- | --- |
| `value` | `FloatArg \| None` |  |  |

Undocumented: summary, example.

### `.set_step(value)`

Builds `Nu`.

**Arguments**

| Name | Type | Default | Meaning |
| --- | --- | --- | --- |
| `value` | `FloatArg` |  |  |

Undocumented: summary, example.

### `.set_label(text)`

Builds `Nu`.

**Arguments**

| Name | Type | Default | Meaning |
| --- | --- | --- | --- |
| `text` | `StrArg` |  |  |

Undocumented: summary, example.

### `.set(value, min=<UNSET>, max=<UNSET>, step=<UNSET>, label=<UNSET>)`

Builds `Nu`.

**Arguments**

| Name | Type | Default | Meaning |
| --- | --- | --- | --- |
| `value` | `FloatArg` |  |  |
| `min` | `FloatArg` | `<UNSET>` |  |
| `max` | `FloatArg` | `<UNSET>` |  |
| `step` | `FloatArg` | `<UNSET>` |  |
| `label` | `StrArg` | `<UNSET>` |  |

Undocumented: summary, example.

### `.changed()`

Builds `Changed`.

Undocumented: summary, example.

Undocumented: example.

## ProseRef

Editable rich text. Value is a markdown string; the browser edits wysiwyg.

```python
ProseRef(address, parent_ref=None, owner_shape=None)
```

Path `nu.ui.ProseRef`. Kind `Ref`, sort `ref`, cardinality `scalar`.

Bidirectional, unlike `MarkdownRef` (display-only). The server writes the
source with `set`, reads it back through `Ref` like any input Ref, and
subscribes with `changed()`. The browser renders the markdown as a live
document and notifies back on a quiet moment or on blur.

Last actor wins. There is no merge, no OT, no CRDT: a `set` from the
server replaces the document outright, and a notify from the browser
replaces the server's copy. Two people typing into the same Ref at the
same time will clobber each other, by design.

`read_only=True` renders the same document but refuses edits, so a
program can reuse one renderer for both faces.

**Methods**

### `.set(value)`

Builds `Nu`.

**Arguments**

| Name | Type | Default | Meaning |
| --- | --- | --- | --- |
| `value` | `StrArg` |  |  |

Undocumented: summary, example.

### `.set_placeholder(text)`

Builds `Nu`.

**Arguments**

| Name | Type | Default | Meaning |
| --- | --- | --- | --- |
| `text` | `StrArg` |  |  |

Undocumented: summary, example.

### `.set_read_only(flag)`

Builds `Nu`.

**Arguments**

| Name | Type | Default | Meaning |
| --- | --- | --- | --- |
| `flag` | `BoolArg` |  |  |

Undocumented: summary, example.

### `.changed()`

Builds `Changed`.

Undocumented: summary, example.

Undocumented: example.

## RadioGroupRef

Single-choice radio group whose value lives in the browser.

```python
RadioGroupRef(address, parent_ref=None, owner_shape=None)
```

Path `nu.ui.RadioGroupRef`. Kind `Ref`, sort `ref`, cardinality `scalar`.

**Methods**

### `.set(value)`

Builds `Nu`.

**Arguments**

| Name | Type | Default | Meaning |
| --- | --- | --- | --- |
| `value` | `StrArg` |  |  |

Undocumented: summary, example.

### `.set_options(opts)`

Builds `Nu`.

**Arguments**

| Name | Type | Default | Meaning |
| --- | --- | --- | --- |
| `opts` | `ListArg[str] \| ListArg[dict[str, str]]` |  |  |

Undocumented: summary, example.

### `.changed()`

Builds `Changed`.

Undocumented: summary, example.

Undocumented: example.

## SelectRef

Dropdown single-select whose value lives in the browser.

```python
SelectRef(address, parent_ref=None, owner_shape=None)
```

Path `nu.ui.SelectRef`. Kind `Ref`, sort `ref`, cardinality `scalar`.

**Methods**

### `.set(value)`

Builds `Nu`.

**Arguments**

| Name | Type | Default | Meaning |
| --- | --- | --- | --- |
| `value` | `StrArg` |  |  |

Undocumented: summary, example.

### `.set_options(opts)`

Builds `Nu`.

**Arguments**

| Name | Type | Default | Meaning |
| --- | --- | --- | --- |
| `opts` | `ListArg[str] \| ListArg[dict[str, str]]` |  |  |

Undocumented: summary, example.

### `.changed()`

Builds `Changed`.

Undocumented: summary, example.

Undocumented: example.

## SliderRef

Numeric slider whose value lives in the browser.

```python
SliderRef(address, parent_ref=None, owner_shape=None)
```

Path `nu.ui.SliderRef`. Kind `Ref`, sort `ref`, cardinality `scalar`.

**Methods**

### `.set_value(value)`

Builds `Nu`.

**Arguments**

| Name | Type | Default | Meaning |
| --- | --- | --- | --- |
| `value` | `FloatArg` |  |  |

Undocumented: summary, example.

### `.set_min(value)`

Builds `Nu`.

**Arguments**

| Name | Type | Default | Meaning |
| --- | --- | --- | --- |
| `value` | `FloatArg` |  |  |

Undocumented: summary, example.

### `.set_max(value)`

Builds `Nu`.

**Arguments**

| Name | Type | Default | Meaning |
| --- | --- | --- | --- |
| `value` | `FloatArg` |  |  |

Undocumented: summary, example.

### `.set_step(value)`

Builds `Nu`.

**Arguments**

| Name | Type | Default | Meaning |
| --- | --- | --- | --- |
| `value` | `FloatArg` |  |  |

Undocumented: summary, example.

### `.set_label(text)`

Builds `Nu`.

**Arguments**

| Name | Type | Default | Meaning |
| --- | --- | --- | --- |
| `text` | `StrArg` |  |  |

Undocumented: summary, example.

### `.set_show_value(flag)`

Builds `Nu`.

**Arguments**

| Name | Type | Default | Meaning |
| --- | --- | --- | --- |
| `flag` | `BoolArg` |  |  |

Undocumented: summary, example.

### `.set(value, min=<UNSET>, max=<UNSET>, step=<UNSET>, label=<UNSET>, show_value=<UNSET>)`

Builds `Nu`.

**Arguments**

| Name | Type | Default | Meaning |
| --- | --- | --- | --- |
| `value` | `FloatArg` |  |  |
| `min` | `FloatArg` | `<UNSET>` |  |
| `max` | `FloatArg` | `<UNSET>` |  |
| `step` | `FloatArg` | `<UNSET>` |  |
| `label` | `StrArg` | `<UNSET>` |  |
| `show_value` | `BoolArg` | `<UNSET>` |  |

Undocumented: summary, example.

### `.changed()`

Builds `Changed`.

Undocumented: summary, example.

Undocumented: example.

## SwitchRef

On/off switch whose checked state lives in the browser.

```python
SwitchRef(address, parent_ref=None, owner_shape=None)
```

Path `nu.ui.SwitchRef`. Kind `Ref`, sort `ref`, cardinality `scalar`.

**Methods**

### `.set(value)`

Builds `Nu`.

**Arguments**

| Name | Type | Default | Meaning |
| --- | --- | --- | --- |
| `value` | `BoolArg` |  |  |

Undocumented: summary, example.

### `.changed()`

Builds `Changed`.

Undocumented: summary, example.

Undocumented: example.

## TagInputRef

Multi-tag entry field whose committed list lives in the browser.

```python
TagInputRef(address, parent_ref=None, owner_shape=None)
```

Path `nu.ui.TagInputRef`. Kind `Ref`, sort `ref`, cardinality `scalar`.

**Methods**

### `.set(value)`

Builds `Nu`.

**Arguments**

| Name | Type | Default | Meaning |
| --- | --- | --- | --- |
| `value` | `ListArg[str]` |  |  |

Undocumented: summary, example.

### `.changed()`

Builds `Changed`.

Undocumented: summary, example.

Undocumented: example.

## TextAreaRef

Multi-line text input whose value lives in the browser.

```python
TextAreaRef(address, parent_ref=None, owner_shape=None)
```

Path `nu.ui.TextAreaRef`. Kind `Ref`, sort `ref`, cardinality `scalar`.

`auto_resize=True` maps to the primitive's `field-sizing: content` mode.
Default face is display (Inter); set `mono=True` at class level for
code-shaped fields to flip `font-mono` at render.

**Methods**

### `.set(value)`

Builds `Nu`.

**Arguments**

| Name | Type | Default | Meaning |
| --- | --- | --- | --- |
| `value` | `StrArg` |  |  |

Undocumented: summary, example.

### `.changed()`

Builds `Changed`.

Undocumented: summary, example.

Undocumented: example.
