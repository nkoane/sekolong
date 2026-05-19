/*
const h1 = document.querySelector("h1");
const theirName = prompt("What is your name?");
let message = "Hello, You!";
if (theirName === null) {
    message = "Hello, Nobody!";
} else if (theirName.trim() === "") {
    message = "Hello, John Doe!";
} else {
    message = `Hello, ${theirName}!`;
}
h1.textContent = message;
*/

document.addEventListener("DOMContentLoaded", (event) => {
    console.log("DOM fully loaded and parsed", event);
    const button = document.querySelector("button#toggle");
    button.addEventListener("click", () => {
        const body = document.querySelector("body");
        body.classList.toggle("dark");
    });
});


