document.addEventListener('DOMContentLoaded', () => {
    const ball = document.querySelector('div#ball');
    if (ball !== null) {
        ball.classList.add('loaded');
        document.addEventListener('click', (ev) => {
            console.log(ev);
            ball.style.top = `${ev.clientY}px`;
            ball.style.left = `${ev.clientX}px`;
        })
    }
});