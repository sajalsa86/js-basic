//20-2 Unit Convert Inch to Feet, miles to kilometer

//Convert Inch to Feet
function inchToFeet(num1) {
    let inch = 12;
    let feet = num1 / inch;
    return feet;
}
let inputValue = 36;
const resultFeet = inchToFeet(inputValue);
console.log(inputValue + ' Inch te ' + resultFeet + ' Feet hoi');

//miles to kilometer

function milesToKilo(num2) {
    let miles = 1.60934;
    let kilometer = num2 * miles;
    return kilometer.toFixed(1);
}

let inputMiles = 6;
const resultKilo = milesToKilo(inputMiles);
console.log(inputMiles + ' miles ee ' + resultKilo + ' kilometer hoi');


function convertHoursToMinutes(hours) {
    var minutes = hours * 60;
    return minutes;
}

// Example usage
var hours = 2;
var convertedMinutes = convertHoursToMinutes(hours);
console.log(hours + " hours is equal to " + convertedMinutes + " minutes.");

//celsius to fahrenheit
//by arrow function
let celsiusToFahrenheit = (celsius) => {
    let getFahrenheit = celsius * (9 / 5) + 32;
    return getFahrenheit;

}

const userCelsius = 12;
const convertedFahrenheit = celsiusToFahrenheit(userCelsius);
console.log(userCelsius + " Celsius is equal to " + convertedFahrenheit + " Fahrenheit.");


//fahrenheit to celsius
function fahrenheitToCelsius(fahrenheit) {
    let getCelsius = (fahrenheit - 32) * (5 / 9);
    return getCelsius;
}

const userFahrenheit = 2;
const convertedCelsius = fahrenheitToCelsius(userFahrenheit);
console.log(userFahrenheit + " Farenheit is equal to " + convertedCelsius.toFixed(2) + " Celsius.");
