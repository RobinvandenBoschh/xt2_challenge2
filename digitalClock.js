var updateDigital = setInterval(function() {
    var timeNow = new Date();
    var nowHours = addLeadingZero(timeNow.getHours());
    var nowMinutes = addLeadingZero(timeNow.getMinutes());
    var nowSeconds = addLeadingZero(timeNow.getSeconds());

    document.getElementById('digitalClock').innerHTML = nowHours + ":" + nowMinutes + ":" + nowSeconds;
}, 1000);


function addLeadingZero(number){
    if (number < 10) {
        return '0' + number;
    }
    return number;
}