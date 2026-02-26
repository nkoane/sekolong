BOXED — Lesson Plan

Overview
- Small demo that combines one HTML file, one CSS file and two short JavaScript files to produce a centered colored box that shows a time-based greeting and a live clock. Use this folder as a guided classroom exercise to practice reading and explaining the three layers of the web.

Learning objectives
- Identify where structure (HTML), presentation (CSS) and behavior (JavaScript) live in a small project.
- Trace how the script measures the DOM and changes inline styles to position an element.
- Observe how time-of-day logic drives a theme toggle and a live clock update.
- Practice tracing primitive variable assignment using the console exercise in `riddle.js`.

Files in this folder
- `index.html` — minimal document: links `main.css`, sets a favicon (`brackets-square.svg`) and contains the single DOM node targeted by the script: `div.box` (initial content: `GM`).
- `main.css` — page and box styles. Notable rules:
  - `body` sets baseline spacing, background and font.
  - `div.box` uses `display: grid` with `place-items: center` to center its contents; it sets `width: 15ch`, padding and a transition for visual changes.
  - `body.dark` inverts page and box colors for an evening theme.
- `main.js` — behavior and DOM logic. Actions present in the file:
  - reads viewport size via `window.innerWidth` / `window.innerHeight`;
  - selects the box with `document.querySelector('div.box')` and measures it using `offsetWidth` / `offsetHeight`;
  - computes `leftPosition` and `topPosition` to center the box and assigns those values to `box.style.left` and `box.style.top`;
  - chooses a greeting based on `new Date().getHours()` (`GM`, `GA`, `GE`) and toggles `document.body.classList.toggle('dark')` in the evening branch;
  - updates the box text every second with `setInterval`, formatting seconds with `padStart(2, '0')`.
- `riddle.js` — a small console exercise that logs the state of three variables (`one`, `two`, `three`) after successive assignments so students can predict the outputs and verify in DevTools.
- `brackets-square.svg` — favicon referenced from `index.html`.

Suggested lesson flow (30–50 minutes)
- Starter (2–3 min): Open `index.html` in a browser. Ask: where does the `GM` text come from? (Look at `index.html`.)
- HTML (5–7 min): Inspect `index.html` and show how the stylesheet and script are linked and where the `div.box` element is placed.
- CSS (8–10 min): Read `main.css` with students and ask:
  - How is content centered inside the box? (See `display: grid` + `place-items: center`.)
  - What does `15ch` mean for width? Why might that be chosen?
  - Where is the evening theme defined? (Check `body.dark`.)
- JavaScript (12–18 min): Walk through `main.js` line-by-line and ask students to predict behavior before running:
  - How does the script find and measure the `.box` element? (`document.querySelector`, `offsetWidth`, `offsetHeight`)
  - How are the `leftPosition` and `topPosition` values calculated? (Centering math using viewport and element sizes.)
  - Where is the `dark` class applied and why? (Evening `else` branch in the hour-based conditional.)
  - How does the live clock update and why is `padStart` used for seconds?
- Console exercise (5–8 min): Paste or open `riddle.js` in DevTools and have students predict the `console.log` outputs produced after each assignment.
- Wrap-up (3–5 min): Ask students to summarize how HTML, CSS and JavaScript responsibilities differ in this example and to name one small improvement they would try next.

In-class prompts and questions
- Which file provides the initial visible text, and which file updates it over time? (`index.html` and `main.js`)
- How does the CSS center the text inside the box? (`main.css` — `display: grid` + `place-items: center`)
- Where in the code is the dark theme triggered? (`main.js` — the `else` branch toggles `body.dark`.)
- The script sets `left` and `top` once on load — what happens if the window is resized? Use this to discuss event listeners and layout recalculation.

Exercises (in-class or homework)
- Predict the four console outputs when `riddle.js` runs; then run it in DevTools to confirm.
- Inspect the computed `offsetWidth` and `offsetHeight` of `.box` in DevTools and report the values the script would read.
- Explain in two sentences why `padStart` is used when the script builds the seconds string.

Instructor notes
- This README describes only the files and code already present in this folder. If you want a student handout, an answer key for the `riddle.js` exercise, or line-by-line teacher notes that map to exact line numbers, tell me which format you want and I will produce it without changing any source files.
