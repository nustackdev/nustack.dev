---
title: nu.mp
---

Local multiprocessing compute fabric. Same shape as `nu.cluster`, backed by
stdlib `multiprocessing` process workers instead of Ray actors. Zero
dependency, single host: teleport a Nu tree into a child process, run it
there, get the result back.

## Worker

`from nu.mp import MpWorker, MpWorkerRef`

| Name        | Sort      | Signature                                                                                                | Effect    | Meaning                                                                                                       |
| ----------- | --------- | -------------------------------------------------------------------------------------------------------- | --------- | ------------------------------------------------------------------------------------------------------------- |
| MpWorker    | Resource  | `MpWorker(ctx_builder=None, *, init=None, name=None, start_method="spawn")`                              | lifecycle | spawns one long-lived child process hosting a Nu `Context` + tree executor; `execute(tree, attrs=None)` routes to it |
| MpWorkerRef | FabricRef | `MpWorkerRef(tag=UNSET)`                                                                                 | read      | resolves the `MpWorker` bound at `tag` on ctx; tag forwards verbatim to `ctx.get(MpWorker, *tag)`             |

Pass exactly one of `init` (a `_LifecycleBracket`, typically `With(...)`,
entered once inside the child and held live for its lifetime) or
`ctx_builder` (a callable returning a `Context` or awaitable) - or neither
for a bare `Context`. `start_method` is the `multiprocessing` start method
(`"spawn"`, `"fork"`, `"forkserver"`); default `"spawn"` is cross-platform
and gives the child a clean interpreter, so `init` / `ctx_builder` (and
their captured state) must be pickleable. `name` forwards to `Process` for
readable `ps` output.

Tag shapes match how `Provide` / `ProvideList` / `ProvideDict` bound the
worker: no tag for a bare `Provide` singleton, int index for `ProvideList`,
dict key for `ProvideDict`. `MpWorkerRef(("shard", 0))` resolves the
tuple-keyed entry.

Sync and async lifecycle are both supported (`setup`/`execute`/`cleanup`
and their `a*` counterparts), so either Nu runtime can drive it. The
worker processes one request at a time - concurrent parent calls on the
same worker serialize on a lock. Parallelism comes from binding a fleet
via `ProvideList` / `ProvideDict`, one request per worker in flight.

## Interaction

`from nu.mp import Teleport`

| Name     | Sort   | Signature                                       | Effect | Meaning                                                                                                       |
| -------- | ------ | ----------------------------------------------- | ------ | ------------------------------------------------------------------------------------------------------------- |
| Teleport | Policy | `Teleport(body, *, target=UNSET, carry=False)`  | remote | ship `body` as a term to the `MpWorker` at `target` and await its result; works on both sync and async runtimes |

Transparent policy: removing `Teleport` does not change what is computed,
only where it runs. Cardinality is preserved; a stream-rooted body is
collapsed to the child result and yielded once. `target=UNSET` resolves
the untagged singleton; `target=None` is a legitimate tag. Set `carry=True`
to copy the parent's `ctx.attrs` onto the child Context before executing.
