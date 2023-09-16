/**
 * generating a random page number
 */
const page = Math.round(Math.random() * 100);

/**
 * adding that page number to picsum api url
 */
const url = 'https://picsum.photos/v2/list?limit=5&page=' + page;

/**
 * fetching the data from the api
 */
const response = await fetch(url);

/**
 * converting the response to json
 */
const photos = await response.json();

/**
 * looping through the photos and adding them to the div.block elements
 */
photos.forEach((photo, index) => {
    /**
     * getting the block element based on the index
     */
    const block = document.getElementsByClassName('block')[index];

    /**
     * adding the author name and the background image to the block element
     */
    block.innerHTML = photo.author;
    block.style.backgroundImage = `url(${photo.download_url})`;
});
