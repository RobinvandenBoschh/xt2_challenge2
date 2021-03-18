// Deze functie zorgt dat er per dagdeel (ochtend (06:00-12:00), middag (12:00-18:00), avond (18:00-00:00), nacht (00:00-06:00)) verandert.

setInterval(function() {
    var time = new Date().getHours();                                                               // De nieuwe variabele time wordt het getal dat het uurnummer van de dag is op het huidige moment.
    var background = document.querySelectorAll('#backgroundContainer');                             // Selecteer alles dat #backgroundContainer bevat.

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
        // alert('evening');
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
}, 1000);                                                                                           // Elke seconde (1000 = 1 seconde) opnieuw de functie afgaan, voor het geval het van bijvoorbeeld 23:59:59 naar 00:00:00 gaat. Het duurt hierdoor vaak 1 seconde voordat de juiste afbeelding wordt geladen en er is dan vaak als eerst de achtergrond voor de nacht te zien.



// Ik heb hieronder (geen idee waarom ik dat in het Engels heb gedaan btw) van tevoren voor mezelf beschreven hoe ik het veranderen van de achtergrond wilde gaan aanpakken.

 // How to change background on time (in steps):
 // 1. Get current time (with .getTime()).
 // 2. Calculate remaining time to the next part of the day.
 // 3. Start function to change background.
 // 4. Set a delay with the remaining time on that function.


