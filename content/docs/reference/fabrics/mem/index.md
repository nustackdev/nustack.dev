---
title: nu.mem
description: "nu.mem: the shape fabric over plain nested Python dicts."
---

nu.mem: the shape fabric over plain nested Python dicts.

A Shape declares slots, each slot is a ref, and every ref is a path of keys
into one dict you hand in. No storage backend, no views, no reactivity: reads
walk the dict, writes mutate it in place, and the dict stays yours to print,
copy or dump.

A missing key on the way down reads EMPTY rather than raising, and a write
creates whatever levels it needs, so a Shape can be laid over an empty dict
and filled in as it goes.

Usage:

```python
import nu.mem as nm
from nu import Context
from nu.domains.shape import Shape

class User(Shape):
    name = nm.StrRef.slot()
    age = nm.IntRef.slot()

data = {}
ctx = Context().bind(dict, data, User)
```

Typed leaves (`IntRef`, `StrRef`, `DatetimeRef`, ...) each carry their
value Form, so the ref itself is an operand. Containers (`ListRef`,
`DictRef`, `SetRef`) hold a plain list, dict or set. `ShapeRef`,
`ShapesListRef` and `ShapesDictRef` nest Shapes inside Shapes.
`ProgramRef` holds Nu source. `JQueueRef`, in `nu.mem.refs.jqueue`,
holds a live janus queue and is imported by its own path.

## nu.mem.refs.std

Dict-substrate refs for standard-library value types.

[Full entries](/docs/reference/fabrics/mem/refs-std)

