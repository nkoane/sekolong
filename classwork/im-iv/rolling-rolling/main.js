window.addEventListener('scroll', (e) => {
    const scroll = window.scrollY;
    const scrollPercentage = ((scroll / (document.body.scrollHeight - window.innerHeight)) * 100).toFixed(2);
    const scrollDegree = ((scroll / (document.body.scrollHeight - window.innerHeight)) * 360).toFixed(2);
    console.log(scroll, scrollPercentage, scrollDegree);
    // add scrollPercentage to css variable --scroll
    document.documentElement.style.setProperty('--scroll-percentage', scrollPercentage + '%');
    document.documentElement.style.setProperty('--scroll-degree', scrollDegree + 'deg');
});
