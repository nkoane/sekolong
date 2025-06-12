document.addEventListener('DOMContentLoaded', () => {
  const slideshow = document.querySelector('main ol');
  document.addEventListener('keyup', (event) => {
    console.log(`Key pressed: ${event.key}`);
    if (event.code === 'Space') {
      slideshow.appendChild(slideshow.firstElementChild);
    }
  });
});
