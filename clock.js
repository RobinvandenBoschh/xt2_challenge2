function setClock() {
    // Get the local time using JS
    var date = new Date();
    var seconds = date.getSeconds();
    var minutes = date.getMinutes();
    var hours = date.getHours();

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
          }
      }
    }

    /*var clock = document.querySelector(".clock");
    var time = new Date();
    
    var hours = time.getHours();
    var minutes = time.getMinutes();
    var seconds = time.getSeconds();
    
    var clock = {
      hours: document.querySelector('.hours'),
      minutes: document.querySelector('.minutes'),
      seconds: document.querySelector('.seconds')
    };
    
    var deg = {
      hours: 30 * hours + .5 * minutes,
      minutes: 6 * minutes + .1 * seconds,
      seconds: 6 * seconds
    }
    
    clock.hours.style.transform = 'rotate(' + deg.hours + 'deg)';
    clock.minutes.style.transform = 'rotate(' + deg.minutes + 'deg)';
    clock.seconds.style.transform = 'rotate(' + deg.seconds + 'deg)';
    
    var runClock = function(){
      deg.hours += 360/43200;
      deg.minutes += 360/3600;
      deg.seconds += 360/60;
      
      clock.hours.style.transform = 'rotate(' + deg.hours + 'deg)';
      clock.minutes.style.transform = 'rotate(' + deg.minutes + 'deg)';
      clock.seconds.style.transform = 'rotate(' + deg.seconds + 'deg)';
    };
    
    setInterval(runClock,1000);
}*/

/*function setClock() {
    var time = new Date();
    
    var hours = time.getHours();
    var minutes = time.getMinutes();
    var seconds = time.getSeconds();
    
    var clock = {
      hours: document.querySelector('.hours'),
      minutes: document.querySelector('.minutes'),
      seconds: document.querySelector('.seconds')
    };
    
    var deg = {
      hours: 30 * hours + .5 * minutes,
      minutes: 6 * minutes + .1 * seconds,
      seconds: 6 * seconds
    }
    
    clock.hours.style.transform = 'rotate(' + deg.hours + 'deg)';
    clock.minutes.style.transform = 'rotate(' + deg.minutes + 'deg)';
    clock.seconds.style.transform = 'rotate(' + deg.seconds + 'deg)';
    
    var runClock = function(){
      deg.hours += 360/43200;
      deg.minutes += 360/3600;
      deg.seconds += 360/60;
      
      clock.hours.style.transform = 'rotate(' + deg.hours + 'deg)';
      clock.minutes.style.transform = 'rotate(' + deg.minutes + 'deg)';
      clock.seconds.style.transform = 'rotate(' + deg.seconds + 'deg)';
    };
    
    setInterval(runClock,1000);
    
    (function printDate(){
      var months = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
      var print = time.getDate() + ' / ' + months[time.getMonth()];
      var output = document.querySelectorAll('output');
      
      [].forEach.call(output, function(node){
        node.innerHTML = print;
      });
    })();
  
}*/

// Set a timeout for the first minute hand movement (less than 1 minute), then rotate it every minute after that 
function setUpMinuteHands() {
    // Find out how far into the minute we are
    var containers = document.querySelectorAll('.minutes-container');
    var secondAngle = containers[0].getAttribute("data-second-angle");
    if (secondAngle > 0) {
      // Set a timeout until the end of the current minute, to move the hand
      var delay = (((360 - secondAngle) / 6) + 0.1) * 1000;
      setTimeout(function() {
        moveMinuteHands(containers);
      }, delay);
    }
}
  
  // Do the first minute's rotation
  function moveMinuteHands(containers) {
    for (var i = 0; i < containers.length; i++) {
      containers[i].style.webkitTransform = 'rotateZ(6deg)';
      containers[i].style.transform = 'rotateZ(6deg)';
    }
    // Then continue with a 60 second interval
    setInterval(function() {
      for (var i = 0; i < containers.length; i++) {
        if (containers[i].angle === undefined) {
          containers[i].angle = 12;
        } else {
          containers[i].angle += 6;
        }
        containers[i].style.webkitTransform = 'rotateZ('+ containers[i].angle +'deg)';
        containers[i].style.transform = 'rotateZ('+ containers[i].angle +'deg)';
      }
    }, 60000);
}

  // Move the second containers
function moveSecondHands() {
    var containers = document.querySelectorAll('.seconds-container');
    setInterval(function() {
      for (var i = 0; i < containers.length; i++) {
        if (containers[i].angle === undefined) {
          containers[i].angle = 6;
        } else {
          containers[i].angle += 6;
        }
        containers[i].style.webkitTransform = 'rotateZ('+ containers[i].angle +'deg)';
        containers[i].style.transform = 'rotateZ('+ containers[i].angle +'deg)';
      }
    }, 1000);
}

/*var startClock = function() {
    // Initialise any local time clocks
    //initLocalClocks();
    setClock();
    // Start the seconds container moving
    moveSecondHands();
    // Set the intial minute hand container transition, and then each subsequent step
    setUpMinuteHands();
};*/