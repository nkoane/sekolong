# Chapter 2: Program Structure
## Variables, Loops & Functions

This lesson covers JavaScript fundamentals including variable declarations, data types, arrays, looping constructs, and function definitions. Students learn how to manipulate data and control program flow.

## Files

| File | Description |
|------|-------------|
| `index.html` | DOM manipulation demo with random background colors and images |
| `main.js` | Variables, arrays, `while` loops, and `forEach` iteration |
| `math.js` | Function definitions and conditional logic (`if/else`) |
| `my_functions.js` | Functions with return values, input validation, and `Math` methods |

## Key Concepts Covered

### Variables
- `const` declares constants that cannot be reassigned
- `let` declares variables that can be reassigned
- Use meaningful names: `myName`, `greeting`, `oldEnoughForBeer`
```js
const myName = "Thabiso Mokoena";
let age = 22;
```

### Data Types
- **Strings**: text wrapped in quotes (`"Hello"`)
- **Numbers**: integers and decimals (`22`, `100.5`)
- **Booleans**: `true` or `false`, often from comparisons (`age >= 18`)
- **Arrays**: ordered lists of values (`["apple", "banana"]`)

### Arrays
- Access elements by index (zero-based): `fruit[0]` returns first item
- Get length with `.length` property
- Get last item with `fruit[fruit.length - 1]`
```js
const fruit = ["perekisi", "dinamune", "ditsuru"];
console.log(fruit[0]);           // "perekisi"
console.log(fruit.length);       // 3
```

### Loops
- **`while` loop**: repeats while condition is true, manually manage index
- **`.forEach()`**: iterates over array elements with callback function
- Nested loops: loop inside another loop for complex iteration
```js
while (index < fruit.length) {
  console.log(fruit[index]);
  index = index + 1;
}

fruit.forEach((item, i) => {
  console.log(i, item);
});
```

### Functions
- Reusable blocks of code that perform specific tasks
- Can accept **parameters** (inputs) and **return** values (outputs)
- Functions without `return` implicitly return `undefined`
```js
function add(a, b) {
  return a + b;
}

function today() {
  console.log(new Date());  // no return statement
}
```

### Conditionals
- `if/else` statements control which code runs based on conditions
- Comparison operators: `===`, `>=`, `<`, etc.
- Template literals for dynamic strings: `` `Invalid: ${op}` ``
```js
if (op === "add") {
  return a + b;
} else if (op === "subtract") {
  return a - b;
} else {
  console.log(`Invalid operation: ${op}`);
}
```

### DOM Manipulation
- `document.querySelector()` selects HTML elements
- Modify styles directly via `.style` property
- Inline JavaScript in `<script>` tags
```js
const mzimba = document.querySelector("body");
mzimba.style.backgroundColor = "red";
mzimba.style.backgroundImage = `url('https://picsum.photos/1000/2000')`;
```

### Built-in Math Object
- `Math.random()`: returns random decimal between 0 and 1
- `Math.round()`: rounds to nearest integer
- `Math.floor()`: rounds down to integer (useful for array indices)
```js
const random = Math.random();              // 0.7234...
const scaled = Math.round(random * 10);    // 7
const index = Math.floor(Math.random() * array.length);
```

## How to Run

**For `index.html`:**
```bash
# Open in browser directly, or use a local server
npx vite
```

**For JavaScript files:**
```bash
node main.js
node math.js
node my_functions.js
```

## Prerequisites

- Basic understanding of HTML
- Node.js installed (for running JS files in terminal)
- A modern web browser
