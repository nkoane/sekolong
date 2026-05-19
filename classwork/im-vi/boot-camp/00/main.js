const senepe = document.querySelector('main img');

document.addEventListener('DOMContentLoaded', () => {
    senepe.src = `https://picsum.photos/seed/magnificent-seven/1400/1400`;
})

senepe.addEventListener('click', () => {
    const numba = Math.round(100 + Math.random() * 1000);
    senepe.src = "images/spinner.gif";
    const url = `https://picsum.photos/seed/${numba}/1400/1400`;
    senepe.src = url;
})