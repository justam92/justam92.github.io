window.onload = function timer() {

    var clock = new Date();

    var hours = clock.getHours();
    if (hours < 10) hours = "0" + hours;

    var minutes = clock.getMinutes();
    if (minutes < 10) minutes = "0" + minutes;

    var seconds = clock.getSeconds();
    if (seconds < 10) seconds = "0" + seconds;

    document.getElementById("clock").innerHTML = +hours + ":" + minutes + ":" + seconds;

    setTimeout(timer, 1000);
}