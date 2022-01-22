let sec = parseInt(0);
let min = parseInt(0);
let hours = parseInt(0);
let ms = parseInt(0);
let htmlms = document.getElementById('ms');
let htmlsec = document.getElementById('sec');
let htmlmin = document.getElementById('min');
let htmlhour = document.getElementById('hour');
let stopwatch = false;



function start() {
    time = setInterval(cycle,10);
    document.getElementById('start').disabled = true;
    document.getElementById('stop').disabled = false;
    stopwatch = true;
}

function stop() {
    clearInterval(time)
    document.getElementById('stop').disabled = true;
    document.getElementById('start').disabled = false;
}

function reset() {
    clearInterval(time)
    let sec = 0;
    let min = 0;
    let hours = 0;
    let ms = 0;
    htmlhour.innerHTML = hours + " h"
    htmlmin.innerHTML = min + " min"
    htmlsec.innerHTML = sec + " s";
    htmlms.innerHTML = ms + " ms";
    document.getElementById('stop').disabled = false;
    document.getElementById('start').disabled = false;
}



function cycle() {
    ms = ms + 1;

    if (ms == 100) {
        sec = sec + 1;
        ms = 0;
    }

    if (sec == 60) {
        min = min + 1;
        sec = 0;
    }

    if (min == 60) {
        hours = hours + 1;
        min = 0;
    }

    if (min == 60) {
        hours = hours + 1;
        min = 0;
    }

    
    htmlhour.innerHTML = hours + " h"
    htmlmin.innerHTML = min + " min"
    htmlsec.innerHTML = sec + " s";
    htmlms.innerHTML = ms + " ms";
}