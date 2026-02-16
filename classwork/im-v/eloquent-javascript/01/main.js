let whoAreYou;
whoAreYou = "John Doe";

const age = Math.floor(Math.random() * 100);

if (age >= 18) {
  whoAreYou = "Jane Doe";
}

console.log(`Hello, ${whoAreYou}, and you are ${age} years old!`);
