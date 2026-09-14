# 00 — Click-to-Move Box

A minimal starter project to understand how **HTML**, **CSS positioning**, and **JavaScript events** work together. There are only 3 files in this folder — nothing else is hidden.

---

## What you see when you run it

- A **black page** with a **white square** centered in the viewport.
- A small **red rectangle** (`div.box`) with a thick **blue left border** and **yellow top border** starts near the top-left.
- **Click anywhere** on the page and the red box glides smoothly to your cursor.

That movement is the whole lesson.

---

## Files in this folder

```
00/
├── index.html  — structure
├── main.css    — layout & appearance
├── main.js     — interactivity
└── README.md   — this file
```

No build step, no framework, no dependencies. Open `index.html` directly in a browser (or with Vite/live-server) and it works.

### 1. `index.html` — 18 lines

```html
<div class="container">
  <div class="box"></div>
</div>
<script src="main.js" defer></script>
```

- `div.container` — the white square you see. It is the visual reference, not a boundary — the red box can leave it.
- `div.box` — the element you move around.
- `defer` on the script ensures `main.js` runs after the HTML is parsed.

### 2. `main.css` — 32 lines

**`body`** — `main.css:1-7`
```css
body {
  margin: 0;
  height: 100vh;
  display: grid;
  place-items: center;
  background-color: #000;
}
```
Centers everything. `place-items: center` on a `grid` is the shortest way to center both axes.

**`div.container`** — `main.css:9-13`
```css
div.container {
  background-color: white;
  height: 50vh;
  width: 50svh;
}
```
A responsive square: `50vh` tall and `50svh` wide ( `svh` = small viewport height, safer on mobile). It sits in the middle because the `body` centers it.

**`div.box`** — `main.css:15-32`
```css
div.box {
  border-left: 1rem solid blue;
  border-top: 1rem solid yellow;
  height: 100px;
  aspect-ratio: 3/1;
  background-color: red;
  position: absolute;
  transform: translate(-50%, -50%);
  top: 100px;
  left: 200px;
  transition: all 0.2s linear;
}
```

Key ideas for learners:

| Property | Why it matters |
|---|---|
| `position: absolute` + `top` / `left` | Takes the box out of normal flow so JS can place it anywhere using coordinates. |
| `transform: translate(-50%, -50%)` | Shifts the box back by half its own width/height — so the point you set with `left`/`top` is the **center** of the box, not its corner. Remove this and clicks will feel offset. |
| `aspect-ratio: 3/1` + `height: 100px` | Width becomes 300px automatically. No need to set `width`. |
| `border-left` / `border-top` | Shows the box model — borders are outside the background but inside the element's visual edge. |
| `transition: all 0.2s linear` | Animates every change to `top`/`left` so the box glides instead of teleporting. |
| Commented-out `border-radius` / `rotate` | Left as experiments — uncomment to see how one property changes the shape. |

### 3. `main.js` — 11 lines

```js
document.addEventListener("click", (ev) => {
  document.querySelector("div.box").style.left = ev.clientX + "px";
  document.querySelector("div.box").style.top = ev.clientY + "px";
});
```

- Listens for a `click` anywhere on `document`.
- `ev.clientX` / `ev.clientY` = cursor position in viewport pixels.
- Sets `style.left` and `style.top` inline — this overrides the `100px` / `200px` from CSS. Because CSS has a `transition`, the change animates.

**Commented-out block** — `main.js:1-6`:
```js
// setInterval(() => {
//   document.querySelector("div.box").style.left = Math.random() * 500 + "px";
//   document.querySelector("div.box").style.top = Math.random() * 500 + "px";
// }, 250);
```
Same idea but automatic: every 250ms the box jumps to a random position. Uncomment it to see the difference between **user-driven** vs **timer-driven** interaction. Try combining both!

---

## Concepts this exercise teaches

1.  **Centering** — `display: grid` + `place-items: center` vs older flex/margin tricks.
2.  **Absolute positioning + coordinate system** — `top`/`left` are relative to the viewport (no positioned parent here).
3.  **Centering with `transform`** — why `translate(-50%, -50%)` is needed for cursor-following.
4.  **Transitions** — how CSS alone creates motion.
5.  **DOM events** — `click` + `clientX/clientY` and writing to `element.style`.
6.  **Aspect ratio & borders** — visual parts of the box model.

---

## Try it yourself

1.  Open `index.html` in a browser.
2.  Open DevTools → Inspect `div.box` and watch `top`/`left` change when you click.
3.  Experiments:
    -   Remove `transform: translate(-50%, -50%)` — what happens to alignment?
    -   Change `transition: all 0.2s linear` to `1s ease-in-out`.
    -   Uncomment the `border-radius` lines in `main.css` — which corners change?
    -   Uncomment the `setInterval` in `main.js` — how does it interact with clicks?
    -   Add `position: relative` to `div.container` — does the box now move relative to the white square?

---

## How to run

No install needed:

```bash
# Option 1 — just open the file
open index.html

# Option 2 — with Vite (if installed in parent)
npx vite --open
```

Edit, save, refresh.
