const secondsTicker = setInterval(() => {
    document.querySelector('span.seconds').innerHTML = new Date().getSeconds();
    document.querySelector('span.minutes').innerHTML = new Date().getMinutes();
    document.querySelector('span.hours').innerHTML = new Date().getHours();
    document.querySelector('span.minutes').setAttribute('style', 'opacity: ' + (1 - new Date().getSeconds() / 60));
}, 1000);
