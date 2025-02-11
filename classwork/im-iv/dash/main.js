const slideShow = document.querySelector('ol');
const next = document.querySelector('a#next');
const previous = document.querySelector('a#previous');

next.onclick = () => {
  const slides = document.querySelectorAll('ol li');
  slideShow.appendChild(slides[0]);
};

previous.onclick = () => {
  const slides = document.querySelectorAll('ol li');
  slideShow.prepend(slides[slides.length - 1]);
};
