/*(function() {
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
})();*/

function setClock() {
    // Get the local time using JS
    var date = new Date();
    var seconds = date.getSeconds();
    var minutes = date.getMinutes();
    var hours = date.getHours();

    console.log(seconds);
    console.log(minutes);
    console.log(hours);

    // Create an object with each hand and it's angle in degrees
    var hands = [
      {
        hand: 'hours',
        angle: (hours * 30) + (minutes / 2)
      },
      {
        hand: 'minutes',
        angle: (minutes * 6)
      },
      {
        hand: 'seconds',
        angle: (seconds * 6)
      }
    ];

    // Loop through each of these hands to set their angle
    for (var j = 0; j < hands.length; j++) {
      var elements = document.querySelectorAll('.' + hands[j].hand);
      for (var k = 0; k < elements.length; k++) {
          elements[k].style.webkitTransform = 'rotateZ('+ hands[j].angle +'deg)';
          elements[k].style.transform = 'rotateZ('+ hands[j].angle +'deg)';
          // If this is a minute hand, note the seconds position (to calculate minute position later)
          if (hands[j].hand === 'minutes') {
            elements[k].parentNode.setAttribute('data-second-angle', hands[j + 1].angle);
            elements[k].parentNode.setAttribute('data-seconds-passed', seconds);
          }
      }
    }
}

// Set a timeout for the first minute hand movement (less than 1 minute), then rotate it every minute after that 
function setUpMinuteHands() {
    // Find out how far into the minute we are
    var containers = document.querySelectorAll('.minutes-container');
    // var secondAngle = containers[0].getAttribute('data-second-angle');
    var secondsPassed = containers[0].getAttribute('data-seconds-passed');
    console.log(secondsPassed);
      // Set a timeout until the end of the current minute, to move the hand
      // var delay = (((360 - secondAngle) / 6) + 0.1) * 1000;
      var delay = (60 - secondsPassed) * 1000;
      console.log(delay);
      setTimeout(function() {
        moveMinuteHands(containers);
      }, delay);
}

// Do the first minute's rotation
function moveMinuteHands(containers) {
    for (var i = 0; i < containers.length; i++) {
        containers[i].style.webkitTransform = 'rotateZ(6deg)';
        containers[i].style.transform = 'rotateZ(6deg)';
    }
    /*setInterval(function() {
        var fullMinute = new Date().getSeconds();
        console.log(fullMinute);
        if (fullMinute == 0) {
            for (var i = 0; i < containers.length; i++) {
                if (containers[i].angle === undefined) {
                    containers[i].angle = 6;
                } else {
                    if (containers[i].angle > 360) {
                        containers[i].angle = 0;
                    }
                }
            containers[i].style.webkitTransform = 'rotateZ('+ containers[i].angle +'deg)';
            containers[i].style.transform = 'rotateZ('+ containers[i].angle +'deg)';
            }
        }
    }, 1000);*/
    // Then continue with a 60 second interval
    setInterval(function() {
        for (var i = 0; i < containers.length; i++) {
            if (containers[i].angle === undefined) {
                containers[i].angle = 6;
            } else {
                if (containers[i].angle > 360) {
                    containers[i].angle = 0;
                }
            }
        containers[i].style.webkitTransform = 'rotateZ('+ containers[i].angle +'deg)';
        containers[i].style.transform = 'rotateZ('+ containers[i].angle +'deg)';
        }
    }, 60000);
}


  // Move the second containers
function moveSecondHands() {
    var containers = document.querySelectorAll('.seconds-container');
    // var startingPoint = document.querySelectorAll('.minutes-container');
    // var startingAngle = startingPoint[0].getAttribute('data-second-angle');
    setInterval(function() {
      for (var i = 0; i < containers.length; i++) {
        if (containers[i].angle === undefined) {
          containers[i].angle = 6;
        } else {
            if (containers[i].angle > 360) {
                containers[i].angle = 0;
            }
        }
        containers[i].style.webkitTransform = 'rotateZ('+ containers[i].angle +'deg)';
        containers[i].style.transform = 'rotateZ('+ containers[i].angle +'deg)';
      }
    }, 1000);
}