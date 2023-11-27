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

// CODICI SCONTO



// FUNZIONE FORM

function totalPrice() {
    event.preventDefault()
    let typeOfWork = document.getElementById("inputTypeWork").value;
    let hourPrice = {
        "FrontEnd": 15.30,
        "BackEnd": 20.50,
        "Project Analysis": 33.60,
    };

    let totalHourPrice = hourPrice[typeOfWork];

    let requestedHours = parseFloat(document.getElementById("inputHours").value) || 0;

    // PARTE DISCOUNT
    let discountCode = document.getElementById("inputDiscount").value;

    let discount = 1;

    if (discountCode !== "") {
        let discountCodes = [
            { code: "YHDNU32", discount: 0.75 },
            { code: "JANJC63", discount: 0.75 },
            { code: "PWKCN25", discount: 0.75 },
            { code: "SJDPO96", discount: 0.75 },
            { code: "POCIE24", discount: 0.75 },
        ];

        let validDiscountCode = false;

        for (let i = 0; i < discountCodes.length; i++) {
            if (discountCodes[i].code === discountCode) {
                discount = discountCodes[i].discount;
                validDiscountCode = true;
                break;
            }
        }

        if (!validDiscountCode) {
            alert("Il codice promozionale non è valido.");
            return;
        }
    }

    let totalPrice = (totalHourPrice * requestedHours * discount).toFixed(2);
    totalPrice = parseFloat(totalPrice);
    
    console.log("--------- RESOCONTO ---------")
    console.log("Tipo di lavoro: " + typeOfWork);
    console.log("Tariffa oraria: " + totalHourPrice);
    console.log("Ore richieste: " + requestedHours);
    console.log("Costo totale: " + totalPrice);
    console.log("Sconto applicato: " + (1 - discount) * 100 + "%");

    document.getElementById("showTotalPrice").innerHTML = "<h2> <b>Prezzo Finale: </b> </h2>" + totalPrice + "€";
}

document.getElementById("submitButton").addEventListener("click", totalPrice);

