# The Roots: Task Tracker (Undun)

This project is a to-do app with two task columns: undone and done.
It also introduces Tailwind CSS utility classes.

## What this code does

- `index.html` builds the UI:
  - a form to add tasks,
  - an `#undone` list,
  - a `#done` list.
- `app.js` (the active script) stores tasks in memory and redraws the UI.
  - Add task from the form.
  - Toggle task status by clicking a list item.
  - Move tasks between undone and done lists.
- `main.js` is an alternate implementation that uses separate `done` and
  `undone` arrays, checkboxes, and delete links.
- `input.css` is Tailwind source; `main.css` is generated output.

## Beginner concepts covered

- Event handling (`submit`, `click`, `change`)
- State management (array of task objects)
- Re-rendering UI from state
- Utility-first styling with Tailwind

## Files in this folder

- `index.html` – page structure and script reference.
- `app.js` – currently used application logic.
- `main.js` – alternative logic experiment.
- `input.css` – Tailwind source styles.
- `main.css` – compiled CSS.
- `package.json` / `bun.lock` – project tooling metadata.

## Practice idea

Persist tasks in `localStorage` so the list remains after page reload.
