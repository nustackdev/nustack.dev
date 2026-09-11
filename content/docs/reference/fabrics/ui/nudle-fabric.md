---
title: nu.ui.nudle.fabric
description: "`NudleServer` -- fabric that runs a nudle UI over ws for a body's duration."
---

`NudleServer` -- fabric that runs a nudle UI over ws for a body's duration.

Additive shape over `build_fastapi_app` -- same FastAPI + uvicorn stack,
wrapped as a plain FabricLifecycle so it drops into any `Provide` bracket.
`asetup` builds the FastAPI app against the current ctx and boots uvicorn
on a background task, waiting until it's serving. `acleanup` signals
uvicorn to exit and awaits the task with a bounded timeout, falling back
to cancel.

Per-connection ctx binding (`Session` on ws) stays inside `ws_endpoint`.

Typical use goes through `server(app, ...)` (defined here) which wraps
a `Provide(NudleServer, {...})` for you.

| Name | Call | Meaning |
| --- | --- | --- |
| [server](#server) | `ui.server(app, host='127.0.0.1', port=8080, log_level='warning', open_browser=True, ready_timeout=10.0, shutdown_timeout=5.0)` | Boot a nudle ws server around a body: `Provide(NudleServer, {...})`. |

## server

Boot a nudle ws server around a body: `Provide(NudleServer, {...})`.

```python
ui.server(app, host='127.0.0.1', port=8080, log_level='warning', open_browser=True, ready_timeout=10.0, shutdown_timeout=5.0)
```

Path `nu.ui.server`. Defined on `nu.ui.nudle.fabric`, bound as a function. Builds `Provide`.

**Arguments**

| Name | Type | Default | Meaning |
| --- | --- | --- | --- |
| `app` | `Nu` |  | the nudle Nu program (Index + Refs + reactive flow). |
| `host` | `str` | `'127.0.0.1'` | uvicorn bind host. |
| `port` | `int` | `8080` | uvicorn bind port. |
| `log_level` | `str` | `'warning'` | uvicorn log level. Default silences uvicorn's info chatter so only nudle's own ready/stopped banner is printed. |
| `open_browser` | `bool` | `True` | open the bound URL in the default browser once ready. |
| `ready_timeout` | `float` | `10.0` | how long `asetup` waits for uvicorn to signal `started` before giving up. |
| `shutdown_timeout` | `float` | `5.0` | how long `acleanup` waits for graceful exit before cancelling the task. |

**Example**

```python
nu.With(
    nu.kv.presets.rocksdb_navigator(".db"),
    nu.ui.nudle.server(app, host="127.0.0.1", port=8080),
    body=background_worker,
)
```
