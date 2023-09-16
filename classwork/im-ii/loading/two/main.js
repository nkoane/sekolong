const root = document.querySelector('body');
const wrap = document.querySelector('#wrap');

root.addEventListener('click', function (event) {
    const balls = Array.from(document.getElementsByClassName('ball'));

    balls.forEach((ball, index) => {
        if (index % 2 == 0) ball.style.left = `${event.clientX - 50}px`;
        if (index % 3 == 0) ball.style.top = `${event.clientY - 50}px`;
    });

    root.classList.remove('redness');
    root.classList.toggle('darkness');
});

// on window load
window.addEventListener('load', function () {
    for (let i = 0; i < 100; i++) {
        const ball = document.createElement('div');
        ball.classList.add('ball');
        wrap.appendChild(ball);
    }

    const balls = Array.from(document.getElementsByClassName('ball'));
    let progress = 0;
    const number = document.querySelector('.number');

    const ticker = setInterval(() => {
        // check if a ball has touched the edge of the screen

        balls.forEach((ball) => {
            const x = Math.floor(Math.random() * window.innerWidth);
            const y = Math.floor(Math.random() * window.innerHeight);
            ball.style.left = `${x - 50}px`;
            ball.style.top = `${y - 50}px`;

            ball.style.width = `${Math.floor(Math.random() * 100)}px`;

            ball.style.backgroundColor = `rgb(255, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.random()})`;
        });

        if (progress >= 100) {
            clearInterval(ticker);
            root.classList.add('whiteness');
            balls.forEach((ball) => {
                ball.style.display = 'none';
            });
            number.innerHTML = `READY`;
        } else {
            progress = Math.round(progress + Math.random()); // + Math.floor(Math.random() * 10);
            //  number.style.scale = `${progress}`;
            number.innerHTML = `${progress}`;

            // remove one ball from the dom
            if (balls[progress] && balls[progress].parentNode === wrap) {
                wrap.removeChild(balls[progress]);
            }

            console.log(progress, wrap.children.length);
            //balls[0].remove();
        }
    }, 1000);
});
