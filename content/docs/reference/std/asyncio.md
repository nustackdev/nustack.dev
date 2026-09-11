---
title: nu.std.asyncio
description: "Nu surface for Python's `asyncio` module."
---

Nu surface for Python's `asyncio` module.

`asyncio` is mostly orchestration - `gather`, `wait`, `create_task`,
`run` - and that is exactly what Nu Flows already are, so none of it is mirrored
here. The one leaf primitive Flows can't express is the non-blocking sleep, so
that is the whole surface:

```python
from nu.std.asyncio import sleep
import nu.std.asyncio as asyncio     # then asyncio.sleep(1)
```

`sleep` is an async-only, effect-only op that yields `None` (it suspends the
coroutine). It must run on a loop (`arun`); the sync, blocking sibling is
`nu.std.time.sleep`.

## Call

| Name | Call | Meaning |
| --- | --- | --- |
| [sleep](#sleep) | `asyncio.sleep(delay)` | Suspend for `delay` seconds without blocking the loop: mirrors `asyncio.sleep()`. Async-only. |

### sleep

Suspend for `delay` seconds without blocking the loop: mirrors `asyncio.sleep()`. Async-only.

```python
asyncio.sleep(delay)
```

Path `nu.std.asyncio.sleep`. Defined on `nu.std.asyncio.functions`, bound as a function. Builds `None_`.

**Arguments**

| Name | Type | Default | Meaning |
| --- | --- | --- | --- |
| `delay` | `FloatArg` |  |  |

Undocumented: example.
