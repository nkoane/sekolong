# Bubbles: JSON To-Do Viewer

This mini project shows how to load data from a local JSON file and render
that data into HTML with JavaScript.

## What this code does

- `data.json` stores a small to-do list.
- `main.js` imports that JSON file.
- When the page is ready (`DOMContentLoaded`), the script:
  - finds the `<dl id="notes">` element,
  - loops through every note,
  - creates a new `<dd>` for each task,
  - displays whether each task is **done** or **not done**.

## Why this matters

If you are a beginner, this is a clean example of separating:

- **data** (`data.json`) from
- **presentation** (`index.html`) and
- **logic** (`main.js`).

That is a core web development skill.

## Files in this folder

- `index.html` – basic page with a heading and definition list.
- `data.json` – task data used by the app.
- `main.js` – converts JSON data into DOM elements.
- `main.css` – currently empty; available for styling practice.

## Practice idea

Add a new property like `priority` in `data.json`, then update `main.js` to
show it next to each task.
