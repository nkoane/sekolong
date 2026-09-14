# Doodles: a small to-do list

This folder contains a small, browser-based to-do list project. It is designed as a learning exercise in connecting **HTML**, **CSS**, **JavaScript**, and **SVG icons** to make an interactive page.

You can:

- type a task into the input field;
- add the task with the **plus** button;
- mark a task as complete with the circle/check icon; and
- delete a task with the **minus** button.

New tasks appear at the top of the list. Deleting a task asks for confirmation and then fades the task out of the page.

## Try it

No build tools or dependencies are required. Open `index.html` in a modern web browser. For a local development server, run this command from this folder:

```bash
python3 -m http.server
```

Then visit <http://localhost:8000> in your browser.

## How the project works

### `index.html`

This is the page structure:

- loads the favicon, page title, and stylesheet;
- provides the task form and text input;
- contains an ordered list where tasks will be displayed; and
- loads `main.js` at the end of the page.

The first `<li>` in the list is a **template**. JavaScript copies it whenever a new task is added, so it is removed from the visible list when the page starts.

### `main.js`

This file supplies the behaviour of the to-do list:

1. It waits until the page has loaded.
2. It finds the form and task list in the document.
3. It listens for the form's `submit` event and prevents the browser from reloading the page.
4. It trims the entered text and ignores empty tasks.
5. It creates a task object and stores it in the `todos` array.
6. It clones the list-item template and inserts the task at the beginning of the list.
7. It attaches event listeners for completing and deleting that task.

Each task currently has this shape:

```js
{
  id: 1,
  name: "Read a chapter",
  completed: false,
  createdAt: "2024-01-01T12:00:00.000Z",
  completeAt: null
}
```

The dates are generated with `toISOString()`, which stores them in a consistent format.

### `main.css`

The stylesheet controls the page layout and appearance. It:

- centers the application in the page;
- lays out the input and add button in a grid;
- lays out each task with action, text, and delete columns;
- hides the completed/unfinished icon that is not currently needed; and
- fades a task out before it is removed.

### `bowl-food.svg`

This is the small SVG used as the browser tab favicon.

### `icons/`

These SVG files are the controls used by each task:

- `plus.svg` — add a task;
- `circle.svg` — an unfinished task;
- `check-circle.svg` — a completed task; and
- `minus.svg` — delete a task.

## What to learn from this example

This project is a useful starting point for practising:

- selecting elements with `querySelector`;
- handling form and click events;
- preventing default browser behaviour;
- reading and resetting form values;
- creating and cloning DOM elements;
- using arrays and objects to represent application state;
- updating the DOM when state changes; and
- using CSS classes to show, hide, and animate elements.

## Current limitations

The list only lives in memory while the page is open. Refreshing the page removes all tasks because this project does not yet use `localStorage` or a server/database. It also does not currently provide editing, filtering, or a count of completed tasks.

These are good possible extensions for further practice:

- save and restore tasks with `localStorage`;
- add an edit button;
- add filters for all, active, and completed tasks;
- show a completed-task count; and
- improve keyboard and screen-reader accessibility for the icon controls.
