const passengerName = document.getElementById('passengerName');
const ticketCategory = document.getElementById('ticketCategory');
const trainWagon = document.getElementById('trainWagon');
const ticketCode = document.getElementById('ticketCode');
const ticketPrice = document.getElementById('ticketPrice');

function generateTicketCode(){

    const char = 'ABCDEFGHILMNOPQRSTUVZ0123456789'
    let result = '';
    
    for (let i = 0; i < 6; i++) {
        result += char.charAt(Math.floor(Math.random() * char.length));
        
    }
    return result
    
};

document.getElementById('ticketForm').addEventListener('submit', function(event) {

    event.preventDefault();
    // debugger
    let inputName = document.getElementById('inputName').value;
    let inputKm = parseFloat(document.getElementById('inputKm').value);
    let ticketDiscount = document.getElementById('ageSelect').value;
    let wagonNumber = Math.floor(Math.random()* (6 - 1 + 1) + 1);
    let bookingCode= generateTicketCode();

    const standardPrice = (inputKm * 0.21).toFixed(2);
    let price = standardPrice;
    let ticketType = 'Tariffa Standard';
    
    if (ticketDiscount === 'under18') {
        price = (standardPrice - (standardPrice * 0.20)).toFixed(2);
        ticketType = 'Sconto Minorenni';
    } else if (ticketDiscount === 'over65') {
        price = (standardPrice - (standardPrice * 0.40)).toFixed(2);
        ticketType = 'Sconto Senior';
    }

    passengerName.innerText = inputName;
    ticketCategory.innerText = ticketType;
    ticketPrice.innerText = `${price}€`;
    trainWagon.innerText = wagonNumber;
    ticketCode.innerText = bookingCode;

    //Generatore Barcode
    // JsBarcode('#barcode',  bookingCode)
    // document.getElementById("barcode").style.display = "block";
    
    //Generatore QRCode
    const qrData = `Intestatario ${inputName} \nCarrozza ${wagonNumber} \nCodiceCP ${bookingCode} \nCosto del biglietto ${price}€`
    var qrcode = new QRCode(document.getElementById("qrcode"), {
        text: qrData,
        width: 128,
        height: 128,
        colorDark : "#000000",
        colorLight : "#ffffff",
        correctLevel : QRCode.CorrectLevel.H
    });
    document.getElementById("qrcode").style.display = "flex";
    document.querySelector(".scan").style.display = "block";

});

document.getElementById('resetBtn').addEventListener('click', function(event){

    event.preventDefault()

    passengerName.innerText = '-';
    ticketCategory.innerText = '-';
    ticketPrice.innerText = '-';
    trainWagon.innerText = '-';
    ticketCode.innerText = '-';
    document.getElementById("qrcode").style.display = "none";
    document.querySelector(".scan").style.display = "none";
})


