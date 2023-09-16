let minutes = 0;
let seconds = 0;
let milli = 0;

const milliTag = document.getElementById('milli');
const secondsTag = document.getElementById('seconds');
const minutesTag = document.getElementById('minutes');

let isWeRunning = false;

setInterval(function () {
    if (isWeRunning === true) {
        // this is the same as milli = milli + 1
        milli++;

        milliTag.innerHTML = milli < 10 ? '0' + milli : milli;
        secondsTag.innerHTML = seconds < 10 ? '0' + seconds : seconds;
        minutesTag.innerHTML = minutes < 10 ? '0' + minutes : minutes;

        if (milli == 99) {
            milli = 0;
            seconds++;
            if (seconds == 59) {
                seconds = 0;
                minutes = minutes + 1;
            }
        }
    }
    // console.log(minutes, seconds, milli);
}, 10);

document.getElementById('control').addEventListener('click', function () {
    isWeRunning = !isWeRunning;
    document.getElementById('control').innerHTML = isWeRunning ? 'Stop' : 'Start';
});

document.getElementById('reset').addEventListener('click', function () {
    minutes = 0;
    seconds = 0;
    milli = 0;
    isWeRunning = false;
    milliTag.innerHTML = '00';
    secondsTag.innerHTML = '00';
    minutesTag.innerHTML = '00';
});

/*
// counts from 0 to 9
for (index = 0; index < 10; index = index + 1) {
    console.log(index);
}

// counts from 10 to 1
for (index = 10; index > 0; index = index - 1) {
    console.log(index);
}
*/
