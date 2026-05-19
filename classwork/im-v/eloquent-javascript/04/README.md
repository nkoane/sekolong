# Chapter 04: Theme Toggle Demo

This folder contains a simple dark/light mode demo.

## What this code does

- `index.html` renders a heading and a circular toggle button.
- `main.js` waits for `DOMContentLoaded`, then adds a click listener to the
  button.
- Clicking the button toggles the `dark` class on `<body>`.
- `main.css` uses CSS variables and the `body.dark` class to switch colors and
  swap icon images (`moon-stars.svg` and `sun.svg`).

## Why this is useful

This is an important beginner pattern:

- JavaScript changes one class name.
- CSS handles all visual changes.

That keeps your code cleaner and easier to scale.

## Files in this folder

- `index.html` – markup for the page and toggle button.
- `main.js` – event handling for theme switching.
- `main.css` – color/theme rules and button icon styling.
- `images/` – icon assets used by the button.

## Practice idea

Store the current theme in `localStorage` so the user’s choice stays after a
page refresh.
