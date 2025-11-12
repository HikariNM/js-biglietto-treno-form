const under18 = 0.20;
const over65 = 0.40;
const priceKm = 0.21;

document.getElementById('ticketBtn').addEventListener('click', function(event) {
    event.preventDefault();
    // debugger
    let name = document.getElementById('inputName').value;
    let inputKm = parseFloat(document.getElementById('inputKm').value);
    let ticketType = document.getElementById('ageSelect').value;
    const standardPrice = inputKm * priceKm;
    let result = standardPrice;
    
    if (ticketType === 'under18') {
        result = standardPrice - (standardPrice * under18);
    } else if (ticketType === 'over65') {
        result = standardPrice - (standardPrice * over65);
    }

    console.log(`Il costo del tuo viaggio di ${inputKm}km come passeggero ${ticketType} sarà di euro ${result.toFixed(2)}`);
    document.getElementById('result').innerText = `Il costo del tuo viaggio di ${inputKm}km come passeggero ${ticketType} sarà di euro ${result.toFixed(2)}`

});