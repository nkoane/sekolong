# Nota: Class List Builder

This project builds a class roster in the browser using JavaScript objects,
arrays, loops, and helper functions.

## What this code does

- Defines a list of student names.
- Generates student numbers like `NIM2026001`, `NIM2026002`, etc.
- Randomly assigns a gender code from a list.
- Stores each student as an object in `currentClass.students`.
- Prints class details and the student list into the HTML page.

## Main learning goals

For high-school graduates starting coding, this project teaches:

1. **Reusable functions** (`generateStudentNumber`, `getRandomGender`)
2. **Objects with methods** (`currentClass.generateStudentNumber`)
3. **Loops and array building** (`for` loop + `push`)
4. **DOM updates** with `textContent` and dynamic `<li>` creation

## Files in this folder

- `index.html` – page structure (class title, details, and ordered list).
- `main.js` – all data generation and DOM rendering logic.
- `main.css` – currently empty; styling can be added as an exercise.

## Practice idea

Add a `subject` field to each student object and show it in the output list.
