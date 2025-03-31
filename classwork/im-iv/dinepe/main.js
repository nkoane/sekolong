import { exchange } from './utils.js';

const figure = document.querySelector('figure');

function randomMizer() {
  const randomNumber = Math.floor(Math.random() * 300);
  const url = `https://picsum.photos/id/${randomNumber}/info`;

  figure.querySelector('img').classList.add('hide');
  figure.classList.add('loading');
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      /* the response data is in this format:
    {
      "id": 0,
      "author": "Alejandro Escamilla",
      "width": 5616,
      "height": 3744,
      "url": "https://unsplash.com/photos/yC-Yzbqy7PY",
      "download_url": "https://picsum.photos/id/0/5616/3744"
    }
    */
      exchange(figure, data.download_url, data.author);
    });
}

figure.addEventListener('click', randomMizer);
