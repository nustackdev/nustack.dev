---
title: nu.service
---

Service fabric: exposes a plain Python object as a Nu Service, so its methods become first-class Nu interactions on the tree. The fabric owns one target instance, bound on ctx via `Provide` and tagged by the Service class; MethodRefs on the Service pick the canonical Nu kind (query / action / command, scalar or stream) each endpoint compiles into.

## Fabric

`from nu.service import ServiceFabric`

| Name          | Sort  | Signature                    | Effect     | Meaning                                                              |
| ------------- | ----- | ----------------------------- | ---------- | -------------------------------------------------------------------- |
| ServiceFabric | class | `ServiceFabric(*, target)`   | read/write | holds one Python target; resolves an endpoint by `getattr(target, name)` and calls it |

## Bind

`from nu.service import bind`

| Name | Sort     | Signature                          | Effect | Meaning                                                     |
| ---- | -------- | ---------------------------------- | ------ | ----------------------------------------------------------- |
| bind | function | `bind(service_cls, *, target)`     | pure   | `Provide` a `ServiceFabric` wrapping `target`, tagged by the Service class |

## Refs

`from nu.service import QueryRef, StreamQueryRef, ActionRef, StreamActionRef, CommandRef`

One MethodRef class per canonical Nu kind. `.method(name=None, **defaults)` packages the Ref as a `Method` declaration on the Service class; `name` picks the attribute on `target` (defaults to the descriptor's field name). Calling the ref with kwargs constructs the matching interaction.

| Name            | Sort  | Signature                                                    | Effect     | Meaning                                                                    |
| --------------- | ----- | ------------------------------------------------------------- | ---------- | -------------------------------------------------------------------------- |
| QueryRef        | class | `QueryRef.method(name=None, **defaults)` / `QueryRef(**kwargs)` | pure       | read-only scalar endpoint; call yields a `ServiceQuery`                    |
| StreamQueryRef  | class | `StreamQueryRef.method(name=None, **defaults)` / `StreamQueryRef(**kwargs)` | pure       | read-only stream endpoint; call yields a `ServiceStreamQuery`              |
| ActionRef       | class | `ActionRef.method(name=None, **defaults)` / `ActionRef(**kwargs)` | read/write | mutating scalar endpoint; call yields a `ServiceAction`                    |
| StreamActionRef | class | `StreamActionRef.method(name=None, **defaults)` / `StreamActionRef(**kwargs)` | read/write | mutating stream endpoint; call yields a `ServiceStreamAction`              |
| CommandRef      | class | `CommandRef.method(name=None, **defaults)` / `CommandRef(**kwargs)` | read/write | mutating void endpoint; call yields a `ServiceCommand`                     |

## Interactions

`from nu.service import ServiceQuery, ServiceStreamQuery, ServiceAction, ServiceStreamAction, ServiceCommand`

Five interactions, one per canonical Nu kind. The mutating three carry `_mutates = {0}`, marking the endpoint (child 0) as WRITE.

| Name                | Sort         | Signature                       | Effect     | Meaning                                                             |
| ------------------- | ------------ | ------------------------------- | ---------- | ------------------------------------------------------------------- |
| ServiceQuery        | ScalarQuery  | `ServiceQuery(ref, kwargs)`     | pure       | pure scalar read; yields the method's return value                  |
| ServiceStreamQuery  | StreamQuery  | `ServiceStreamQuery(ref, kwargs)` | pure     | pure stream read; yields items from the returned iterable           |
| ServiceAction       | ScalarAction | `ServiceAction(ref, kwargs)`    | read/write | mutating scalar call; yields the return value, marks endpoint WRITE |
| ServiceStreamAction | StreamAction | `ServiceStreamAction(ref, kwargs)` | read/write | mutating stream call; yields items, marks endpoint WRITE            |
| ServiceCommand      | Command      | `ServiceCommand(ref, kwargs)`   | read/write | mutating void call; yields nothing, marks endpoint WRITE            |
