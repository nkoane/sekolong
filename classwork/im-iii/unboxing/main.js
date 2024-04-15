const hero = document.getElementById('hero');
const foto = document.getElementById('foto');

hero.addEventListener('click', async function () {
    foto.classList.add('hide');

    const randomNumber = Math.round(Math.random() * 993);

    const imageURL = `https://picsum.photos/v2/list?page=${randomNumber}&limit=1`;

    const response = await fetch(imageURL);
    const fotos = await response.json();

    foto.classList.remove('hide');

    foto.src = `https://picsum.photos/id/${fotos[0].id}/1000/600`;
});
