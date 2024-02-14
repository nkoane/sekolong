const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenSections = document.querySelectorAll('.hidden');

// Observe each section
/*
    this code will observe each section and log the entry object to the console
    when the section is intersecting the viewport
*/
hiddenSections.forEach((section) => observer.observe(section));
