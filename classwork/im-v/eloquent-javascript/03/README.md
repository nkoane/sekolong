# Lesson 03: JavaScript Fundamentals Through a Live Greeting Box

## Overview
This lesson introduces core JavaScript and browser concepts by building a small interactive UI component:

- A box is centered on the screen using viewport and element dimensions.
- The greeting inside the box changes based on the current time of day.
- A live clock updates every second.
- Evening mode switches the page to a dark theme.

You also have a short variable exercise (`riddle.js`) that demonstrates how temporary variables help when swapping values.

## Files in This Lesson
- `index.html`: Basic page structure and script/style wiring.
- `main.css`: Base styling for the page and greeting box.
- `main.js`: Main lesson logic (DOM access, centering, time logic, live updates).
- `riddle.js`: Small JavaScript reasoning task on variable assignment and swapping.
- `brackets-square.svg`: Favicon.

## What Learners Should Understand
By the end of this lesson, learners should be able to:

1. Read values from the browser environment (`window.innerWidth`, `window.innerHeight`).
2. Select and manipulate DOM elements (`document.querySelector`, `.style`, `.innerHTML`).
3. Use element dimensions (`offsetWidth`, `offsetHeight`) for layout logic.
4. Use `Date` APIs (`new Date()`, `.getHours()`, `.getMinutes()`, `.getSeconds()`).
5. Write conditional logic with `if / else if / else`.
6. Run repeated tasks with `setInterval`.
7. Format output values (e.g., `padStart` for seconds).
8. Reason about variable reassignment and swapping using a temporary variable.

## Expected Learner Outcomes
Learners should be able to explain and implement:

- Why centering requires both viewport size and element size.
- How time ranges map to morning/afternoon/evening greetings.
- Why a repeated timer is needed for a live clock.
- How adding/removing a class can drive theme changes.
- How assignment order affects values during swaps.

## Suggested Lesson Flow
1. Run the page and observe current behavior.
2. Walk through `main.js` top-to-bottom and connect each line to visible UI changes.
3. Trace the greeting logic for morning, afternoon, and evening.
4. Inspect `setInterval` and confirm why the clock updates every second.
5. Run `riddle.js` and predict console output before executing.
6. Refactor or extend behavior (see practice tasks below).

## Practice Tasks
- Add `AM/PM` time formatting.
- Pad minutes as well as seconds.
- Replace greeting codes (`GM`, `GA`, `GE`) with full phrases.
- Re-center the box when the window is resized.
- Add a midnight-specific message.
- Convert `riddle.js` into a reusable `swap(a, b)` function that returns swapped values.

## Assessment Checklist
Use this checklist to evaluate learner understanding:

- Can the learner describe each variable in `main.js` and its purpose?
- Can the learner modify the time ranges without breaking behavior?
- Can the learner explain why `padStart(2, '0')` is used?
- Can the learner debug wrong positioning values?
- Can the learner predict each `console.log` state in `riddle.js`?
- Can the learner implement one extension task independently?

## Quick Run
Open `index.html` in a browser.

If using a dev server (optional), run your preferred local server and open the served page.

## Notes for Instructors
- Emphasize the difference between one-time calculations and repeated updates.
- Ask learners to narrate variable state at each step (especially in `riddle.js`).
- Encourage small refactors after understanding baseline behavior.

## Common Mistakes (and Fixes)
- Mistake: Using `innerHTML` when only text is needed.
Fix: Prefer `textContent` for plain text updates.

- Mistake: Forgetting to pad minutes/seconds, causing uneven time display.
Fix: Use `String(value).padStart(2, '0')` for both minutes and seconds.

- Mistake: Centering only once, so layout breaks after window resize.
Fix: Wrap centering logic in a function and call it on `resize`.

- Mistake: Assuming greeting updates automatically when the hour changes.
Fix: Recompute greeting inside the interval (or schedule hourly checks).

- Mistake: Misreading time ranges (12:00 and 18:00 boundaries).
Fix: Test boundary times explicitly and verify expected output.

- Mistake: Confusing assignment order in swap logic.
Fix: Trace values line-by-line and use a temporary variable for clarity.
