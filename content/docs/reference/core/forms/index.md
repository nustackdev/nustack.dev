---
title: nu.forms
description: "Native Form layer."
---

Native Form layer.

A Form is what a fabric location holds (an Int, a Str, a Dict, a ToList) and the
fluent typed surface for building Nu over it. The base mixin `Form` and the
passthrough `TypedNu` live in `nu.lang` (re-exported here for convenience);
the sentinel predicates (`IsEmpty` / `IsInvalid`) live in `nu.core`.

Concrete primitive Forms live in `primitives/`, concrete collection Forms in
`collections/` (with abstract contracts in `collections/abc/`).

## nu.lang.forms

Form and TypedNu - the type-wrapping layer.

[Full entries](/docs/reference/core/forms/nu-lang-forms)

| Name | Sort | Call | Meaning |
| --- | --- | --- | --- |
| [TypedNu](/docs/reference/core/forms/nu-lang-forms#typednu) | `scalar_query` | `TypedNu()` | Transparent ScalarQuery passthrough carrying a python type tag `T`. |

## nu.forms.primitives.any_

Any - dynamic/unknown type interface.

[Full entries](/docs/reference/core/forms/primitives-any)

| Name | Sort | Call | Meaning |
| --- | --- | --- | --- |
| [Any](/docs/reference/core/forms/primitives-any#any) | `scalar_query` | `Any()` | Wildcard interface. Full operator surface, no promise about the runtime type. |

## nu.forms.primitives.bool_

Bool - boolean interface.

[Full entries](/docs/reference/core/forms/primitives-bool)

| Name | Sort | Call | Meaning |
| --- | --- | --- | --- |
| [Bool](/docs/reference/core/forms/primitives-bool#bool) | `scalar_query` | `Bool()` | Boolean interface. Logical + comparable. |

## nu.forms.primitives.bytes_

Bytes - bytes interface.

[Full entries](/docs/reference/core/forms/primitives-bytes)

| Name | Sort | Call | Meaning |
| --- | --- | --- | --- |
| [Bytes](/docs/reference/core/forms/primitives-bytes#bytes) | `scalar_query` | `Bytes()` | Bytes interface. Sliceable + comparable + logical + bytes methods. |

## nu.forms.collections.dict_

Dict - dict interface.

[Full entries](/docs/reference/core/forms/collections-dict)

| Name | Sort | Call | Meaning |
| --- | --- | --- | --- |
| [Dict](/docs/reference/core/forms/collections-dict#dict) | `scalar_query` | `Dict()` | Dict interface. Mutable mapping + comparable. |

## nu.forms.collections.views

Dict view interfaces - DictKeys, DictValues, DictItems.

[Full entries](/docs/reference/core/forms/collections-views)

| Name | Sort | Call | Meaning |
| --- | --- | --- | --- |
| [DictItems](/docs/reference/core/forms/collections-views#dictitems) | `scalar_query` | `DictItems()` | View of a Dict's `(key, value)` pairs, produced by `dict.items()`. |
| [DictKeys](/docs/reference/core/forms/collections-views#dictkeys) | `scalar_query` | `DictKeys()` | View of a Dict's keys, produced by `dict.keys()`. |
| [DictValues](/docs/reference/core/forms/collections-views#dictvalues) | `scalar_query` | `DictValues()` | View of a Dict's values, produced by `dict.values()`. |

## nu.forms.primitives.sentinel_

Sentinel interfaces - SentinelForm, EmptyForm, InvalidForm.

[Full entries](/docs/reference/core/forms/primitives-sentinel)

| Name | Sort | Call | Meaning |
| --- | --- | --- | --- |
| [EmptyForm](/docs/reference/core/forms/primitives-sentinel#emptyform) | `scalar_query` | `EmptyForm()` | Wraps EMPTY, the address-resolved-to-nothing sentinel. |
| [InvalidForm](/docs/reference/core/forms/primitives-sentinel#invalidform) | `scalar_query` | `InvalidForm()` | Wraps INVALID, the operation-not-applicable sentinel. |
| [SentinelForm](/docs/reference/core/forms/primitives-sentinel#sentinelform) | `scalar_query` | `SentinelForm()` | Base for the sentinel interfaces, EmptyForm and InvalidForm. |

## nu.forms.primitives.float_

Float - float interface.

[Full entries](/docs/reference/core/forms/primitives-float)

| Name | Sort | Call | Meaning |
| --- | --- | --- | --- |
| [Float](/docs/reference/core/forms/primitives-float#float) | `scalar_query` | `Float()` | Float interface. Numeric + comparable + logical. |

## nu.forms.collections.set_

Set, FrozenSet - set interfaces.

[Full entries](/docs/reference/core/forms/collections-set)

| Name | Sort | Call | Meaning |
| --- | --- | --- | --- |
| [FrozenSet](/docs/reference/core/forms/collections-set#frozenset) | `scalar_query` | `FrozenSet()` | FrozenSet interface. Immutable set + comparable. |
| [Set](/docs/reference/core/forms/collections-set#set) | `scalar_query` | `Set()` | Set interface. Mutable set + comparable. |

## nu.forms.primitives.int_

Int - integer interface.

[Full entries](/docs/reference/core/forms/primitives-int)

| Name | Sort | Call | Meaning |
| --- | --- | --- | --- |
| [Int](/docs/reference/core/forms/primitives-int#int) | `scalar_query` | `Int()` | Integer interface. Full numeric + comparable + logical + bitwise. |

## nu.forms.collections.iterator_

Iterator - lazy iterator interface.

[Full entries](/docs/reference/core/forms/collections-iterator)

| Name | Sort | Call | Meaning |
| --- | --- | --- | --- |
| [Iterator](/docs/reference/core/forms/collections-iterator#iterator) | `scalar_query` | `Iterator()` | Lazy stream over another form's elements. |

## nu.forms.collections.list_

List - list interface.

[Full entries](/docs/reference/core/forms/collections-list)

| Name | Sort | Call | Meaning |
| --- | --- | --- | --- |
| [List](/docs/reference/core/forms/collections-list#list) | `scalar_query` | `List()` | List interface. Mutable sequence + comparable. |

## nu.forms.primitives.none_

None_ - none interface.

[Full entries](/docs/reference/core/forms/primitives-none)

| Name | Sort | Call | Meaning |
| --- | --- | --- | --- |
| [None_](/docs/reference/core/forms/primitives-none#none_) | `scalar_query` | `None_(source=None)` | None interface. Logical only. |

## nu.forms.primitives.str_

Str - string interface.

[Full entries](/docs/reference/core/forms/primitives-str)

| Name | Sort | Call | Meaning |
| --- | --- | --- | --- |
| [Str](/docs/reference/core/forms/primitives-str#str) | `scalar_query` | `Str()` | String interface. Addable + sliceable + comparable + logical + string methods. |

## nu.forms.collections.tuple_

Tuple - tuple interface.

[Full entries](/docs/reference/core/forms/collections-tuple)

| Name | Sort | Call | Meaning |
| --- | --- | --- | --- |
| [Tuple](/docs/reference/core/forms/collections-tuple#tuple) | `scalar_query` | `Tuple()` | Tuple interface. Immutable sequence + comparable. |
