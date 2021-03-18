(function() {
    setClock();
    moveSecondHands();
    moveMinuteHands();
})();                                                                                             // Start de functies die hieronder staan geschreven, zodat de klok op de juiste positie start en daarna gaat lopen.


(function createSecondLines(){                                                                    // Deze functie zorgt voor de streepjes op de klok. Het was gemakkelijker om ze te laten berekenen en ze automatisch op de juiste positie te laten zetten.
    var clock = document.querySelector('.clock');
    var rotate = 0;
    
    var byFive = function(n) {
        return (n / 5 === parseInt(n / 5, 10)) ? true : false;
    };
    for (h = 0; h < 30; h++) {
        var span = document.createElement('span');
        if (byFive(h)) {
            span.className = 'fives';
        }
        span.style.transform = 'translate(-50%,-50%) rotate(' + rotate + 'deg)';
        clock.appendChild(span);
        rotate += 6;
    }
})();

function setClock() {
    var date = new Date();                                                                        // De nieuwe variabele date wordt de huidige tijd
    var seconds = date.getSeconds();                                                              // De nieuwe variabele seconds wordt het aantal verstreken seconden binnen een minuut
    var minutes = date.getMinutes();                                                              // De nieuwe variabele minutes wordt het aantal verstreken minuten binnen een uur
    var hours = date.getHours();                                                                  // De nieuwe variabele hours wordt het aantal verstreken uren binnen een dag

    console.log(seconds);                                                                         // De waarde van seconds wordt gelogd (gebruikt bij het testen van de klok)
    console.log(minutes);                                                                         // De waarde van minutes wordt gelogd (gebruikt bij het testen van de klok)
    console.log(hours);                                                                           // De waarde van hours wordt gelogd (gebruikt bij het testen van de klok)

    var hands = [
      {
        hand: 'hours',
        angle: (hours * 30) + (minutes / 2)
      },
      {
        hand: 'minutes',
        angle: (minutes * 6) - 6                                                                  // De waarde van minutes omrekenen naar de grootte van een hoek (60 * 6 = 360). De wijzer startte op een minuut te vroeg dus door de -6 start het nu op de juiste plek.
      },
      {
        hand: 'seconds',
        angle: (seconds * 6) - 6                                                                  // De waarde van seconds omrekenen naar de grootte van een hoek (60 * 6 = 360). De wijzer startte op een seconde te vroeg dus door de -6 start het nu op de juiste plek.
      }
    ];                                                                                            // Ik zag overal dat dit zo moest maar ik weet niet precies wat de juiste term is voor deze bijzondere variabele. Volgens mij is het een soort van Array waar elke waarde meerdere waardes kan bevatten (hand & angle)

    for (var j = 0; j < hands.length; j++) {
      var elements = document.querySelectorAll('.' + hands[j].hand);
      for (var k = 0; k < elements.length; k++) {
          elements[k].style.transform = 'rotateZ('+ hands[j].angle +'deg)';                     // Zet de wijzer op de juiste startpositie door het element met de eerder berekende 'angle' (hoek) in graden te draaien.
          elements[k].style.webkitTransform = 'rotateZ('+ hands[j].angle +'deg)';               // Hetzelfde als de bovenstaande regel maar dan voor Safari
          if (hands[j].hand === 'minutes') {                                                    // Wanneer de hand (wijzer) de minutenwijzer is
            elements[k].parentNode.setAttribute('data-second-angle', hands[j + 1].angle);       // De parentNode is de container w
            elements[k].parentNode.setAttribute('data-seconds-passed', seconds);
          }
      }
    }
}

function moveMinuteHands() {
    var containers = document.querySelectorAll('.minutes-container');                             // Selecteer alles wat .second-container bevat.
    for (var i = 0; i < containers.length; i++) {                                                 // Deze loop zorgt dat de juiste container wordt geselecteerd.
        containers[i].style.webkitTransform = 'rotateZ(6deg)';
        containers[i].style.transform = 'rotateZ(6deg)';
    }
    setInterval(function() {
        for (var i = 0; i < containers.length; i++) {
            if (containers[i].angle === undefined) {
                containers[i].angle = 6;
            } else {
                if (containers[i].angle > 360) {
                    containers[i].angle = 0;
                }                                                                                 // Ik weet dat in deze for loop functie mogelijk iets zit wat niet 100% juist is, maar na veel dingen proberen lukte het met deze code zonder dat er iets anders fout ging dus ik heb het zo gelaten. Ik meld het even omdat ik het zelf eigenlijk niet netjes vind om dat soort code te laten staan maar voor nu doe ik het eenmalig toch maar.
            }  
        containers[i].style.transform = 'rotateZ('+ containers[i].angle +'deg)';                  // De wijzer moet 6 graden draaien t.o.v. de vorige positie
        containers[i].style.webkitTransform = 'rotateZ('+ containers[i].angle +'deg)';            // Hetzelfde als de bovenstaande regel maar dan voor Safari
        }
    }, 60000);                                                                                    // De functie moet elke 60000 (= 1 minuut) herhaald worden.
   
}


function moveSecondHands() {
    var containers = document.querySelectorAll('.seconds-container');                             // Selecteer alles wat .second-container bevat.
    setInterval(function() {
      for (var i = 0; i < containers.length; i++) {                                               // Deze loop zorgt dat de juiste container wordt geselecteerd.
        if (containers[i].angle === undefined) {
          containers[i].angle = 6;
        } else {
            if (containers[i].angle > 360) {
                containers[i].angle = 0;
            }                                                                                     // Dit is dezelfde code die mogelijk niet 100% juist is, maar wel werkt zoals ik eerder al besprak bij de minutenwijzer.
        }
        containers[i].style.transform = 'rotateZ('+ containers[i].angle +'deg)';                  // De wijzer moet 6 graden draaien t.o.v. de vorige positie
        containers[i].style.webkitTransform = 'rotateZ('+ containers[i].angle +'deg)';            // Hetzelfde als de bovenstaande regel maar dan voor Safari
      }
    }, 1000);                                                                                     // De functie moet elke 1000 (= 1 seconde) herhaald worden.
}