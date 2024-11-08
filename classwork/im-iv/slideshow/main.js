document.addEventListener('DOMContentLoaded', () => {
    const section = document.querySelector('section');
    const slides = document.querySelectorAll('section div');
    // change hue of all the slides' background
    slides.forEach((slide, index) => {
        slide.style.background = `hsl(${index * 30}, 100%, 80%)`;
    });
    let movement = 0;
    const slideSection = async () => {
        let distance = 0;
        const animationInterval = setInterval(() => {
            if (distance <= 120) {
                section.style.transform = `translateX(${-distance}px)`;
                distance++;
            } else {
                clearInterval(animationInterval);
            }
        }, 10);
        console.log('slideSection', Date.now(), section.style.transform);
    };

    const move = async () => {
        // section.style.transform = `translateX(${-120}px)`;
        movement++;
        if (movement === slides.length) {
            movement = 0;
        }
        await slideSection();
        const first = section.firstElementChild;
        section.append(first);
    };

    setInterval(() => {
        move();
    }, 2000);
});
