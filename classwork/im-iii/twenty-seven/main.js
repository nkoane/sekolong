const hero = document.querySelector('#hero');
const foto = document.getElementById('foto');

let areWeLoadingAPhotograph = false;

hero.addEventListener('click', (ev) => {
    if (areWeLoadingAPhotograph === false) {
        foto.classList.add('hide');

        const randomNumber = Math.round(Math.random() * 10000);

        // const imageURL = 'https://picsum.photos/seed/' + randomNumber + '/1000/600';

        const imageURL = `https://picsum.photos/seed/${randomNumber}/1000/600`;

        foto.src = imageURL;
        areWeLoadingAPhotograph = true;

        console.log(randomNumber, 'We are loading the image?', new Date());

        foto.onload = () => {
            foto.classList.remove('hide');
            areWeLoadingAPhotograph = false;
            console.log(randomNumber, 'We are done loading the image', new Date());
        };
    }
});
