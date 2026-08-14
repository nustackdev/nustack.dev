---
title: nu.http
---

HTTP fabric: declarative service endpoints over httpx, sync and async. Verb refs declare endpoints on a `nu.Service`; calling them yields an interaction that runs against the ctx-bound `HttpFabric` client, returns parsed JSON, and raises on non-2xx.

## Fabric

`from nu.http import HttpFabric`

| Name       | Sort  | Signature                                                                        | Effect     | Meaning                                                                          |
| ---------- | ----- | -------------------------------------------------------------------------------- | ---------- | -------------------------------------------------------------------------------- |
| HttpFabric | class | `HttpFabric(*, base_url="", headers=None, timeout=30.0)`                          | read/write | holds a sync `httpx.Client` and async `httpx.AsyncClient`; opens on setup/asetup |

## Refs

`from nu.http import GETRef, POSTRef, PUTRef, PATCHRef, DELETERef`

One `MethodRef` subclass per HTTP verb. Use `.method(path, **defaults)` on a `nu.Service` class body to declare an endpoint; calling the resolved attribute with kwargs constructs the matching interaction.

| Name      | Sort  | Signature                                              | Effect | Meaning                                                     |
| --------- | ----- | ------------------------------------------------------- | ------ | ----------------------------------------------------------- |
| GETRef    | class | `GETRef.method(path, **defaults)`                       | pure   | declare a GET endpoint at `path`; call yields `HttpGet`     |
| POSTRef   | class | `POSTRef.method(path, **defaults)`                      | pure   | declare a POST endpoint at `path`; call yields `HttpPost`   |
| PUTRef    | class | `PUTRef.method(path, **defaults)`                       | pure   | declare a PUT endpoint at `path`; call yields `HttpPut`     |
| PATCHRef  | class | `PATCHRef.method(path, **defaults)`                     | pure   | declare a PATCH endpoint at `path`; call yields `HttpPatch` |
| DELETERef | class | `DELETERef.method(path, **defaults)`                    | pure   | declare a DELETE endpoint at `path`; call yields `HttpDelete` |

## Interactions

`from nu.http import HttpGet, HttpPost, HttpPut, HttpPatch, HttpDelete`

The five interactions produced when a verb ref is called with kwargs. `HttpGet` is a `ScalarQuery` (safe read). The other four are `ScalarActions` and declare a mutation on their target service. All yield the parsed JSON body and raise on non-2xx.

| Name       | Sort         | Signature                | Effect | Meaning                                          |
| ---------- | ------------ | ------------------------- | ------ | ------------------------------------------------ |
| HttpGet    | ScalarQuery  | `HttpGet(ref, kwargs)`    | action | GET request; yields parsed JSON                  |
| HttpPost   | ScalarAction | `HttpPost(ref, kwargs)`   | action | POST request; yields parsed JSON response        |
| HttpPut    | ScalarAction | `HttpPut(ref, kwargs)`    | action | PUT request; yields parsed JSON response         |
| HttpPatch  | ScalarAction | `HttpPatch(ref, kwargs)`  | action | PATCH request; yields parsed JSON response       |
| HttpDelete | ScalarAction | `HttpDelete(ref, kwargs)` | action | DELETE request; yields parsed JSON (empty on 204) |

## Presets

`from nu.http import bind`

| Name | Sort     | Signature                                                              | Effect | Meaning                                                    |
| ---- | -------- | ---------------------------------------------------------------------- | ------ | ---------------------------------------------------------- |
| bind | function | `bind(service_cls, *, base_url="", headers=None, timeout=30.0)`         | pure   | `Provide` an `HttpFabric` tagged by the service class      |
