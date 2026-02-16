console.log("math stuff");

function add(a, b) {
  return a + b;
}

function calculate(a, b, op) {
  if (op === "add") {
    return add(a, b);
  } else if (op === "subtract") {
    return a - b;
  } else {
    console.log(`Invalid operation: ${op}`);
  }
}
console.log(calculate(1, 2, "divide"));
calculate("2(40 + 25/4)^2");
