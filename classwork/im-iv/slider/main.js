const slider = document.querySelector('section');

document.getElementById('next').onclick = () => {
    const item = document.querySelector('section div:first-child');
    slider.append(item);
};
document.getElementById('previous').onclick = () => {
    const item = document.querySelector('section div:last-child');
    slider.prepend(item);
};

document.addEventListener('keyup', (e) => {
    if (e.key === 'ArrowRight') {
        const item = document.querySelector('section div:first-child');
        slider.append(item);
    }

    if (e.key === 'ArrowLeft') {
        const item = document.querySelector('section div:last-child');
        slider.prepend(item);
    }
});
