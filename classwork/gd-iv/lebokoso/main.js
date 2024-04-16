
const hero = document.querySelector('main section');
const foto = document.querySelector('main section img');
let areWeLoadingTheImage = false;

hero.addEventListener('click', function() {
  if (areWeLoadingTheImage === false) {
    areWeLoadingTheImage = true;


    foto.classList.add('hide');

    let random = Math.round(Math.random() * 100000);

    let url = `https://picsum.photos/seed/${random}/1000/600`;

    const img = new Image();

    const done= (allGood = true) => {
      areWeLoadingTheImage = false;
      foto.classList.remove('hide');

      if (allGood === false) {
        console.log('failed to load the image');
      }
    }

    img.onload = () => {
      foto.src = url;
      done();
    }

    img.onerror = (error) => {
      console.error('failed to load the image', error);
      done(false);
    }

    img.src = url;
  } else {
    // flash a red colour
    alert('the fotograf is still being loaded.')
  }
});
