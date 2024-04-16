const hero = document.getElementById('hero');
const foto = document.getElementById('foto');
const main = document.getElementById('app');

hero.addEventListener('click', async () => {
  foto.classList.toggle('hide');

  const pages = 10;
  const page = Math.floor(Math.random() * pages);
  const photos_url = `https://picsum.photos/v2/list?limit=100&page=${page}`;

  const response = await fetch(photos_url);

  if (response.status === 200) {

    const photos = await response.json();
    const photo = photos[Math.round(Math.random() * photos.length) - 1];

    const windowHeight = main.getBoundingClientRect().height;
    const windowWidth = main.getBoundingClientRect().width;
    //
    const width = Math.max(320, Math.round(Math.random() * windowWidth));
    const height = Math.max(320, Math.round(Math.random() * windowHeight));
   
    //
    const photo_url = `https://picsum.photos/id/${photo.id}/${width}/${height}.jpg`;

    console.log(photo, photo_url, width, height);

    const img = new Image();

    img.onload = () => {
      foto.src = img.src;
      hero.style.width = `${width}px`;
      hero.style.height = `${height}px`;

      foto.classList.toggle('hide');
    }

    img.onerror = (error) => {
      console.log('failed to load image, try again.', error);
    }

    img.src = photo_url;

  }
})
