// make avgerage

function makeAvg(num1, num2, num3) {
    const avgerage = (num1 + num2 + num3) / 3;
    return avgerage;
}
let number1 = 12;
let number2 = 22;
let number3 = 32;
const viewAvg = makeAvg(number1, number2, number3);
console.log('Avgerage is : ', viewAvg);

//make avgerage by input array
function makeAvgerage(integers) {
    let sumArray = 0;
    for (let i = 0; i < integers.length; i++) {
        sumArray += integers[i] / integers.length;
    }
    return sumArray;
}
let numbers = [10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60];
const viewAvgerage = makeAvgerage(numbers);
console.log('Avgerage is : ', viewAvgerage);