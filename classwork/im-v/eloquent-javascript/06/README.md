# Chapter 06: Location Class in JS, PHP, and Python

This folder compares the same object-oriented idea across three languages:
JavaScript, PHP, and Python.

## What this code does

The core idea is a `Location` type/class that stores latitude and longitude.
Each implementation can:

- represent itself as text (like `"-28.1,18.4"`),
- return coordinate data in array form.

## Language files

- `main.js` – JavaScript class with `toString()` and `toArray()`.
- `index.php` – PHP class with `__toString()` and `toArray()`.
- `samp.py` – Python class with `__str__()` and `get_location_array()`.

`index.html` is a simple launcher for the JavaScript version.

## Why this matters

If you are new to software engineering, this project shows that:

- syntax changes between languages,
- but core programming concepts stay the same.

That makes learning your second and third language much easier.

## Practice idea

Create a `distanceTo(otherLocation)` method in one language, then implement
it in the other two.
