
// by for loop

function factorialRevers(number) {
    let factRevers = 1;
    for (let i = number; i >= 1; i--) {
        factRevers = factRevers * i;
    }
    return factRevers;
}
const number = 6;
const getResult = factorialRevers(number);
console.log('Factorial', getResult);

// by while loop
function reversFactorial(number) {
    let factRevers = 1;
    let i = number;
    while (i >= 1) {
        factRevers = factRevers * i;
        i--;
    }
    return factRevers;
}

const number2 = 6;
const getResult2 = factorialRevers(number2);
console.log('Factorial', getResult2);