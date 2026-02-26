let one = "bananas";
let two = "oranges";
let three;

console.log({ one, two, three });
three = one;
console.log({ one, two, three });
one = two;
console.log({ one, two, three });
two = three;
console.log({ one, two, three });