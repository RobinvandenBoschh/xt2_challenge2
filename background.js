setInterval(function() {
    var time = new Date().getHours();
    var background = document.querySelectorAll('#backgroundContainer');

    if (time < 6 ) {
        // alert('night');
        if (background[0].classList.contains('morning')) {
            background[0].classList.replace('morning', 'night');
        }
        if (background[0].classList.contains('day')) {
            background[0].classList.replace('day', 'night');
        }
        if (background[0].classList.contains('evening')) {
            background[0].classList.replace('evening', 'night');
        }
    } else if(time < 12) {
        // alert('morning');
        if (background[0].classList.contains('day')) {
            background[0].classList.replace('day', 'morning');
        }
        if (background[0].classList.contains('evening')) {
            background[0].classList.replace('evening', 'morning');
        }
        if (background[0].classList.contains('night')) {
            background[0].classList.replace('night', 'morning');
        }
    } else if(time < 18) {
        // alert('day');
        if (background[0].classList.contains('morning')) {
            background[0].classList.replace('morning', 'day');
        }
        if (background[0].classList.contains('evening')) {
            background[0].classList.replace('evening', 'day');
        }
        if (background[0].classList.contains('night')) {
            background[0].classList.replace('night', 'day');
        }
    } else {
        // alert('evening ' + time);
        if (background[0].classList.contains('morning')) {
            background[0].classList.replace('morning', 'evening');
        }
        if (background[0].classList.contains('day')) {
            background[0].classList.replace('day', 'evening');
        }
        if (background[0].classList.contains('night')) {
            background[0].classList.replace('night', 'evening');
        }
    }
}, 1000);

 // How to change background on time (in steps):
 // 1. Get current time (with .getTime()).
 // 2. Calculate remaining time to the next part of the day.
 // 3. Start function to change background.
 // 4. Set a delay with the remaining time on that function.


