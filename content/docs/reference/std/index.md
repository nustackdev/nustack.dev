---
title: Std
description: "Nu standard library - typed Nu surfaces for Python's standard library."
---

Nu standard library - typed Nu surfaces for Python's standard library.

Each submodule mirrors a Python stdlib module by name (`uuid`, `datetime`,
`decimal` ...). Import through the submodule, the way you would the stdlib
itself - there is no shortcut re-export off `nu.std`:

```python
from nu.std.uuid import UUID, uuid4
import nu.std.uuid as uuid
```

A value type is a **Form** - the typed access surface you call methods on. Its
operations are **interactions**: reused from `nu.core` where they already
exist (comparison, attribute reads, casts) or added alongside the Form as new
atoms where core can't express them (e.g. constructors). No opaque `FuncCall`
escape hatch - every op is a first-class term.

| Module | What |
| --- | --- |
| [`nu.std.asyncio`](/docs/reference/std/asyncio) | Nu surface for Python's `asyncio` module. |
| [`nu.std.cmath`](/docs/reference/std/cmath) | Nu surface for Python's `complex` builtin and its `cmath` companion. |
| [`nu.std.datetime`](/docs/reference/std/datetime) | Nu surface for Python's `datetime` module. |
| [`nu.std.decimal`](/docs/reference/std/decimal) | Nu surface for Python's `decimal` module - the `Decimal` type. |
| [`nu.std.fin`](/docs/reference/std/fin) | Nu surface for financial value types - `Percentage` and `BasisPoint`. |
| [`nu.std.fractions`](/docs/reference/std/fractions) | Nu surface for Python's `fractions` module - exact rational arithmetic. |
| [`nu.std.functools`](/docs/reference/std/functools) | Nu surface for Python's `functools`. |
| [`nu.std.itertools`](/docs/reference/std/itertools) | Nu surface for Python's `itertools` module. |
| [`nu.std.logging`](/docs/reference/std/logging) | Nu surface for Python's `logging` module. |
| [`nu.std.math`](/docs/reference/std/math) | Nu surface for Python's `math` module. |
| [`nu.std.pathlib`](/docs/reference/std/pathlib) | Nu surface for Python's `pathlib` module - pure path operations only. |
| [`nu.std.random`](/docs/reference/std/random) | Nu surface for Python's `random` module. |
| [`nu.std.time`](/docs/reference/std/time) | Nu surface for Python's `time` module. |
| [`nu.std.uuid`](/docs/reference/std/uuid) | Nu surface for Python's `uuid` module. |
