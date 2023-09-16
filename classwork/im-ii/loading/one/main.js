let progress = 0;
const loader = document.querySelector('.loader');

let areWeOff = false;

const ticker = setInterval(function () {
    if (progress <= 100) {
        progress = progress + Math.round(Math.random() * 10);
        loader.style.width = progress + '%';
        loader.style.width = progress + '%';

        if (areWeOff == true) {
            loader.style.height = '1%';
        } else {
            loader.style.height = '1.2%';
        }

        areWeOff = !areWeOff;
        //
    } else {
        loader.style.height = '100%';
        clearInterval(ticker);
    }
    //console.log(Math.random());
}, 125);

// toggle the class darkness on the tag body
const root = document.querySelector('body');

root.addEventListener('click', function (event) {
    root.classList.toggle('darkness');

    const ball = document.querySelector('.ball');
    const x = event.offsetX - 50;
    const y = event.offsetY - 50;

    ball.style.left = x + 'px';
    ball.style.top = x + 'px';

    console.log(y, ball.style.top);
});
