document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');

    window.addEventListener('scroll', (e) => {
        const scroll = window.scrollY;
        const scrollHeightDiff = document.body.scrollHeight - window.innerHeight;
        const scrollPercentage = ((scroll / scrollHeightDiff) * 100).toFixed(2);
        const scrollDegree = ((scroll / scrollHeightDiff) * 360).toFixed(2);
        console.log(scroll, scrollPercentage, scrollDegree);
        // add scrollPercentage to css variable --scroll
        document.documentElement.style.setProperty('--scroll-percentage', scrollPercentage + '%');
        document.documentElement.style.setProperty('--scroll-degree', scrollDegree + 'deg');
        // animate all the sections into view
        sections.forEach((section) => {
        requestAnimationFrame(() => {
            sections.forEach((section) => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;
                const isSectionInView = scroll > sectionTop - sectionHeight / 2;
                if (isSectionInView) {
                    section.classList.add('active');
                } else {
                    section.classList.remove('active');
                }
            });
        });
});
