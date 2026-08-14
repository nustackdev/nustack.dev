---
title: nu.cc
---

Claude Code fabric: turns a Nu Service into a prompt endpoint over the `claude-agent-sdk`. Holds a `ClaudeAgentOptions` template per bound Service, runs one query per prompt call, and optionally scopes multi-turn conversations through a session bracket that threads `resume=session_id` under the hood.

## Fabric

`from nu.cc import CCFabric`

| Name     | Sort  | Signature                                                              | Effect | Meaning                                                                       |
| -------- | ----- | ---------------------------------------------------------------------- | ------ | ----------------------------------------------------------------------------- |
| CCFabric | class | `CCFabric(*, options=None, **defaults)`                                | action | holds a `ClaudeAgentOptions` template; `aprompt(prompt, **overrides)` runs one query and returns `{text, session_id, total_cost_usd, duration_ms, num_turns}` |

## Refs

`from nu.cc import PromptRef`

| Name      | Sort     | Signature                                | Effect | Meaning                                                                    |
| --------- | -------- | ---------------------------------------- | ------ | -------------------------------------------------------------------------- |
| PromptRef | class    | `PromptRef.method(**defaults)`           | pure   | declare a prompt endpoint on a Service; defaults merge with per-call overrides |
| PromptRef | callable | `ref(prompt, **overrides)`               | action | call the endpoint; produces a `CCPrompt` interaction bound to the ref      |

## Interactions

`from nu.cc import CCPrompt`

| Name     | Sort  | Signature                    | Effect | Meaning                                                             |
| -------- | ----- | ---------------------------- | ------ | ------------------------------------------------------------------- |
| CCPrompt | class | `CCPrompt(ref, kwargs_dict)` | action | ScalarAction that runs one Claude Code prompt turn; yields dict with text + session metadata |

## Sessions

`from nu.cc import Session, SessionHandle`

Bracket that scopes a cc session across nested prompts: a lazy handle is bound into the ctx on entry, the first `PromptRef` call inside starts a fresh session and captures its id, and subsequent calls thread `resume=session_id` so cc treats them as one continuous conversation. Nested and sibling Sessions each get a fresh handle.

| Name          | Sort    | Signature          | Effect | Meaning                                                                      |
| ------------- | ------- | ------------------ | ------ | ---------------------------------------------------------------------------- |
| Session       | Bracket | `Session(*body)`   | action | lifecycle bracket that scopes one cc session across all `PromptRef` calls in the body |
| SessionHandle | class   | `SessionHandle()`  | pure   | mutable holder bound into ctx; starts empty, first prompt fills in `session_id` |

## Providers

`from nu.cc import bind`

| Name | Sort | Signature                          | Effect | Meaning                                                                     |
| ---- | ---- | ---------------------------------- | ------ | --------------------------------------------------------------------------- |
| bind | function | `bind(service_cls, **defaults)` | pure   | `Provide` a `CCFabric` tagged by the Service class; kwargs pass through to `ClaudeAgentOptions` (or pass `options=...` for a fully-built instance) |
