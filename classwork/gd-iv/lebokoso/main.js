const hero = document.querySelector('#hero');
const foto = document.getElementById('foto');

let areWeLoadingAPhotograph = false;

hero.addEventListener('click', () => {
    hero.classList.add('loading');

    if (areWeLoadingAPhotograph === false) {
        areWeLoadingAPhotograph = true;
        foto.classList.add('hide');

        const nomoro = Math.random() * 1000000;

        const fotoURL = `https://picsum.photos/seed/${nomoro}/1000/600`;

        foto.onload = () => {
            areWeLoadingAPhotograph = false;
            foto.classList.remove('hide');
            hero.classList.remove('loading');
        };

        foto.src = fotoURL;
    }
});
