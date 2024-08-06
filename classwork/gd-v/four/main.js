window.addEventListener('load', () => {
    const square = document.querySelector('.square');
    const ball = document.querySelector('.ball');

    const detect = (mutationsList, observer) => {
        for (const mutation of mutationsList) {
            if (mutation.type === 'attributes') {
                const left = ball.style.left;
                const top = ball.style.top;
                // console.log(`Left: ${left}, Top: ${top}`);
                checkContainment();
            }
        }
    };

    const checkContainment = () => {
        const squareRect = square.getBoundingClientRect();
        const ballRect = ball.getBoundingClientRect();

        if (ballRect.left >= squareRect.left && ballRect.top >= squareRect.top && ballRect.right <= squareRect.right && ballRect.bottom <= squareRect.bottom) {
            console.log('Ball is inside the square');
        } else {
            //   console.log('Ball is outside the square');
        }
    };

    const observer = new MutationObserver(detect);
    observer.observe(ball, { attributes: true, attributeFilter: ['style'] });

    const move = () => {
        // square.style.left = `${Math.random() * (window.innerWidth - square.offsetWidth)}px`;
        // square.style.top = `${Math.random() * (window.innerHeight - square.offsetHeight)}px`;
        ball.style.left = `${Math.random() * (window.innerWidth - ball.offsetWidth)}px`;
        ball.style.top = `${Math.random() * (window.innerHeight - ball.offsetHeight)}px`;
        requestAnimationFrame(move);
    };
    move();
    // const movementInterval = setInterval(move, 1000);
});
