console.log("these are my functions");

function today() {
  console.log(new Date());
}

today();
console.log(today());

function randomNumber() {
  return Math.random();
}
/*
this returns a value
but nothing handles
*/
const randy = randomNumber();
console.log(randy);
console.log(randy * 10);
console.log(Math.round(randy * 10));

function randomGenerator(max) {
  if (Number.isNaN(Number(max)) === true) {
    console.error(`max is not a number: ${max}`);
    return;
  }
  return Math.round(randomNumber() * max);
}
console.log(randomGenerator(10));
console.log(randomGenerator("four"));
console.log(randomGenerator("100"));
