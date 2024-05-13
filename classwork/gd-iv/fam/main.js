window.addEventListener('load', () => {
    document.addEventListener('mousemove', (ev) => {
        const box = document.getElementById('box');

        const mousePos = {
            x: ev.clientX,
            y: ev.clientY,
        };

        box.style.left = `${mousePos.x - 50}px`;
        box.style.top = `${mousePos.y - 50}px`;
    });
});
