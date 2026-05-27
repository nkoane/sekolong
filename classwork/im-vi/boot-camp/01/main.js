document.addEventListener('DOMContentLoaded', () => {
    const ball = document.querySelector('div#ball');

    document.addEventListener('mousemove', (eve) => {
        ball.style.left = `${eve.clientX - 25}px`;
        ball.style.top = `${eve.clientY - ball.getBoundingClientRect().height / 2}px`;
    })
    document.addEventListener('click', (eve) => {
        ball.classList.toggle('clicked');
        setTimeout(() => {
            ball.classList.remove('clicked');
        }, 500);
    });
});