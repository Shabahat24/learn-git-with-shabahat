const inputAmount = document.querySelector("#inr-amount");
const currencySelector = document.querySelector("#currency-select");
const display = document.querySelector(".currency-display");

// Write a function named convertCurrency which takes two parameters valueInRupee and convertTo.
// The function should return the converted amount based on the convertTo parameter.
// The function should return the valueInRupee if the convertTo parameter is not one of the three cases.
function convertCurrency(valueInRupee, convertTo = "USD"){
    switch (convertTo){
        case "USD": {
            return valueInRupee * 85;
        }
        case "EUR": {
            return valueInRupee * 95;
        }
        case "GBP": {
            return valueInRupee * 105;
        }
        default: {
            return valueInRupee;
        }
    }
}
// Write a function named updateDisplay which should be called when the inputAmount or currencySelector is changed.
// The function should get the value of inputAmount and currencySelector and call the convertCurrency function with these values.
// The function should update the display with the converted amount.
function updateDisplay() {
    const valueInRupee = inputAmount.value;
    const convertedAmount = convertCurrency(valueInRupee,currencySelector.value);
    display.innerText = convertedAmount;
}
// Use the 'change' event to call the updateDisplay function when the inputAmount or currencySelector is changed.
inputAmount.addEventListener("change", updateDisplay);
currencySelector.addEventListener("change",updateDisplay);