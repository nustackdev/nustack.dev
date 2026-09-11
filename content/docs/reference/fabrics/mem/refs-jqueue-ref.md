---
title: nu.mem.refs.jqueue.ref
description: "JQueueRef: janus-backed queue ref in the nu-mem fabric."
---

JQueueRef: janus-backed queue ref in the nu-mem fabric.

A leaf ref: occupies a slot in a Shape, holds metadata (capacity,
item_type), and on first fetch vivifies a `janus.Queue` at the slot's
path in the backing dict. Subsequent fetches return the same live queue.

| Name | Sort | Call | Meaning |
| --- | --- | --- | --- |
| [JQueueRef](#jqueueref) | `ref` | `JQueueRef(address, parent_ref=None, owner_shape=None, capacity=None, item_type=object)` | A slot holding a live janus queue, bridging the loop and the threads. |

## JQueueRef

A slot holding a live janus queue, bridging the loop and the threads.

```python
JQueueRef(address, parent_ref=None, owner_shape=None, capacity=None, item_type=object)
```

Path `nu.mem.refs.jqueue.JQueueRef`. Kind `Ref`, sort `ref`, cardinality `scalar`.

Reading it hands back the queue object itself rather than any stored
data, which is what makes one side able to `put` from a thread while
the other `get`s on the event loop. The queue is created the first time
the slot is read and kept there, so every later read in the same backing
dict is the same queue.

**Notes**

- Capacity and item type come from the slot declaration; no capacity means unbounded, and the item type is metadata that nothing checks against what is actually put in.
- The queue lives in the backing dict like any other value, so it is not JSON-shaped and does not survive being serialised.
- Vivification needs a real dict at the parent path; a non-dict there raises TypeError rather than yielding a sentinel.
- Because reading vivifies, a plain read is enough to create the queue before any producer starts.

**Example**

```python
from nu.mem.refs.jqueue import JQueueRef
class Buf(nu.Shape):
    queue = JQueueRef.slot(capacity=2, item_type=int)
ctx = nu.Context().bind(dict, {}, Buf)
_ = nu.run(Buf.queue.put(1), ctx)
nu.run(Buf.queue.get(), ctx)[0]
```

```
1
```

**Inherited methods**

From `nu.mem.refs.jqueue.form.JQueue`:

| Call | Builds | Meaning |
| --- | --- | --- |
| `.put(value)` | `Put` | Enqueue `value`, waiting for room when the queue is full. |
| `.get()` | `Get` | Take the oldest item, waiting for one when the queue is empty. |
| `.qsize()` | `QSize` | Count the items waiting in the queue right now. |
| `.close()` | `Close` | Shut the queue down on both the sync and the async half. |

From `nu.lang.forms.Form`:

| Call | Builds | Meaning |
| --- | --- | --- |
| `.is_empty()` | `Bool` | True if this Form yields the EMPTY sentinel. |
| `.is_invalid()` | `Bool` | True if this Form yields the INVALID sentinel. |
| `.is_sentinel()` | `Bool` | True if this Form yields either sentinel (EMPTY or INVALID). |
| `.not_empty()` | `Bool` | True if this Form does not yield EMPTY. |
| `.not_invalid()` | `Bool` | True if this Form does not yield INVALID. |
