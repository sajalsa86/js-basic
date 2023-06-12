// simole function
//1.
function simpleFunction1() {
    console.log('Hello World');
}
simpleFunction1();

//2.
function add(num1, num2, num3) {
    let sum = num1 - (num2 + num3);
    return sum;
}
let MyMoney = 500;
let buyMango = 200;
let buyBanana = 150;
const balance = add(MyMoney, buyMango, buyBanana);
console.log(balance);

//3. 

function simpleFunction2(param) {
    let name;
    if (param === 10) {
        name = 'Sajal Hossain';
        return name;
    }
}

let num1 = 10;
const view = simpleFunction2(num1);
console.log(view);


//4.

function getResult(bani) {
    let love = bani.substring(2, 6)
    return love;
}

let myBani = 'I love you jaan';
const result = getResult(myBani);
console.log(result);

//5.

function bringSingara(money) {
    let singaraPrice = 10;
    let quantity = money / singaraPrice;
    return quantity;
}
let taka = 200;
const totalSingara = bringSingara(taka);
console.log('Singaras: ', totalSingara);

//6.
function getAverage(bangla, english, math) {
    let total = bangla + english + math;
    let averageMarks = total / 3;
    return averageMarks;
}
let banglaMarks = 75;
let englishMarks = 85;
let mathMarks = 95;

const myAverageMarks = getAverage(banglaMarks, englishMarks, mathMarks);
console.log(myAverageMarks);

//7.
function addition(num1, num2, num3) {
    const sum1 = num1 + num2 + num3;
    return sum1;
}

const getTotal = addition(10, 12, 14);
const getTotal2 = addition(15, 16, 17);
const finalTotal = addition(getTotal, getTotal2, 20);
console.log(finalTotal);