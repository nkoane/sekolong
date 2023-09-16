const timer = document.querySelector('main#timer span');

// console.log(timer);
let counter = 10; // Math.round(Math.random() * 1000);

console.log(counter);

timer.innerHTML = counter;
/*
// counts up to 10
for (let index = 0; index < 10; index = index + 1) {
    // print out index
    console.log(index);
}

// counts down from 10
for (let yindex = 10; yindex > 0; yindex = yindex - 1) {
    // print out yindex
    console.log(yindex);
}
*/

// add an animation name to an html element

// counter counting down
const counterInterval = setInterval(function () {
    //
    if (counter >= 0) {
        if (timer.parentElement.classList.contains('animate') === false) timer.parentElement.classList.add('animate');
        timer.innerHTML = counter > 0 && counter < 10 ? '0' + counter : counter;
        counter--; // similar to counter = counter - 1
    } else {
        timer.parentElement.classList.remove('animate');
        clearInterval(counterInterval);
        console.log(counter);
    }
}, 1000);

setInterval(() => {
    //
}, 1000);

const cities = ['Johannesburg', 'Cape Town', 'Durban', 'Bloemfontein', 'Port Elizabeth', 'East London', 'Pretoria'];
const towns = [
    'Middelburg',
    'Standerton',
    'Secunda',
    'Nelspruit',
    'Polokwane',
    'Kimberley',
    'Upington',
    'Klerksdorp',
    'Potchefstroom',
    'Rustenburg',
    'Vryheid',
    'Pietermaritzburg',
    'Umtata',
    'East London',
    'Port Elizabeth',
    'Pretoria',
    'Bloemfontein',
    'Durban',
    'Cape Town',
    'Johannesburg',
];

const names = ['Lerato', 'Dineo', 'Dimakatso', 'Thembi', 'Ntombi', 'Jabu'];

const surnames = ['Mokoena', 'Molefe', 'Mabaso'];

names.forEach((name) => {
    console.log(name);
});
