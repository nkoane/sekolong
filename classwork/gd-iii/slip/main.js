/*
* this captures the keydown event and logs the key that was pressed
document.addEventListener('keydown', function (event) {
    console.log(event.key);
});
*/

const page = Math.round(Math.random() * 50);
const url = `https://picsum.photos/v2/list?limit=5&page=${page}`;

const response = await fetch(url);

if (response.status == 200) {
    const photos = await response.json();
    const davids = Array.from(document.getElementsByClassName('photo'));

    photos.forEach(function (photo, index) {
        // this prevents creating more davids than photos
        if (index < davids.length) {
            davids[index].innerHTML = photos[index].author;
            davids[index].style.backgroundImage = `url('${photo.download_url}')`;
        }
    });
} else {
    console.log(`failed to load url, code: ${response.status}, message: ${response.statusText}`);
}
