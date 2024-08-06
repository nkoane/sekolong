document.addEventListener('DOMContentLoaded', () => {
    const ball = document.querySelector('.ball');
    const squares = document.querySelector('.square');
    document.addEventListener('mousemove', (e) => {
        const { clientX, clientY } = e;
        ball.style.left = `${clientX - ball.getBoundingClientRect().width / 2}px`;
        ball.style.top = `${clientY - ball.getBoundingClientRect().height / 2}px`;
    });
    // on click encrease the size of the ball;
    document.addEventListener('click', () => {
        const randomColor = Math.floor(Math.random() * 16777215).toString(16);
        ball.style.backgroundColor = `#${randomColor}`;
        const randomWidth = Math.floor((Math.random() * window.innerWidth) / 2);
        ball.style.width = `${randomWidth}px`;
    });

    // randomly move the ball on screen to a random position using window animation timing
    const randomPosition = () => {
        const randomX = Math.floor(Math.random() * window.innerWidth);
        const randomY = Math.floor(Math.random() * window.innerHeight);
        ball.style.left = `${randomX}px`;
        ball.style.top = `${randomY}px`;
    };
    const randomInterval = setInterval(randomPosition, 1500);

    // stop the movement of the ball when click on the document
    ball.addEventListener('click', () => {
        console.log('The ball has been clicked', randomInterval);
        clearInterval(randomInterval);
    });
});
