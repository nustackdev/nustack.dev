---
title: nu.llm
---

Chat-completions fabric: one OpenAI-compatible wire (`/v1/chat/completions`) over `httpx`, N providers behind convenience presets. One fabric equals one endpoint (base_url + api_key + default model); calls travel through a `ChatRef` on a Service and land as a `Chat` interaction. Prefer `nu.arun` — LLM calls are network-bound and block the event loop under sync.

## Fabric

`from nu.llm import LLMFabric`

| Name      | Sort  | Signature                                                                                              | Effect | Meaning                                                                            |
| --------- | ----- | ------------------------------------------------------------------------------------------------------- | ------ | ---------------------------------------------------------------------------------- |
| LLMFabric | class | `LLMFabric(*, base_url, api_key="", model="", timeout=120.0, headers=None)`                            | action | httpx client for an OpenAI-compat chat/completions endpoint; sync `chat` + async `achat` |

## Refs

`from nu.llm import ChatRef`

| Name    | Sort  | Signature                        | Effect | Meaning                                                                                     |
| ------- | ----- | -------------------------------- | ------ | ------------------------------------------------------------------------------------------- |
| ChatRef | class | `ChatRef.method(**defaults)`     | pure   | declare a chat endpoint on a Service; defaults merge with per-call overrides                |

Call the ref with `prompt="..."` (sugar for a single user message) or `messages=[{"role": ..., "content": ...}, ...]`; extras (`model`, `temperature`, `max_tokens`, `stop`, ...) pass straight into the request body.

## Interactions

`from nu.llm import Chat`

| Name | Sort     | Signature              | Effect | Meaning                                                                     |
| ---- | -------- | ---------------------- | ------ | --------------------------------------------------------------------------- |
| Chat | callable | `Chat(ref, kwargs)`    | action | one chat/completions call; yields dict with `text` + `message` + `model` + `usage` + `finish_reason` |

## Providers

`from nu.llm import bind, ollama, openai, openrouter, groq, cerebras, xai, vllm`

`bind` is the generic `Provide` factory; the rest fill `base_url` + `api_key` for a known endpoint. Each returns a `Provide` tagged by `service_cls` so multiple services can each get their own fabric.

| Name       | Sort     | Signature                                                                            | Effect | Meaning                                                          |
| ---------- | -------- | ------------------------------------------------------------------------------------- | ------ | ---------------------------------------------------------------- |
| bind       | function | `bind(service_cls, **defaults)`                                                       | pure   | generic Provide of an `LLMFabric` tagged by `service_cls`        |
| ollama     | function | `ollama(service_cls, *, host="localhost", port=11434, model="", timeout=120.0)`      | pure   | Ollama on `http://{host}:{port}/v1`                              |
| openai     | function | `openai(service_cls, *, api_key, model="gpt-4o-mini")`                                | pure   | OpenAI `api.openai.com`                                          |
| openrouter | function | `openrouter(service_cls, *, api_key, model)`                                          | pure   | OpenRouter `openrouter.ai` — thousands of models, one key        |
| groq       | function | `groq(service_cls, *, api_key, model="llama-3.3-70b-versatile")`                     | pure   | Groq `api.groq.com` — fast inference                             |
| cerebras   | function | `cerebras(service_cls, *, api_key, model)`                                            | pure   | Cerebras `api.cerebras.ai`                                       |
| xai        | function | `xai(service_cls, *, api_key, model="grok-2-latest")`                                 | pure   | xAI `api.x.ai` (Grok)                                            |
| vllm       | function | `vllm(service_cls, *, base_url, model, api_key="")`                                   | pure   | self-hosted vLLM at `base_url` (e.g. `http://red:8000`)          |
