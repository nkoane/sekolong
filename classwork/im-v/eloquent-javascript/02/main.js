const myName = "Thabiso Mokoena";
const greeting = "Hello, ";
let age = 22;
const oldEnoughForBeer = age >= 18;
const division = age / 2;
const remainder = age % 2;
console.log({ greeting, myName, age, oldEnoughForBeer, division, remainder });

// preparing for looping

const fruit = ["perekisi", "dinamune", "ditsuru", "mango", "guava"];

console.log(fruit);
console.log(fruit[0]);
console.log(fruit[2]);
console.log(fruit.length);
console.log(fruit[fruit.length - 1]);

const calories = [100.5, 220.2, -20, 400.75, 300];

let index = 0;

while (index < fruit.length) {
  console.log(index, fruit[index]);
  index = index + 1;
}

console.log("The index is at: ", index);
console.log(calories);

calories.forEach((calorie, calorieIndex) => {
  // notice index here does not refer to index in line 11
  console.log(index, calorie, fruit[calorieIndex]);
  fruit.forEach((fruitItem, fruitIndex) => {
    console.log("\t", fruitIndex, fruitItem);
  });
});
// console.log("And the last calorie is:", calorie);
console.log("The index is at: ", index);
