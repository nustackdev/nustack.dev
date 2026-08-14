---
title: Fabrics
---

A **Fabric** is the substrate a Ref lives on. One page per Fabric: the Refs it ships, the Interactions on top of them, the shape of what it stores.

| Fabric | Module | What |
| --- | --- | --- |
| [kv](kv.md) | `nu.kv` | Virtual collections over any KV backend. Persistent, paged, view-composable. |
| [ui](ui.md) | `nu.ui` | Reactive UI fabric: shape trees rendered live in the browser. |
| [cluster](cluster.md) | `nu.cluster` | Distributed fabric backed by Ray actors and object refs. |
| [llm](llm.md) | `nu.llm` | OpenAI-compatible chat fabric: one wire, N providers. |
| [mem](mem.md) | `nu.mem` | In-process fabric: plain nested Python dicts as the data bag. Zero setup. |
| [proxy](proxy.md) | `nu.proxy` | Network fabric: transparent remote objects, local calls, remote execution. |
| [http](http.md) | `nu.http` | HTTP fabric: expose Nu Refs as endpoints, or build on top of any HTTP service. |
| [service](service.md) | `nu.service` | In-process service fabric: any Python object as a tree of Refs. |
| [cc](cc.md) | `nu.cc` | Claude Code as a Ref: prompts from your Nu tree, session brackets, text and metadata back. |
| [mp](mp.md) | `nu.mp` | Local multiprocessing fabric: teleport subtrees onto spawned worker processes. |
