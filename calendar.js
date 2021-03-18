function updateCalendar() {                                                                                                                                     // Deze functie zet de 
    var today = new Date();                                                                                                                                     // Haal de gegevens op over het huidige tijdstip
    var months = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December');           // De nieuwe variabele is een array met alle namen van de maanden
    document.getElementById('day').innerHTML = today.getDate();                                                                                                 // In het element met het id 'day' moet het nummer van de dag van de maand worden neergezet
    document.getElementById('month').innerHTML = months[today.getMonth()];                                                                                      // In het element met het id 'month' moet het nummer van de maand + de vertaling naar de naam van de maand (via de eerder aangemaakte array) worden neergezet
    document.getElementById('year').innerHTML = today.getFullYear();                                                                                            // In het element met het id 'year' moet het huidige jaartal worden neergezet
}


setInterval(updateCalendar(), 1000);                                                                                                                            // Check elke seconde opnieuw of de gegevens nog kloppen (voor als het van 23:59 naar 00:00 wordt)
updateCalendar();                                                                                                                                               // Start de functie minimaal één keer op.