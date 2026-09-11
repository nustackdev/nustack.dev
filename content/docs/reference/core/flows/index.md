---
title: nu.core.flows
description: "Nu2 Flow atoms: the Command-composing sub-kind."
---

Nu2 Flow atoms: the Command-composing sub-kind.

Two families plus the reactive set:

- **Strategy** - compose mutating atoms directly: `Sequential` (`>>`),
  `Parallel` (`|`), `Race` (`&`), `Gather`, `AnyN`. `Parallel`
  also exposes forced-mode variants `ParallelThreaded` / `ParallelAsync`
  for explicit placement (Race / AnyN are async-only, no variants).
- **Control** - compose bodies under Query parameters: `IfDo`, `WhileDo`,
  `ForeverDo`, `ForEachDo`, `ForRangeDo`, `Delay`, `DelayedDo`,
  `SwitchDo`.
- **Reactive** - consume change subscriptions and execute bodies in response:
  `React`, `ReactWhile`, `ReactForever`, `Stream`.

## nu.core.flows.parallel.anyn

AnyN: first-to-succeed fan-in over the async loop.

[Full entries](/docs/reference/core/flows/parallel-anyn)

| Name | Sort | Call | Meaning |
| --- | --- | --- | --- |
| [AnyN](/docs/reference/core/flows/parallel-anyn#anyn) | `strategy` | `AnyN(*children)` | Runs its children concurrently; succeeds as soon as any one does. |

## nu.core.flows.control

Control flows: Command-composing atoms steered by Query parameters.

[Full entries](/docs/reference/core/flows/control)

| Name | Sort | Call | Meaning |
| --- | --- | --- | --- |
| [Delay](/docs/reference/core/flows/control#delay) | `control` | `Delay(seconds)` | `Delay(seconds)` - sleeps `seconds`, then continues. No body. |
| [DelayedDo](/docs/reference/core/flows/control#delayeddo) | `control` | `DelayedDo(delay, body)` | `DelayedDo(delay, body)` - sleeps `delay` seconds, then runs `body`. |
| [ForEachDo](/docs/reference/core/flows/control#foreachdo) | `control` | `ForEachDo(items, body, item='item')` | `ForEachDo(items, body, item="item")` - runs `body` once per element of `items`. |
| [ForRangeDo](/docs/reference/core/flows/control#forrangedo) | `control` | `ForRangeDo(start, stop, body, step=1, index='index')` | `ForRangeDo(start, stop, body, *, step=1, index="index")` - runs `body` once per value of `range(start, stop, step)`. |
| [ForeverDo](/docs/reference/core/flows/control#foreverdo) | `control` | `ForeverDo(body)` | `ForeverDo(body)` - runs `body` on loop forever. |
| [IfDo](/docs/reference/core/flows/control#ifdo) | `control` | `IfDo(cond, then, else_=None)` | `IfDo(cond, then, else_=None)` - runs `then` or `else_` based on `cond`. |
| [SwitchDo](/docs/reference/core/flows/control#switchdo) | `control` | `SwitchDo(selector, cases, default=None)` | `SwitchDo(selector, cases, default=None)` - runs the case body keyed by `selector`'s value. |
| [WhileDo](/docs/reference/core/flows/control#whiledo) | `control` | `WhileDo(cond, body)` | `WhileDo(cond, body)` - runs `body` on loop while `cond` stays truthy. |

## nu.core.flows.parallel.parallel

Parallel: join-on-all fan-in, smart + forced variants.

[Full entries](/docs/reference/core/flows/parallel-parallel)

| Name | Sort | Call | Meaning |
| --- | --- | --- | --- |
| [Gather](/docs/reference/core/flows/parallel-parallel#gather) | `strategy` | `Gather(*items)` | Alias of `Parallel`, named for reading naturally at a yield site. |
| [Parallel](/docs/reference/core/flows/parallel-parallel#parallel) | `strategy` | `Parallel(*items)` | Runs its children concurrently and joins once every one has finished. |
| [ParallelAsync](/docs/reference/core/flows/parallel-parallel#parallelasync) | `strategy` | `ParallelAsync(*items)` | Parallel with every child forced onto the loop under async. |
| [ParallelThreaded](/docs/reference/core/flows/parallel-parallel#parallelthreaded) | `strategy` | `ParallelThreaded(*items)` | Parallel with every child forced onto a worker thread under async. |

## nu.core.flows.noop

Noop: the empty Flow - the identity of flow composition.

[Full entries](/docs/reference/core/flows/noop)

| Name | Sort | Call | Meaning |
| --- | --- | --- | --- |
| [Noop](/docs/reference/core/flows/noop#noop) | `strategy` | `Noop()` | The empty Flow: composes nothing, the identity of flow composition. |

## nu.core.flows.parallel.race

Race: first-to-complete fan-in over the async loop.

[Full entries](/docs/reference/core/flows/parallel-race)

| Name | Sort | Call | Meaning |
| --- | --- | --- | --- |
| [Race](/docs/reference/core/flows/parallel-race#race) | `strategy` | `Race(*children)` | Runs its children concurrently; first to finish wins - the `&` composition. |

## nu.core.flows.raise_

Raise: raise an exception at run time.

[Full entries](/docs/reference/core/flows/raise)

| Name | Sort | Call | Meaning |
| --- | --- | --- | --- |
| [Raise](/docs/reference/core/flows/raise#raise) | `control` | `Raise(msg, exc_cls=RuntimeError)` | Raise `exc_cls(msg)` at run time. |
| [raise_](/docs/reference/core/flows/raise#raise_) |  | `flows.raise_(exc_cls, msg)` | Build a `Raise` node. Wrap in `IfDo` to gate. |

## nu.core.flows.react

Reactive control flows: React, ReactWhile, ReactForever.

[Full entries](/docs/reference/core/flows/react)

| Name | Sort | Call | Meaning |
| --- | --- | --- | --- |
| [React](/docs/reference/core/flows/react#react) | `control` | `React(change, body=None, changed_key=None)` | Wait for one change on the subscription, run the body once, then stop. |
| [ReactForever](/docs/reference/core/flows/react#reactforever) | `control` | `ReactForever(change, body, changed_key=None)` | Run the body on every change, unconditionally, forever. |
| [ReactWhile](/docs/reference/core/flows/react#reactwhile) | `control` | `ReactWhile(change, condition, body, changed_key=None)` | Run the body on each change while the condition stays truthy. |

## nu.core.flows.strategy

Strategy flows: Command-composing atoms that dispatch their children.

[Full entries](/docs/reference/core/flows/strategy)

| Name | Sort | Call | Meaning |
| --- | --- | --- | --- |
| [Sequential](/docs/reference/core/flows/strategy#sequential) | `strategy` | `Sequential(*children)` | Runs its children in order - the `>>` composition. |

## nu.core.flows.stream

Stream flow: drain-then-follow over ordered collections.

[Full entries](/docs/reference/core/flows/stream)

| Name | Sort | Call | Meaning |
| --- | --- | --- | --- |
| [Stream](/docs/reference/core/flows/stream#stream) | `stream_query` | `Stream(source, body, key='stream_key', log_key='stream_log_key')` | Drain-then-follow over an ordered collection; cursor tracks position. |
