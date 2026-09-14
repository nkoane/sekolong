# STORAGE — `localStorage` + Forms Mini-App

A tiny todo / colour-picker that **remembers** what you typed after you refresh or close the tab. It is the simplest example of *persistence* in the browser.

No backend, no build step — just `index.html` + `main.css` + `main.js` and the Web Storage API.

## What you see

Open `index.html` you get a card with:

* an input `placeholder="kgheta mmala"` (Sesotho — “choose a colour”)
* an **Add** button
* an ordered list with one starter item `disa dikgomo`

Type anything into the input and press **Add** — the page background changes to what you typed and the value is saved. Refresh the page: the background is still that colour and the value is still in `localStorage`.

> Try it: type `tomato`, `gold`, `#1B5E20`, `rgb(200, 30, 30)` — any valid CSS colour — then hit Add and refresh.

## Files in this folder only

### `index.html:1-23`
```html
<form method="post" action="index.html" id="task">  <!-- index.html:11 -->
  <label for="todo">
    <input type="text" name="todo" id="todo" placeholder="kgheta mmala" />
    <button type="submit">Add</button>
  </label>
</form>
<ol id="todo-list">          <!-- index.html:17 -->
  <li class="todo-item">disa dikgomo</li>
</ol>
<script defer src="main.js"></script>  <!-- index.html:21 -->
```

* `form#task` — the only way to add data. `method="post"` + `action="index.html"` is the fallback; JavaScript cancels the navigation.
* `input#todo` / `name="todo"` — accessed as `form.todo` in JS. `id` is for `<label for>` and CSS, `name` is what `form.todo` reads.
* `ol#todo-list` / `li.todo-item` — where todos *should* be rendered. Right now the HTML only has a placeholder item; the list is not yet updated by JS (see gotcha below).
* `link rel="stylesheet" href="main.css"` and `script defer` — styling and behaviour are separated, script runs after HTML is parsed.

### `main.js:1-24` — the whole app

**1. Wait for HTML:**
```js
document.addEventListener("DOMContentLoaded", () => { // main.js:1
```
Ensures `form#task` exists before `querySelector` runs.

**2. Load saved state:**
```js
let bgColour = localStorage.getItem("myBackgroundColour"); // main.js:2
let todos = [];
if (localStorage.getItem("myTodos") !== null) {           // main.js:5
  todos = JSON.parse(localStorage.getItem("myTodos"));    // main.js:6
}
if (bgColour !== null) {                                  // main.js:9
  document.body.style.backgroundColor = bgColour;         // main.js:10
}
```
`localStorage` only stores strings. Colours are stored as plain strings, todos as `JSON.stringify` / `JSON.parse` of an array. On every load we read both keys and repaint the background if one exists. Open DevTools → Application → Local Storage to see `myBackgroundColour` and `myTodos`.

**3. Handle submit:**
```js
const form = document.querySelector("form#task"); // main.js:12
form.addEventListener("submit", (ev) => {         // main.js:14
  ev.preventDefault();                            // main.js:15 — stop the page reload
  document.body.style.backgroundColor = form.todo.value; // main.js:17
  localStorage.setItem("myBackgroundColour", form.todo.value); // main.js:18
  todos.push(form.todo.value);                    // main.js:19
  localStorage.setItem("myTodos", JSON.stringify(todos)); // main.js:20
  form.reset();                                   // main.js:21
});
```
* `preventDefault()` keeps us on the same page.
* `form.todo.value` is the text you typed.
* The value does **two** jobs: it becomes the `backgroundColor` *and* a todo entry — that is intentional for this demo so you can see storage immediately.
* `form.reset()` clears the input for the next entry.

### `main.css:1-429` — Afrocentric solid-colour skin

You are allowed to edit **only** `main.css` in this exercise.

* **Palette** — `--red: #C41E1A`, `--gold: #E8A317`, `--green: #1B5E20`, `--terracotta: #B85C38`, `--cream: #FDF6E3`, `--paper: #FFFCF2` — Pan-African + earth tones.
* **Solid colours only** — `body { background-color: var(--cream) }` (`main.css:34`), `body::after { display:none }` — no patterned `background-image`.
* **Layout** — `body { display:grid; place-items:start center }` centers the `main` card; `main { max-width:560px; background:var(--paper); border-radius:24px }` (`main.css:76`).
* **Decorations via pseudo-elements only** (so `index.html` stays untouched):
  * `body::before` — 8px Pan-African top stripe (`main.css:52`)
  * `main::after` — 18px kente block footer (`main.css:93`)
  * `main::before` — pill `◆ SAWUBONA ◆ DUMELA ◆ MOLO ◆ AVUXENI ◆` greetings (`main.css:111`) + `form::before`/`form::after` headings in isiZulu/Sesotho
* **Form & list** — `form label` and `.todo-item` are both `border-radius: 0` (square) (`main.css:136,251`) so the input matches the list items. `.todo-item::before` is the 4px left accent cycling `gold → terracotta → green` (`main.css:286-294`), `::after` is the numbered badge.
* Try changing only `main.css` — colours, spacing, `border`, `box-shadow` — and refresh to see the card update while the *data* still comes from `localStorage`.

## How persistence works (mental model)

```
type "tomato" → submit → localStorage.setItem("myBackgroundColour","tomato")
                          localStorage.setItem("myTodos",'["tomato"]')
refresh → localStorage.getItem(...) → body.style.backgroundColor = "tomato"
```

`localStorage` is synchronous, per-origin (per folder when opened via `file://` or per host on a server), and survives close/reopen. `sessionStorage` would be the tab-only alternative.

## Gotchas to notice (and fix as homework)

1. **List is not rendered from `todos` on load.** `main.js:8` logs `todos` but never creates `<li>` elements. Add a `render()` that loops `todos` and appends to `#todo-list` — then clear the hardcoded `<li>disa dikgomo</li>` or keep it as seed data.
2. **Empty input is not checked.** The comment on `main.js:16` says `// check todo.value is not empty` but there is no `if` — pressing Add with an empty string stores `""` and sets `backgroundColor` to invalid. Guard it.
3. **Everything is a “colour”.** `todos` currently stores colour strings, not real tasks. Split the concerns: store `{ text, colour }` or keep colour separate from task text.
4. **No delete / clear.** Try adding `localStorage.removeItem("myTodos")` / `clear()` and a button to reset.

## Try yourself

1. Open `index.html` in a browser (or `npx serve .`).
2. Open DevTools → Console → Application → Local Storage. Watch `myBackgroundColour` and `myTodos` appear after Add.
3. Edit only `main.css` — change `--gold`, `--green`, `body { background-color }`, `form label { border-radius }` — to make it yours.
4. Refresh. Your data stays, your style stays.
5. Bonus: fix gotcha 1 so the `ol` actually shows all saved todos after refresh.

That’s it — HTML holds the structure, CSS holds the look, JS + `localStorage` holds the memory.
