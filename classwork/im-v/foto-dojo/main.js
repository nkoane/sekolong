document.addEventListener('DOMContentLoaded', async () => {
    const url = 'https://picsum.photos/v2/list?page=2&limit=100';

    const res = await fetch(url);
    const container = document.querySelector('main');
    const h1 = document.querySelector('main h1');
    const anchor = h1.querySelector('a');
    if (res.ok === true) {
        const data = await res.json();
        const randomNumber = Math.floor(Math.random() * data.length);
        const imgData = data[randomNumber];
        const setBackgroundImage = (dimensions) => {
            const backgroundUrl = `https://picsum.photos/id/${imgData.id}/${dimensions.width}/${dimensions.height}`;
            bgImage = new Image(dimensions.width, dimensions.height);
            bgImage.src = backgroundUrl;
            container.style.backgroundImage = `url(${backgroundUrl})`;
        }
        setBackgroundImage({
            width: Math.floor(container.getBoundingClientRect().width),
            height: Math.floor(container.getBoundingClientRect().height)
        });
        anchor.textContent = imgData.author.replace(/\s/g, `+`);
        anchor.href = imgData.url;
        anchor.alt = `#${imgData.id}: ${imgData.author}`;

        window.addEventListener('resize', () => {
            setBackgroundImage({
                width: Math.floor(container.getBoundingClientRect().width),
                height: Math.floor(container.getBoundingClientRect().height)
            });
        })
    } else {
        alert("Tsa'mo reka data!");
    }

})