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
    if (stopwatch == false) {
        sec = 0;
        min = 0;
        hours = 0;
        ms = 0;
        time = setInterval(cycle,10);
        document.getElementById('start').disabled = true;
        document.getElementById('stop').disabled = false;
        stopwatch = true;
    } else {
        time = setInterval(cycle,10);
        document.getElementById('start').disabled = true;
        document.getElementById('stop').disabled = false;
        stopwatch = true;
    }
}

function stop() {
    clearInterval(time)
    document.getElementById('stop').disabled = true;
    document.getElementById('start').disabled = false;
}

function reset() {
    sec = 0;
    min = 0;
    hours = 0;
    ms = 0;    
    clearInterval(time)
    htmlhour.innerHTML = hours + " h"
    htmlmin.innerHTML = min + " min"
    htmlsec.innerHTML = sec + " s";
    htmlms.innerHTML = ms + " ms";
    document.getElementById('stop').disabled = false;
    document.getElementById('start').disabled = false;
    stopwatch = false;
}

function loop() {
    chronoclass = document.querySelector('.chrono');
    el = document.createElement('li');
    el.textContent = hours+ ":" + min + ":" + sec + ":" + ms;
    chronoclass.appendChild(el)
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
    if (ms < 10) {
        htmlms.innerHTML = ms + "0 ms";
    }
}