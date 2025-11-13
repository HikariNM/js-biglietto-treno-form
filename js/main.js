const under18 = 0.20;
const over65 = 0.40;
const priceKm = 0.21;

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
    let name = document.getElementById('inputName').value;
    let inputKm = parseFloat(document.getElementById('inputKm').value);
    let ticketDiscount = document.getElementById('ageSelect').value;
    const standardPrice = inputKm * priceKm;
    let result = standardPrice;
    let ticketType = 'Tariffa Standard';
    
    if (ticketDiscount === 'under18') {
        result = standardPrice - (standardPrice * under18);
        ticketType = 'Sconto minorenni'
    } else if (ticketDiscount === 'over65') {
        result = standardPrice - (standardPrice * over65);
        ticketType = 'Sconto Senior'
    }

    passengerName.innerText = name;
    ticketCategory.innerText = ticketType;
    ticketPrice.innerText = result + ('€');
    trainWagon.innerText = Math.floor(Math.random()* (6 - 1 + 1) + 1);
    ticketCode.innerText = generateTicketCode();

});

document.getElementById('resetBtn').addEventListener('click', function(event){
    document.getElementById('result').innerHTML = '';

})