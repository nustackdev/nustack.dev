---
title: nu.mem.refs.jqueue.interactions
description: "Interactions for JQueueRef / JQueue."
---

Interactions for JQueueRef / JQueue.

- Put: Command, blocks when full for back-pressure.
- Get: ScalarAction, blocks when empty, yields one item (mutating producer).
- QSize: ScalarQuery, snapshot count.
- Close: Command, shuts down both halves.

Get mutates the underlying janus.Queue while yielding the popped item, so it
is a ScalarAction (effect + yield) rather than a ScalarQuery, and declares
`mutates` on slot 0. QSize is a pure read: the queue ref in its read slot
yields READ automatically, so it needs no `mutates`.

| Name | Sort | Call | Meaning |
| --- | --- | --- | --- |
| [Close](#close) | `scalar_command` | `Close(queue)` | Shuts the queue down, both the sync and the async half at once. |
| [Get](#get) | `scalar_action` | `Get(queue)` | Takes the oldest item, waiting for one when the queue is empty. |
| [Put](#put) | `scalar_command` | `Put(queue, value)` | Enqueues a value, waiting for room when the queue is full. |
| [QSize](#qsize) | `scalar_query` | `QSize(queue)` | How many items are waiting in the queue at this instant. |

## Close

Shuts the queue down, both the sync and the async half at once.

```python
Close(queue)
```

Path `nu.mem.refs.jqueue.Close`. Kind `Command`, sort `scalar_command`, cardinality `void`. Arity 1 (1 required).

**Arguments**

| Name | Type | Default | Meaning |
| --- | --- | --- | --- |
| `queue` | `JQueue` |  | the node yielding the queue to shut down. |

**Yields**

Nothing.

**Notes**

- Items already queued are not thrown away: consumers drain what is left and only then start raising QueueClosed.
- Any later `put` raises QueueClosed; there is no reopening.
- The slot still holds the same queue object afterwards, so a read does not hand back a fresh one.

**Example**

```python
from nu.mem.refs.jqueue import JQueueRef, QueueClosed
class Buf(nu.Shape):
    queue = JQueueRef.slot(item_type=int)
ctx = nu.Context().bind(dict, {}, Buf)
_ = nu.run(Buf.queue.close(), ctx)
try:
    _ = nu.run(Buf.queue.put(1), ctx)
except QueueClosed:
    print("closed")
```

```
closed
```

## Get

Takes the oldest item, waiting for one when the queue is empty.

```python
Get(queue)
```

Path `nu.mem.refs.jqueue.Get`. Kind `ScalarAction`, sort `scalar_action`, cardinality `scalar`. Arity 1 (1 required).

**Arguments**

| Name | Type | Default | Meaning |
| --- | --- | --- | --- |
| `queue` | `JQueue` |  | the node yielding the queue to read from. |

**Yields**

The item taken from the queue.

**Notes**

- It both consumes and yields, which is why it is an action rather than a query: evaluating it twice takes two items, so it is not something to treat as a repeatable read.
- Routes itself by mode - the sync run blocks the calling thread, the async run awaits on the event loop.
- Once the queue is shut down and drained it raises QueueClosed, including for a consumer already waiting when the shutdown lands.

**Example**

```python
from nu.mem.refs.jqueue import JQueueRef
class Buf(nu.Shape):
    queue = JQueueRef.slot(capacity=2, item_type=int)
ctx = nu.Context().bind(dict, {}, Buf)
_ = nu.run(Buf.queue.put(7), ctx)
nu.run(Buf.queue.get(), ctx)[0]
```

```
7
```

## Put

Enqueues a value, waiting for room when the queue is full.

```python
Put(queue, value)
```

Path `nu.mem.refs.jqueue.Put`. Kind `Command`, sort `scalar_command`, cardinality `void`. Arity 2 (2 required).

**Arguments**

| Name | Type | Default | Meaning |
| --- | --- | --- | --- |
| `queue` | `JQueue` |  | the node yielding the queue to write into. |
| `value` | `object` |  | what to enqueue. |

**Yields**

Nothing.

**Notes**

- Waiting is the point: a bounded queue turns a fast producer into a slow one instead of letting the backlog grow.
- Routes itself by mode - the sync run blocks the calling thread, the async run awaits on the event loop - so the same tree works from either side.
- A shut-down queue raises QueueClosed rather than dropping the value.

**Example**

```python
from nu.mem.refs.jqueue import JQueueRef
class Buf(nu.Shape):
    queue = JQueueRef.slot(capacity=2, item_type=int)
ctx = nu.Context().bind(dict, {}, Buf)
_ = nu.run(Buf.queue.put(1), ctx)
nu.run(Buf.queue.qsize(), ctx)[0]
```

```
1
```

## QSize

How many items are waiting in the queue at this instant.

```python
QSize(queue)
```

Path `nu.mem.refs.jqueue.QSize`. Kind `ScalarQuery`, sort `scalar_query`, cardinality `scalar`. Arity 1 (1 required).

**Arguments**

| Name | Type | Default | Meaning |
| --- | --- | --- | --- |
| `queue` | `JQueue` |  | the node yielding the queue to count. |

**Yields**

The item count as an int.

**Notes**

- A snapshot, not a guarantee: another thread or task can add or take an item before the value is used, so it says nothing about whether the next `get` will wait.
- A pure read - it never touches the queue's contents - so the only fabric effect in the tree is the ref that fetches the queue.

**Example**

```python
from nu.mem.refs.jqueue import JQueueRef
class Buf(nu.Shape):
    queue = JQueueRef.slot(item_type=int)
ctx = nu.Context().bind(dict, {}, Buf)
nu.run(Buf.queue.qsize(), ctx)[0]
```

```
0
```
