---
title: nu.std.time
description: "Nu surface for Python's `time` module."
---

Nu surface for Python's `time` module.

`time` is a function module - module-level functions over the process clock,
no central class - so the Nu surface mirrors that: free functions (`time`,
`monotonic`, `perf_counter`, `sleep`, ...). Two layers behind it:
`functions` (the typed wrappers) and `interactions` (the atoms each wrapper
builds). Import it the way you would the stdlib:

```python
from nu.std.time import monotonic, sleep
import nu.std.time as time     # then time.monotonic()
```

Every clock read reads the process clock. `sleep` is a sync-only,
effect-only op that yields `None` (it blocks); the async sleep lives in
`nu.std.asyncio`.

## Call

| Name | Call | Meaning |
| --- | --- | --- |
| [monotonic](#monotonic) | `time.monotonic()` | A monotonic clock in seconds: mirrors `time.monotonic()`. Non-deterministic. |
| [monotonic_ns](#monotonic_ns) | `time.monotonic_ns()` | A monotonic clock in nanoseconds: mirrors `time.monotonic_ns()`. Non-deterministic. |
| [perf_counter](#perf_counter) | `time.perf_counter()` | The highest-resolution timer in seconds: mirrors `time.perf_counter()`. Non-deterministic. |
| [perf_counter_ns](#perf_counter_ns) | `time.perf_counter_ns()` | The highest-resolution timer in nanoseconds: mirrors `time.perf_counter_ns()`. Non-deterministic. |
| [process_time](#process_time) | `time.process_time()` | Process CPU time in seconds: mirrors `time.process_time()`. Non-deterministic. |
| [sleep](#sleep) | `time.sleep(secs)` | Block for `secs` seconds, yielding `None`: mirrors `time.sleep()`. Sync-only, effect-only. |
| [time](#time) | `time.time()` | Seconds since the epoch as a float: mirrors `time.time()`. Non-deterministic. |
| [time_ns](#time_ns) | `time.time_ns()` | Nanoseconds since the epoch as an int: mirrors `time.time_ns()`. Non-deterministic. |

### monotonic

A monotonic clock in seconds: mirrors `time.monotonic()`. Non-deterministic.

```python
time.monotonic()
```

Path `nu.std.time.monotonic`. Defined on `nu.std.time.functions`, bound as a function. Builds `Float`.

Undocumented: example.

### monotonic_ns

A monotonic clock in nanoseconds: mirrors `time.monotonic_ns()`. Non-deterministic.

```python
time.monotonic_ns()
```

Path `nu.std.time.monotonic_ns`. Defined on `nu.std.time.functions`, bound as a function. Builds `Int`.

Undocumented: example.

### perf_counter

The highest-resolution timer in seconds: mirrors `time.perf_counter()`. Non-deterministic.

```python
time.perf_counter()
```

Path `nu.std.time.perf_counter`. Defined on `nu.std.time.functions`, bound as a function. Builds `Float`.

Undocumented: example.

### perf_counter_ns

The highest-resolution timer in nanoseconds: mirrors `time.perf_counter_ns()`. Non-deterministic.

```python
time.perf_counter_ns()
```

Path `nu.std.time.perf_counter_ns`. Defined on `nu.std.time.functions`, bound as a function. Builds `Int`.

Undocumented: example.

### process_time

Process CPU time in seconds: mirrors `time.process_time()`. Non-deterministic.

```python
time.process_time()
```

Path `nu.std.time.process_time`. Defined on `nu.std.time.functions`, bound as a function. Builds `Float`.

Undocumented: example.

### sleep

Block for `secs` seconds, yielding `None`: mirrors `time.sleep()`. Sync-only, effect-only.

```python
time.sleep(secs)
```

Path `nu.std.time.sleep`. Defined on `nu.std.time.functions`, bound as a function. Builds `None_`.

**Arguments**

| Name | Type | Default | Meaning |
| --- | --- | --- | --- |
| `secs` | `FloatArg` |  |  |

Undocumented: example.

### time

Seconds since the epoch as a float: mirrors `time.time()`. Non-deterministic.

```python
time.time()
```

Path `nu.std.time.time`. Defined on `nu.std.time.functions`, bound as a function. Builds `Float`.

Undocumented: example.

### time_ns

Nanoseconds since the epoch as an int: mirrors `time.time_ns()`. Non-deterministic.

```python
time.time_ns()
```

Path `nu.std.time.time_ns`. Defined on `nu.std.time.functions`, bound as a function. Builds `Int`.

Undocumented: example.