| Name | Sort | Call | Meaning |
| --- | --- | --- | --- |
| [BasisPointRef](/docs/reference/fabrics/mem/refs-std#basispointref) | `ref` | `BasisPointRef(address, parent_ref=None, owner_shape=None)` | A BasisPoint slot in the dict substrate, stored as a raw int of bps. |
| [ComplexRef](/docs/reference/fabrics/mem/refs-std#complexref) | `ref` | `ComplexRef(address, parent_ref=None, owner_shape=None)` | A complex slot in the dict substrate, stored as `str(complex)`. |
| [DateRef](/docs/reference/fabrics/mem/refs-std#dateref) | `ref` | `DateRef(address, parent_ref=None, owner_shape=None)` | A date slot in the dict substrate, stored as an ISO string. |
| [DatetimeRef](/docs/reference/fabrics/mem/refs-std#datetimeref) | `ref` | `DatetimeRef(address, parent_ref=None, owner_shape=None)` | A datetime slot in the dict substrate, stored as an ISO string. |
| [DecimalRef](/docs/reference/fabrics/mem/refs-std#decimalref) | `ref` | `DecimalRef(address, parent_ref=None, owner_shape=None)` | A Decimal slot in the dict substrate, stored as its exact string form. |
| [FractionRef](/docs/reference/fabrics/mem/refs-std#fractionref) | `ref` | `FractionRef(address, parent_ref=None, owner_shape=None)` | A Fraction slot in the dict substrate, stored as `"numerator/denom"`. |
| [PathRef](/docs/reference/fabrics/mem/refs-std#pathref) | `ref` | `PathRef(address, parent_ref=None, owner_shape=None)` | A filesystem path slot in the dict substrate, stored as a plain str. |
| [PercentageRef](/docs/reference/fabrics/mem/refs-std#percentageref) | `ref` | `PercentageRef(address, parent_ref=None, owner_shape=None)` | A Percentage slot in the dict substrate, stored as a raw float. |
| [TimeRef](/docs/reference/fabrics/mem/refs-std#timeref) | `ref` | `TimeRef(address, parent_ref=None, owner_shape=None)` | A time-of-day slot in the dict substrate, stored as an ISO string. |
| [TimedeltaRef](/docs/reference/fabrics/mem/refs-std#timedeltaref) | `ref` | `TimedeltaRef(address, parent_ref=None, owner_shape=None)` | A timedelta slot in the dict substrate, stored as total seconds. |
| [TimezoneRef](/docs/reference/fabrics/mem/refs-std#timezoneref) | `ref` | `TimezoneRef(address, parent_ref=None, owner_shape=None)` | A fixed-offset timezone slot, stored as its `UTC±HH:MM` string. |
| [UUIDRef](/docs/reference/fabrics/mem/refs-std#uuidref) | `ref` | `UUIDRef(address, parent_ref=None, owner_shape=None)` | A UUID slot in the dict substrate, stored as its hyphenated string. |

## nu.mem.refs.items

Dict substrate item refs: typed value holders in nested dicts.

[Full entries](/docs/reference/fabrics/mem/refs-items)

| Name | Sort | Call | Meaning |
| --- | --- | --- | --- |
| [BoolRef](/docs/reference/fabrics/mem/refs-items#boolref) | `ref` | `BoolRef(address, parent_ref=None, owner_shape=None)` | A bool slot in the dict substrate, carrying the whole Bool surface. |
| [BytesRef](/docs/reference/fabrics/mem/refs-items#bytesref) | `ref` | `BytesRef(address, parent_ref=None, owner_shape=None)` | A bytes slot in the dict substrate, carrying the whole Bytes surface. |
| [FloatRef](/docs/reference/fabrics/mem/refs-items#floatref) | `ref` | `FloatRef(address, parent_ref=None, owner_shape=None)` | A float slot in the dict substrate, carrying the whole Float surface. |
| [IntRef](/docs/reference/fabrics/mem/refs-items#intref) | `ref` | `IntRef(address, parent_ref=None, owner_shape=None)` | An int slot in the dict substrate, carrying the whole Int surface. |
| [ItemRef](/docs/reference/fabrics/mem/refs-items#itemref) | `ref` | `ItemRef(address, value_type, value_value_type, parent_ref=None, owner_shape=None)` | A single stored value in the dict substrate, with no value interface. |
| [StrRef](/docs/reference/fabrics/mem/refs-items#strref) | `ref` | `StrRef(address, parent_ref=None, owner_shape=None)` | A str slot in the dict substrate, carrying the whole Str surface. |

## nu.mem.refs.dict

Dict mapping reference: key-value container backed by nested dict.

[Full entries](/docs/reference/fabrics/mem/refs-dict)

| Name | Sort | Call | Meaning |
| --- | --- | --- | --- |
| [DictRef](/docs/reference/fabrics/mem/refs-dict#dictref) | `ref` | `DictRef(address, value_type, key_type, key_value_type, value_value_type, parent_ref=None, owner_shape=None)` | A mapping slot in the dict substrate, holding one plain dict of values. |

## nu.mem.refs.list

Dict sequence reference: ordered container backed by nested list.

[Full entries](/docs/reference/fabrics/mem/refs-list)

| Name | Sort | Call | Meaning |
| --- | --- | --- | --- |
| [ListRef](/docs/reference/fabrics/mem/refs-list#listref) | `ref` | `ListRef(address, item_type, item_value_type, parent_ref=None, owner_shape=None)` | A sequence slot in the dict substrate, holding one plain list of values. |

## nu.mem.refs.prog

Dict-substrate ref for a stored Nu program.

[Full entries](/docs/reference/fabrics/mem/refs-prog)

| Name | Sort | Call | Meaning |
| --- | --- | --- | --- |
| [ProgramRef](/docs/reference/fabrics/mem/refs-prog#programref) | `ref` | `ProgramRef(address, parent_ref=None, owner_shape=None)` | A slot holding Nu program source, with the Program verbs on it. |

## nu.mem.refs.base

Dict substrate refs: navigate nested Python dicts under the runtime.

[Full entries](/docs/reference/fabrics/mem/refs-base)

| Name | Sort | Call | Meaning |
| --- | --- | --- | --- |
| [RefBase](/docs/reference/fabrics/mem/refs-base#refbase) | `ref` | `RefBase(address, parent_ref=None, owner_shape=None)` | A slot addressed by a path of keys through nested Python dicts. |

## nu.mem.refs.set

Dict set reference: unordered unique-element container.

[Full entries](/docs/reference/fabrics/mem/refs-set)

| Name | Sort | Call | Meaning |
| --- | --- | --- | --- |
| [SetRef](/docs/reference/fabrics/mem/refs-set#setref) | `ref` | `SetRef(address, item_type, parent_ref=None, owner_shape=None)` | A set slot in the dict substrate, holding one plain set of values. |

## nu.mem.refs.shape

Dict shape reference: structured container backed by nested dict.

[Full entries](/docs/reference/fabrics/mem/refs-shape)

| Name | Sort | Call | Meaning |
| --- | --- | --- | --- |
| [ShapeRef](/docs/reference/fabrics/mem/refs-shape#shaperef) | `ref` | `ShapeRef(address, shape_type, parent_ref=None, owner_shape=None)` | A nested Shape slot in the dict substrate, stored as an inner dict. |

## nu.mem.refs.dictshape

Dict shapes dict reference: mapping of homogeneous shapes.

[Full entries](/docs/reference/fabrics/mem/refs-dictshape)

| Name | Sort | Call | Meaning |
| --- | --- | --- | --- |
| [ShapesDictRef](/docs/reference/fabrics/mem/refs-dictshape#shapesdictref) | `ref` | `ShapesDictRef(address, shape_type, key_type, key_value_type, parent_ref=None, owner_shape=None)` | A keyed collection of one Shape's records, stored as a dict of dicts. |

## nu.mem.refs.listshape

Dict shapes list reference: sequence of homogeneous shapes.

[Full entries](/docs/reference/fabrics/mem/refs-listshape)

| Name | Sort | Call | Meaning |
| --- | --- | --- | --- |
| [ShapesListRef](/docs/reference/fabrics/mem/refs-listshape#shapeslistref) | `ref` | `ShapesListRef(address, shape_type, parent_ref=None, owner_shape=None)` | A list of one Shape's records, stored as a plain list of inner dicts. |

## nu.mem.refs.jqueue.interactions

Interactions for JQueueRef / JQueue.

[Full entries](/docs/reference/fabrics/mem/refs-jqueue-interactions)

| Name | Sort | Call | Meaning |
| --- | --- | --- | --- |
| [Close](/docs/reference/fabrics/mem/refs-jqueue-interactions#close) | `scalar_command` | `Close(queue)` | Shuts the queue down, both the sync and the async half at once. |
| [Get](/docs/reference/fabrics/mem/refs-jqueue-interactions#get) | `scalar_action` | `Get(queue)` | Takes the oldest item, waiting for one when the queue is empty. |
| [Put](/docs/reference/fabrics/mem/refs-jqueue-interactions#put) | `scalar_command` | `Put(queue, value)` | Enqueues a value, waiting for room when the queue is full. |
| [QSize](/docs/reference/fabrics/mem/refs-jqueue-interactions#qsize) | `scalar_query` | `QSize(queue)` | How many items are waiting in the queue at this instant. |

## nu.mem.refs.jqueue.form

JQueue: typed surface for janus-backed queue refs.

[Full entries](/docs/reference/fabrics/mem/refs-jqueue-form)

| Name | Sort | Call | Meaning |
| --- | --- | --- | --- |
| [JQueue](/docs/reference/fabrics/mem/refs-jqueue-form#jqueue) | `scalar_query` | `JQueue(operand)` | The queue verbs, over any node that yields a janus queue. |

## nu.mem.refs.jqueue.ref

JQueueRef: janus-backed queue ref in the nu-mem fabric.

[Full entries](/docs/reference/fabrics/mem/refs-jqueue-ref)

| Name | Sort | Call | Meaning |
| --- | --- | --- | --- |
| [JQueueRef](/docs/reference/fabrics/mem/refs-jqueue-ref#jqueueref) | `ref` | `JQueueRef(address, parent_ref=None, owner_shape=None, capacity=None, item_type=object)` | A slot holding a live janus queue, bridging the loop and the threads. |
