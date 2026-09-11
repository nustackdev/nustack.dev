---
title: nu.mem.refs.jqueue.form
description: "JQueue: typed surface for janus-backed queue refs."
---

JQueue: typed surface for janus-backed queue refs.

Pure TypedNu wrapper. Holds no state; methods build interaction trees
against the wrapped Nu (typically a JQueueRef).

| Name | Sort | Call | Meaning |
| --- | --- | --- | --- |
| [JQueue](#jqueue) | `scalar_query` | `JQueue(operand)` | The queue verbs, over any node that yields a janus queue. |

## JQueue

The queue verbs, over any node that yields a janus queue.

```python
JQueue(operand)
```

Path `nu.mem.refs.jqueue.JQueue`. Kind `ScalarQuery`, sort `scalar_query`, cardinality `scalar`.

Holds nothing itself: it wraps one Nu child, normally a `JQueueRef`,
and every call on it builds an interaction over that child. A ref that
reads a queue therefore gets `put`, `get`, `qsize` and `close`
just by mixing this in.

**Notes**

- The calls do not touch the queue: they build a tree, and nothing happens until it runs.

**Example**

```python
from nu.mem.refs.jqueue import JQueueRef
class Buf(nu.Shape):
    queue = JQueueRef.slot(item_type=int)
ctx = nu.Context().bind(dict, {}, Buf)
_ = nu.run(Buf.queue.put(7), ctx)
nu.run(Buf.queue.qsize(), ctx)[0]
```

```
1
```

**Methods**

### `.put(value)`

Enqueue `value`, waiting for room when the queue is full.

Builds `Put`.

**Arguments**

| Name | Type | Default | Meaning |
| --- | --- | --- | --- |
| `value` | `object` |  |  |

**Notes**

- Blocking is the back-pressure: a bounded queue makes the producer wait rather than growing without limit.
- Raises QueueClosed when the queue is already shut down.

**Example**

```python
run(Buf.queue.put(1), ctx)
```

### `.get()`

Take the oldest item, waiting for one when the queue is empty.

Builds `Get`.

**Notes**

- This both mutates the queue and yields, so it is an action, not a read; it cannot be treated as a pure query.
- Raises QueueClosed once the queue is shut down and drained.

**Example**

```python
run(Buf.queue.get(), ctx)
```

### `.qsize()`

Count the items waiting in the queue right now.

Builds `QSize`.

**Notes**

- A snapshot only: a producer or consumer on another thread can change it the moment it is read.

**Example**

```python
run(Buf.queue.qsize(), ctx)
```

### `.close()`

Shut the queue down on both the sync and the async half.

Builds `Close`.

**Notes**

- Items already queued stay readable; consumers drain them and only then start raising QueueClosed.

**Example**

```python
run(Buf.queue.close(), ctx)
```

**Inherited methods**

From `nu.lang.forms.Form`:

| Call | Builds | Meaning |
| --- | --- | --- |
| `.is_empty()` | `Bool` | True if this Form yields the EMPTY sentinel. |
| `.is_invalid()` | `Bool` | True if this Form yields the INVALID sentinel. |
| `.is_sentinel()` | `Bool` | True if this Form yields either sentinel (EMPTY or INVALID). |
| `.not_empty()` | `Bool` | True if this Form does not yield EMPTY. |
| `.not_invalid()` | `Bool` | True if this Form does not yield INVALID. |
