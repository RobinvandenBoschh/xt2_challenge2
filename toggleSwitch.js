function toggleSwitch() {
    var checkBox = document.getElementById('checkbox');                       // De toggle switch knop is eigenlijk een speciaal opgemaakte checkbox
    var analog = document.getElementById('clock');                            // Selecteer de analoge klok en de nieuwe variabele analog wordt wat er geselecteerd wordt
    var digital = document.getElementById('digital');                         // Selecteer de digitale klok en de nieuwe variabele digital wordt wat er geselecteerd wordt
    if (checkBox.checked == true){                                            // Aangezien de toggle switch knop 
      analog.style.display = 'block';                                         // De analoge klok wordt zichtbaar
      digital.style.display = 'none';                                         // De digitale klok is niet zichtbaar
      (function() { setClock(); moveSecondHands(); moveMinuteHands(); })();   // Dit zorgt dat de analoge klok 
    } else {                                                                  // Wanneer de toggle switch knop wordt 'uitgezet':
        analog.style.display = 'none';                                        // De analoge klok is niet zichtbaar
        digital.style.display = 'block';                                      // De digitale klok wordt zichtbaar
    }
}