//17-6 Make conditional decision, if-else, comparison
//example-1
let cowPrice = 150000;
let goatPrice = 25000;
let myBudget = 10000;


if (cowPrice < myBudget) {
    console.log('i will buy cow')
}
else if (goatPrice < myBudget) {
    console.log('i will buy goat');
}
else {
    console.log('i am not');
}


//example-2
// let isGraduated = true;
// let salary = 51000;
// let cars = 1;

/* if (isGraduated === true && salary > 50000) {
    console.log('Eso biye kore feli');
}
else {
    console.log('tor kopale biye nai');
} */


//example-3

/* let isGraduated = false;
let salary = 51000;
let cars = 1;
if (isGraduated === true || salary > 50000) {
    console.log('Eso biye kore feli');
}
else {
    console.log('tor kopale biye nai');
} */



let isGraduated = true;
let salary = 51000;
let cars = 0;
if ((isGraduated === true || salary > 50000) && cars >= 1) {
    console.log('Eso biye kore feli');
}
else {
    console.log('tor kopale biye nai');
}

//Multi stage condition and nested conditions

let dalim = 400;
let orange = 300;
let apple = 200;
let myMoney = 450;


if (dalim < myMoney) {
    console.log('Today amra dalim khabo');
}
else if (orange < myMoney) {
    console.log('Today amra orange khabo');
}
else if (apple < myMoney) {
    console.log('Today amra apple khabo');
}
else {
    console.log('Tomato sosta but vitamin besi');
}

