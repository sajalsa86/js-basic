//20-7 Calculate Factorial of a number using for loop
function sumFactorial(number) {
    let sum = 0;
    for (let i = 1; i <= number; i++) {
        sum += i;
    }
    return sum;
}

let Factorial = 8;
const getResult = sumFactorial(Factorial);
console.log(getResult);

function factorial(number) {
    let fact = 1;
    for (let i = 1; i <= number; i++) {
        fact = fact * i;
    }
    return fact;
}
let factorial2 = 5;
const getResult2 = factorial(factorial2);
console.log(getResult2);