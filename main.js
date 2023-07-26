
// IF & ELSE - LEVEL 1_2

// Erstelle ein HTML-Formular zur Eingabe der Wetter-Qualität in Zahlen von 0 bis 10.
// Deklariere die Funktion weather() und im Funktionskörper:

// Studiere Comparison and Logical Operators
// Nutze Conditional Statements (if...else)
// Bei einer Qualität zwischen 8 und 10 soll das Ergebnis 'super' sein.
// Bei einer Qualität zwischen 6 und 7 soll das Ergebnis 'gut' sein.
// Bei einer Qualität zwischen 3 und 5 soll das Ergebnis 'okay' sein.
// Bei einer Qualität zwischen 0 und 2 soll das Ergebnis 'schlecht'.
// Lass Dir das Ergebnis der Funktion im HTML ausgeben.


function checkWQ() {
    let wInput = document.getElementById("wInput").value
    let res = document.getElementById("resLvl2")
    let container = document.getElementById("lev2weather").classList

    if (wInput >= 8) {
        res.innerHTML = "SUPER"
        container.add("super")
        container.remove("schlecht")
        container.remove("okay")
        container.remove("gut")
    } if (wInput < 8 && wInput >= 6) {
        res.innerHTML = "GUT"  
        container.add("gut")  
        container.remove("schlecht")
        container.remove("okay")
        container.remove("super") 
    } if (wInput < 6 && wInput >= 3) {
        res.innerHTML = "OKAY"
        container.add("okay")
        container.remove("schlecht")
        container.remove("super")
        container.remove("gut")
    } if (wInput < 3 && wInput >= 0) {
        res.innerHTML = "SCHLECHT"
        container.add("schlecht")
        container.remove("super")
        container.remove("okay")
        container.remove("gut")
    }
}
