document.addEventListener('DOMContentLoaded', async () => {
  let randomNumber = Math.round(Math.random() * 100);
  let url = `https://picsum.photos/v2/list?page=${randomNumber}&limit=5`;
  const response = await fetch(url);

  if (response.ok === true) {
    const fotos = await response.json();
    const layers = document.querySelectorAll('main div');

    layers.forEach((layer, index) => {
      layer.style.backgroundImage = `url(${fotos[index].download_url})`;
      layer.querySelector('h1').innerHTML = fotos[index].author;
    });
  }
});
