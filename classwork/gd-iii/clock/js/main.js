setInterval(function () {
    document.getElementById('seconds').innerHTML = new Date().getSeconds();
    document.getElementById('minutes').innerHTML = new Date().getMinutes();
    document.getElementById('hours').innerHTML = new Date().getHours();

    const seconds = new Date().getSeconds();

    const percentage = 100 - Math.round((seconds / 60) * 100);
    //document.getElementById('seconds').style.left = percentage + 'vh';
}, 1000);
