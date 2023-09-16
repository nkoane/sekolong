let tar = document.getElementById('tar');
let bar = document.getElementById('bar');

const then = new Date('14 March 2023');
const future = new Date('18:04 14 March 2023');

let clicked = false;

tar.addEventListener('click', function () {
    if (clicked == true) {
        clicked = false;
    } else {
        clicked = true;
    }

    let start = null;

    tar.classList.toggle('dark');

    const clockInterval = setInterval(function () {
        const now = new Date();
        tar.innerHTML = now.toLocaleDateString() + ' ' + now.toLocaleTimeString();

        let timer = Math.abs(Math.round((future - now) / 1000));

        if (timer > 0) {
            tar.innerText = timer;

            if (start === null) {
                start = timer;
            }

            const percentage = ((start - timer) / start) * 100;
            bar.style.setProperty('width', `${percentage}%`);
        }
    }, 1000);
});

/*
    1730
*/
