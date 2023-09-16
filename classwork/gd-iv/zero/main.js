const ball = document.querySelector('main span');

document.addEventListener('click', (ev) => {
    ball.style.left = `${ev.clientX - 25}px`;
    ball.style.top = `${ev.clientY - 25}px`;
});
