const timer = document.querySelector('main div span');
let counter = 9;

/*
const password = prompt('Enter your password');
const username = 'lebogang.nkoane@gmail.com';

if (password == 'thebe' && username == 'lebogang.nkoane@gmail.com') {
    alert('hello');
} else {
    alert('wrong password');
}
*/

const intervalStorage = setInterval(() => {
    timer.classList.add('pulse');

    if (counter >= 0) {
        timer.innerHTML = counter;
    } else {
        clearInterval(intervalStorage);
        timer.classList.remove('pulse');
        document.querySelector('main div').classList.add('done');
    }
    counter = counter - 1;
}, 1000);
