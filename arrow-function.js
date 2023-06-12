
//arrow function
let getSum = (a, b) => {
    return a + b;
}
const sum = getSum(10, 5);
console.log(sum);

//shortcurt way only for single ruls
let getTotal = (a, b) => a + b;
const add = getTotal(10, 5);
console.log(add);

//shortcurt way only for single ruls and parameter
let addition = a => a;
console.log(addition(45));