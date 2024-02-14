window.addEventListener('load', () => {
    const thumbs = document.querySelectorAll('#thumbnail-navigation a');

    const arrows = document.querySelectorAll('#arrow-navigation a');

    // if no target set current target to first thumb
    if (!window.location.hash) {
        window.location.hash = thumbs[0].hash;
    }

    function findSelectedThumb() {
        let selectedIndex = undefined;
        thumbs.forEach((thumb, i) => {
            if (thumb.hash === window.location.hash) {
                selectedIndex = i;
            }
        });
        return selectedIndex;
    }

    let selectedThumb = findSelectedThumb();

    arrows.forEach((arrow, i) => {
        arrow.addEventListener('click', (e) => {
            selectedThumb = findSelectedThumb();
            e.preventDefault();
            if (i === 0) {
                selectedThumb = (selectedThumb - 1 + thumbs.length) % thumbs.length;
            } else {
                selectedThumb = (selectedThumb + 1) % thumbs.length;
            }
            window.location.hash = thumbs[selectedThumb].hash;
        });
    });
});
