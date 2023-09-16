setInterval(function () {
    const hours = document.querySelector('div.hours span');
    const mins = document.querySelector('div.minutes span');

    const secs = document.querySelector('div.seconds span');

    hours.innerHTML = new Date().getHours();
    mins.innerHTML = new Date().getMinutes();

    const seconds = new Date().getSeconds();
    if (seconds < 10) {
        secs.innerHTML = '0' + seconds;
    } else {
        secs.innerHTML = seconds;
    }
    //secs.innerHTML = new Date().getSeconds();
}, 1000);
