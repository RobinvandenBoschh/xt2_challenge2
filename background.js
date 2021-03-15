function updateTime() {
    var time = new Date();
    var daytime = time.getHours();
}

setInterval(updateTime(),1000);