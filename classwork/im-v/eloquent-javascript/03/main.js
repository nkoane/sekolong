// getting the screen width and height of the user's device
const screenWidth = window.innerWidth;
const screenHeight = window.innerHeight;

// getting the handle on the div with class of box 
const box = document.querySelector('div.box');

// getting the width and height of the box element
const boxWidth = box.offsetWidth;
const boxHeight = box.offsetHeight;

// calculate the top and left values to center the box in the screen
const leftPosition = screenWidth / 2 - boxWidth / 2;
const topPosition = (screenHeight - boxHeight) / 2;

// moving the box to the center
box.style.left = leftPosition + 'px';
box.style.top = `${topPosition}px`;

// we will be changing the greeting based on what time of day it is
const now = new Date();
const hours = now.getHours();

let greeting;

if (hours >= 0 && hours < 12) { // check if is morning
    greeting = "GM";
} else if (hours >= 12 && hours < 18) { // check if is afternoon
    greeting = "GA";
} else {
    document.body.classList.toggle('dark');
    greeting = "GE"
}
// every second update the box emlement with the current time
setInterval(() => {
    const now = new Date();
    box.innerHTML = `${greeting}/ ${now.getHours()}:${now.getMinutes()}:${now.getSeconds().toString().padStart(2, '0')}`;
}, 1000);








