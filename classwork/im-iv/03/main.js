document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('nav a');
    Array.from(links).forEach((link, index) => {
        link.addEventListener('click', () => {
            Array.from(links).forEach((a) => a.classList.remove('selected'));
            link.classList.add('selected');
        });
    });

    document.addEventListener('scroll', () => {});

    let trackIndex = 0;
    document.addEventListener('keyup', (event) => {
        console.log(event.key);
        if (event.key === 'ArrowLeft') {
            trackIndex++;
            window.location.href = links[trackIndex].href;
        } else if (event.key === 'ArrowRight') {
            trackIndex--;
            window.location.href = links[trackIndex].href;
        }
    });
});
