(function() {
    // Initialise any local time clocks
    setClock();
    // Start the seconds container moving
    moveSecondHands();
    // Set the intial minute hand container transition, and then each subsequent step
    setUpMinuteHands();
})();



(function createSecondLines(){
    var clock = document.querySelector('.clock');
    var rotate = 0;
    
    var byFive = function(n) {
        return (n / 5 === parseInt(n / 5, 10)) ? true : false;
    };
    for (h=0; h < 30; h++) {
        var span = document.createElement('span');
        if (byFive(h)) {
            span.className = 'fives';
        }
        span.style.transform = 'translate(-50%,-50%) rotate('+ rotate + 'deg)';
        clock.appendChild(span);
        rotate += 6;
    }
})();