---
title: nu.std.cmath
description: "Nu surface for Python's `complex` builtin and its `cmath` companion."
---

Nu surface for Python's `complex` builtin and its `cmath` companion.

A hybrid surface: `complex` is a builtin with no module of its own, and
`cmath` is its set of companion functions, so the two co-locate here. The
surface mirrors both 1-1:

- the `complex` value type is a Form (`complex.of(real, imag)`, `.real` /
  `.imag`, `conjugate()`, arithmetic, `eq` / `ne`).
- the `cmath` free functions (`sqrt`, `exp`, `phase`, `polar`, ...)
  and constants (`pi`, `e`, `tau`, `inf`, `nan`, `infj`, `nanj`).

Three layers behind it: `forms` (the `complex` type), `functions` (the
`cmath` wrappers and constants), and `interactions` (the atoms each builds).
Import it the way you would the stdlib:

```python
from nu.std.cmath import complex, sqrt, phase, pi
import nu.std.cmath as cmath    # then cmath.sqrt(...), cmath.phase(...)
```

## nu.std.cmath.forms

The builtin `complex` as a Form - the value type behind `nu.std.cmath`.

[Full entries](/docs/reference/std/cmath/forms)

| Name | Sort | Call | Meaning |
| --- | --- | --- | --- |
| [complex](/docs/reference/std/cmath/forms#complex) | `scalar_query` | `complex()` | `builtins.complex` as a Form - a complex number. |

## nu.std.cmath.functions

Module-level functions and constants for `nu.std.cmath`.

[Full entries](/docs/reference/std/cmath/functions)

| Name | Call | Meaning |
| --- | --- | --- |
| [acos](/docs/reference/std/cmath/functions#acos) | `cmath.acos(x)` | The arc cosine of `x`: mirrors `cmath.acos()`. |
| [asin](/docs/reference/std/cmath/functions#asin) | `cmath.asin(x)` | The arc sine of `x`: mirrors `cmath.asin()`. |
| [atan](/docs/reference/std/cmath/functions#atan) | `cmath.atan(x)` | The arc tangent of `x`: mirrors `cmath.atan()`. |
| [cos](/docs/reference/std/cmath/functions#cos) | `cmath.cos(x)` | The cosine of `x`: mirrors `cmath.cos()`. |
| [cosh](/docs/reference/std/cmath/functions#cosh) | `cmath.cosh(x)` | The hyperbolic cosine of `x`: mirrors `cmath.cosh()`. |
| [exp](/docs/reference/std/cmath/functions#exp) | `cmath.exp(x)` | `e` raised to `x`: mirrors `cmath.exp()`. |
| [isclose](/docs/reference/std/cmath/functions#isclose) | `cmath.isclose(a, b)` | Whether `a` and `b` are close: mirrors `cmath.isclose()`. |
| [isfinite](/docs/reference/std/cmath/functions#isfinite) | `cmath.isfinite(x)` | Whether both components of `x` are finite: mirrors `cmath.isfinite()`. |
| [isinf](/docs/reference/std/cmath/functions#isinf) | `cmath.isinf(x)` | Whether `x` has an infinite component: mirrors `cmath.isinf()`. |
| [isnan](/docs/reference/std/cmath/functions#isnan) | `cmath.isnan(x)` | Whether `x` has a NaN component: mirrors `cmath.isnan()`. |
| [log](/docs/reference/std/cmath/functions#log) | `cmath.log(x, base=None)` | The logarithm of `x` (natural, or to `base`): mirrors `cmath.log()`. |
| [log10](/docs/reference/std/cmath/functions#log10) | `cmath.log10(x)` | The base-10 logarithm of `x`: mirrors `cmath.log10()`. |
| [phase](/docs/reference/std/cmath/functions#phase) | `cmath.phase(x)` | The phase angle of `x`, in radians: mirrors `cmath.phase()`. |
| [polar](/docs/reference/std/cmath/functions#polar) | `cmath.polar(x)` | `x` as the polar pair `(r, phi)`: mirrors `cmath.polar()`. |
| [rect](/docs/reference/std/cmath/functions#rect) | `cmath.rect(r, phi)` | The complex number with modulus `r` and phase `phi`: mirrors `cmath.rect()`. |
| [sin](/docs/reference/std/cmath/functions#sin) | `cmath.sin(x)` | The sine of `x`: mirrors `cmath.sin()`. |
| [sinh](/docs/reference/std/cmath/functions#sinh) | `cmath.sinh(x)` | The hyperbolic sine of `x`: mirrors `cmath.sinh()`. |
| [sqrt](/docs/reference/std/cmath/functions#sqrt) | `cmath.sqrt(x)` | The square root of `x`: mirrors `cmath.sqrt()`. |
| [tan](/docs/reference/std/cmath/functions#tan) | `cmath.tan(x)` | The tangent of `x`: mirrors `cmath.tan()`. |
| [tanh](/docs/reference/std/cmath/functions#tanh) | `cmath.tanh(x)` | The hyperbolic tangent of `x`: mirrors `cmath.tanh()`. |
