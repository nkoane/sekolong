# SKROLL

Horizontal full-viewport carousel - 3 slides (`100`, `200`, `300`) that scrolls left on click with an infinite loop.

## Structure

### `index.html:10-15`

```html
<main>
  <ol>
    <li class="slide-1">100</li>
    <li class="slide-2">200</li>
    <li class="slide-3">300</li>
  </ol>
</main>
```

* `main` is the **viewport** - fixed to `100vw`, clips overflow.
* `ol` is the **track** - holds all slides in a single row.
* `li` are **slides** - each `100vw x 100vh`, centered number. Classes `slide-1/2/3` give stable colors after reordering (see CSS).

### `main.css:1-4` - Reset

```css
body { margin: 0; font-family: Helvetica, Arial, sans-serif; }
```

Removes default 8px body margin that would create horizontal scroll.

### `main.css:6-9` - Viewport

```css
main {
  width: 100vw;
  overflow: hidden;
}
```

`main` is exactly one screen wide. `overflow: hidden` hides slides 2/3 off to the right. This is the window you look through - previously this role was incorrectly on the `ol`.

### `main.css:10-20` - Track

```css
main ol {
  list-style-type: none;
  margin: 0; padding: 0;
  display: grid;
  grid-template-columns: repeat(3, 100vw);
  width: max-content;
  position: relative;
  left: 0;
  transition: transform 0.5s ease;
}
```

* `display: grid` + `repeat(3, 100vw)` lays slides side-by-side in a `300vw` row.
* `width: max-content` lets the track grow to `300vw` (if it were `100vw` the extra columns would be clipped inside the track itself).
* `transition: transform` animates the slide. `transform` is used over `left` because it is GPU-accelerated and does not trigger layout.

### `main.css:22-34` - Slides

```css
main ol li {
  width: 100vw; height: 100vh;
  font-size: 10rem;
  display: grid; place-items: center;
}
main ol li:hover { cursor: pointer; }
```

Each slide fills the viewport, centers its number with `place-items: center`, and shows a pointer to indicate clickability. No transition here - animation belongs on the track.

### `main.css:36-53` - Colors

```css
main ol li.slide-1 { background-color: #ff8; } /* yellow */
main ol li.slide-2 { background-color: #8f8; } /* green  */
main ol li.slide-3 { background-color: #88f; } /* blue   */
```

`slide-1/2/3` classes keep colors tied to content. Bare `:nth-child` would follow position, so after `append()` the colors would rotate (yellow would move to where blue was). The classes ensure `100` is always yellow even after DOM reorder.

### `main.js:1` - Reference

```js
const slidesContainer = document.querySelector("main ol");
```

Grabs the track once for reuse.

### `main.js:3` - Animation lock

```js
let isAnimating = false;
```

Prevents queuing clicks while the 0.5s transition is running. Without it rapid clicks would stack `transform` values and corrupt the reset.

### `main.js:5-7` - Delegated click

```js
slidesContainer.addEventListener("click", (ev) => {
  const target = ev.target.closest("li");
  if (!target || !slidesContainer.contains(target) || isAnimating) return;
```

One listener on the `ol` handles all slides (event delegation). `closest("li")` works even if inner markup is added later. The guard ignores clicks outside a slide or during animation.

### `main.js:9-12` - Slide

```js
isAnimating = true;
slidesContainer.style.transform = `translateX(-100vw)`;
```

Shifts the entire track left by one viewport width. `100 -> 200` becomes visible. Using `translateX` is cheaper than `left` and stays in sync with `transition: transform` in CSS.

### `main.js:14-27` - Infinite reset

```js
slidesContainer.addEventListener("transitionend", () => {
  slidesContainer.style.transition = "none";
  slidesContainer.style.transform = "none";
  slidesContainer.append(slidesContainer.firstElementChild);
  void slidesContainer.offsetHeight;
  slidesContainer.style.transition = "";
  isAnimating = false;
}, { once: true });
```

After the animation finishes:
1. `transition: none` + `transform: none` snaps the track back to `0` with no animation.
2. `append(firstElementChild)` moves the slide that just scrolled out of view (`100`) to the end. Order `100,200,300` -> `200,300,100`. Visually still on `200` because snap + reorder cancel out.
3. `void offsetHeight` forces a reflow so the browser applies the snap before the transition is restored.
4. `transition: ""` restores the CSS transition for the next click. `isAnimating = false` unlocks input. `{ once: true }` auto-removes the one-shot listener.

Result: `100 -> 200 -> 300 -> 100 ...` endlessly without ever showing a blank screen.

## Why the previous version showed black

`ol { width: 100vw; overflow-x: hidden }` clipped slides 2/3 inside the `ol`. Setting `ol.style.left = "-100vw"` moved the whole clipped container off-screen, leaving the viewport empty. The fix separates concerns: `main` clips, `ol` is wide and moves via `transform`.

## Adding slides

Add a new `<li class="slide-4">400</li>` and update `grid-template-columns: repeat(4, 100vw)`.
