---
title: nu.std.cmath.functions
description: "Module-level functions and constants for `nu.std.cmath`."
---

Module-level functions and constants for `nu.std.cmath`.

`cmath` is a function module - free functions over complex numbers plus a few
constants - so this is the function half of the surface: typed wrappers that
mirror `cmath.sqrt` / `cmath.phase` / `cmath.polar` 1-1, plus the module
constants. Each wrapper builds its interaction atom (lazily imported, like
`nu.std.math`) and returns the Form that matches the host return type:

- most functions -> `complex` (the Form for the builtin)
- `phase` -> `Float`
- `polar` -> `Tuple` (the `(r, phi)` pair)
- `isnan` / `isinf` / `isfinite` / `isclose` -> `Bool`
- `rect(r, phi)` -> `complex`

Constants are plain values, so they ride on `Literal` instead of an atom.
`pi` / `e` / `tau` / `inf` / `nan` are floats; `infj` / `nanj` are
complex, so they are wrapped in the `complex` Form.

| Name | Call | Meaning |
| --- | --- | --- |
| [acos](#acos) | `cmath.acos(x)` | The arc cosine of `x`: mirrors `cmath.acos()`. |
| [asin](#asin) | `cmath.asin(x)` | The arc sine of `x`: mirrors `cmath.asin()`. |
| [atan](#atan) | `cmath.atan(x)` | The arc tangent of `x`: mirrors `cmath.atan()`. |
| [cos](#cos) | `cmath.cos(x)` | The cosine of `x`: mirrors `cmath.cos()`. |
| [cosh](#cosh) | `cmath.cosh(x)` | The hyperbolic cosine of `x`: mirrors `cmath.cosh()`. |
| [exp](#exp) | `cmath.exp(x)` | `e` raised to `x`: mirrors `cmath.exp()`. |
| [isclose](#isclose) | `cmath.isclose(a, b)` | Whether `a` and `b` are close: mirrors `cmath.isclose()`. |
| [isfinite](#isfinite) | `cmath.isfinite(x)` | Whether both components of `x` are finite: mirrors `cmath.isfinite()`. |
| [isinf](#isinf) | `cmath.isinf(x)` | Whether `x` has an infinite component: mirrors `cmath.isinf()`. |
| [isnan](#isnan) | `cmath.isnan(x)` | Whether `x` has a NaN component: mirrors `cmath.isnan()`. |
| [log](#log) | `cmath.log(x, base=None)` | The logarithm of `x` (natural, or to `base`): mirrors `cmath.log()`. |
| [log10](#log10) | `cmath.log10(x)` | The base-10 logarithm of `x`: mirrors `cmath.log10()`. |
| [phase](#phase) | `cmath.phase(x)` | The phase angle of `x`, in radians: mirrors `cmath.phase()`. |
| [polar](#polar) | `cmath.polar(x)` | `x` as the polar pair `(r, phi)`: mirrors `cmath.polar()`. |
| [rect](#rect) | `cmath.rect(r, phi)` | The complex number with modulus `r` and phase `phi`: mirrors `cmath.rect()`. |
| [sin](#sin) | `cmath.sin(x)` | The sine of `x`: mirrors `cmath.sin()`. |
| [sinh](#sinh) | `cmath.sinh(x)` | The hyperbolic sine of `x`: mirrors `cmath.sinh()`. |
| [sqrt](#sqrt) | `cmath.sqrt(x)` | The square root of `x`: mirrors `cmath.sqrt()`. |
| [tan](#tan) | `cmath.tan(x)` | The tangent of `x`: mirrors `cmath.tan()`. |
| [tanh](#tanh) | `cmath.tanh(x)` | The hyperbolic tangent of `x`: mirrors `cmath.tanh()`. |

## acos

The arc cosine of `x`: mirrors `cmath.acos()`.

```python
cmath.acos(x)
```

Path `nu.std.cmath.acos`. Defined on `nu.std.cmath.functions`, bound as a function. Builds `complex`.

**Arguments**

| Name | Type | Default | Meaning |
| --- | --- | --- | --- |
| `x` | `ComplexArg` |  |  |

Undocumented: example.

## asin

The arc sine of `x`: mirrors `cmath.asin()`.

```python
cmath.asin(x)
```

Path `nu.std.cmath.asin`. Defined on `nu.std.cmath.functions`, bound as a function. Builds `complex`.

**Arguments**

| Name | Type | Default | Meaning |
| --- | --- | --- | --- |
| `x` | `ComplexArg` |  |  |

Undocumented: example.

## atan

The arc tangent of `x`: mirrors `cmath.atan()`.

```python
cmath.atan(x)
```

Path `nu.std.cmath.atan`. Defined on `nu.std.cmath.functions`, bound as a function. Builds `complex`.

**Arguments**

| Name | Type | Default | Meaning |
| --- | --- | --- | --- |
| `x` | `ComplexArg` |  |  |

Undocumented: example.

## cos

The cosine of `x`: mirrors `cmath.cos()`.

```python
cmath.cos(x)
```

Path `nu.std.cmath.cos`. Defined on `nu.std.cmath.functions`, bound as a function. Builds `complex`.

**Arguments**

| Name | Type | Default | Meaning |
| --- | --- | --- | --- |
| `x` | `ComplexArg` |  |  |

Undocumented: example.

## cosh

The hyperbolic cosine of `x`: mirrors `cmath.cosh()`.

```python
cmath.cosh(x)
```

Path `nu.std.cmath.cosh`. Defined on `nu.std.cmath.functions`, bound as a function. Builds `complex`.

**Arguments**

| Name | Type | Default | Meaning |
| --- | --- | --- | --- |
| `x` | `ComplexArg` |  |  |

Undocumented: example.

## exp

`e` raised to `x`: mirrors `cmath.exp()`.

```python
cmath.exp(x)
```

Path `nu.std.cmath.exp`. Defined on `nu.std.cmath.functions`, bound as a function. Builds `complex`.

**Arguments**

| Name | Type | Default | Meaning |
| --- | --- | --- | --- |
| `x` | `ComplexArg` |  |  |

Undocumented: example.

## isclose

Whether `a` and `b` are close: mirrors `cmath.isclose()`.

```python
cmath.isclose(a, b)
```

Path `nu.std.cmath.isclose`. Defined on `nu.std.cmath.functions`, bound as a function. Builds `Bool`.

**Arguments**

| Name | Type | Default | Meaning |
| --- | --- | --- | --- |
| `a` | `ComplexArg` |  |  |
| `b` | `ComplexArg` |  |  |

Undocumented: example.

## isfinite

Whether both components of `x` are finite: mirrors `cmath.isfinite()`.

```python
cmath.isfinite(x)
```

Path `nu.std.cmath.isfinite`. Defined on `nu.std.cmath.functions`, bound as a function. Builds `Bool`.

**Arguments**

| Name | Type | Default | Meaning |
| --- | --- | --- | --- |
| `x` | `ComplexArg` |  |  |

Undocumented: example.

## isinf

Whether `x` has an infinite component: mirrors `cmath.isinf()`.

```python
cmath.isinf(x)
```

Path `nu.std.cmath.isinf`. Defined on `nu.std.cmath.functions`, bound as a function. Builds `Bool`.

**Arguments**

| Name | Type | Default | Meaning |
| --- | --- | --- | --- |
| `x` | `ComplexArg` |  |  |

Undocumented: example.

## isnan

Whether `x` has a NaN component: mirrors `cmath.isnan()`.

```python
cmath.isnan(x)
```

Path `nu.std.cmath.isnan`. Defined on `nu.std.cmath.functions`, bound as a function. Builds `Bool`.

**Arguments**

| Name | Type | Default | Meaning |
| --- | --- | --- | --- |
| `x` | `ComplexArg` |  |  |

Undocumented: example.

## log

The logarithm of `x` (natural, or to `base`): mirrors `cmath.log()`.

```python
cmath.log(x, base=None)
```

Path `nu.std.cmath.log`. Defined on `nu.std.cmath.functions`, bound as a function. Builds `complex`.

**Arguments**

| Name | Type | Default | Meaning |
| --- | --- | --- | --- |
| `x` | `ComplexArg` |  |  |
| `base` | `ComplexArg \| None` | `None` |  |

Undocumented: example.

## log10

The base-10 logarithm of `x`: mirrors `cmath.log10()`.

```python
cmath.log10(x)
```

Path `nu.std.cmath.log10`. Defined on `nu.std.cmath.functions`, bound as a function. Builds `complex`.

**Arguments**

| Name | Type | Default | Meaning |
| --- | --- | --- | --- |
| `x` | `ComplexArg` |  |  |

Undocumented: example.

## phase

The phase angle of `x`, in radians: mirrors `cmath.phase()`.

```python
cmath.phase(x)
```

Path `nu.std.cmath.phase`. Defined on `nu.std.cmath.functions`, bound as a function. Builds `Float`.

**Arguments**

| Name | Type | Default | Meaning |
| --- | --- | --- | --- |
| `x` | `ComplexArg` |  |  |

Undocumented: example.

## polar

`x` as the polar pair `(r, phi)`: mirrors `cmath.polar()`.

```python
cmath.polar(x)
```

Path `nu.std.cmath.polar`. Defined on `nu.std.cmath.functions`, bound as a function. Builds `Tuple`.

**Arguments**

| Name | Type | Default | Meaning |
| --- | --- | --- | --- |
| `x` | `ComplexArg` |  |  |

Undocumented: example.

## rect

The complex number with modulus `r` and phase `phi`: mirrors `cmath.rect()`.

```python
cmath.rect(r, phi)
```

Path `nu.std.cmath.rect`. Defined on `nu.std.cmath.functions`, bound as a function. Builds `complex`.

**Arguments**

| Name | Type | Default | Meaning |
| --- | --- | --- | --- |
| `r` | `FloatArg` |  |  |
| `phi` | `FloatArg` |  |  |

Undocumented: example.

## sin

The sine of `x`: mirrors `cmath.sin()`.

```python
cmath.sin(x)
```

Path `nu.std.cmath.sin`. Defined on `nu.std.cmath.functions`, bound as a function. Builds `complex`.

**Arguments**

| Name | Type | Default | Meaning |
| --- | --- | --- | --- |
| `x` | `ComplexArg` |  |  |

Undocumented: example.

## sinh

The hyperbolic sine of `x`: mirrors `cmath.sinh()`.

```python
cmath.sinh(x)
```

Path `nu.std.cmath.sinh`. Defined on `nu.std.cmath.functions`, bound as a function. Builds `complex`.

**Arguments**

| Name | Type | Default | Meaning |
| --- | --- | --- | --- |
| `x` | `ComplexArg` |  |  |

Undocumented: example.

## sqrt

The square root of `x`: mirrors `cmath.sqrt()`.

```python
cmath.sqrt(x)
```

Path `nu.std.cmath.sqrt`. Defined on `nu.std.cmath.functions`, bound as a function. Builds `complex`.

**Arguments**

| Name | Type | Default | Meaning |
| --- | --- | --- | --- |
| `x` | `ComplexArg` |  |  |

Undocumented: example.

## tan

The tangent of `x`: mirrors `cmath.tan()`.

```python
cmath.tan(x)
```

Path `nu.std.cmath.tan`. Defined on `nu.std.cmath.functions`, bound as a function. Builds `complex`.

**Arguments**

| Name | Type | Default | Meaning |
| --- | --- | --- | --- |
| `x` | `ComplexArg` |  |  |

Undocumented: example.

## tanh

The hyperbolic tangent of `x`: mirrors `cmath.tanh()`.

```python
cmath.tanh(x)
```

Path `nu.std.cmath.tanh`. Defined on `nu.std.cmath.functions`, bound as a function. Builds `complex`.

**Arguments**

| Name | Type | Default | Meaning |
| --- | --- | --- | --- |
| `x` | `ComplexArg` |  |  |

Undocumented: example.
