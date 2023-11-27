/* Il prezzo orario per una commissione varia in questo modo:
se la commissione riguarda lo sviluppo backend il prezzo orario è di 20.50€ l’ora
se la commissione riguarda lo sviluppo frontend il prezzo orario è di 15.30€ l’ora
se la commissione riguarda l’analisi progettuale di un progetto il prezzo orario è di 33.60€
L’utente potrebbe decidere di utilizzare un codice promozionale tra i seguenti:
YHDNU32
JANJC63
PWKCN25
SJDPO96
POCIE24
*/


let backendPrice = 20.50;
let frontendPrice = 15.30;
let projectAnalysisPrice = 33.60;

function totalPrice (){
    let typeOfWork = document.getElementById("inputTypeWork").value;
    let hourPrice = {
        "FrontEnd": 15.30,
        "BackEnd": 20.50,
        "Project Analysis": 33.60,
    };

    let totalHourPrice = hourPrice[typeOfWork];
    console.log(totalHourPrice);

    let requestedHours = parseFloat(document.getElementById("inputHours").value) || 0;

    let totalPrice = totalHourPrice * requestedHours;

    console.log("Tipo di lavoro: " + typeOfWork);
    console.log("Tariffa oraria: " + totalHourPrice);
    console.log("Ore richieste: " + requestedHours);
    console.log("Costo totale: " + totalPrice);
}

document.getElementById("submitButton").addEventListener("click", totalPrice);
