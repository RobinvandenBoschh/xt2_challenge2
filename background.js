function updateTime() {
    var time = new Date();
    var daytime = time.getHours();
    var morning = time.getHours(6);
}

 // How to change background on time (in steps):
 // 1. Get current time (with .getTime()).
 // 2. Calculate remaining time to the next part of the day.
 // 3. Start function to change background.
 // 4. Set a delay with the remaining time on that function.

setInterval(updateTime(),1000);