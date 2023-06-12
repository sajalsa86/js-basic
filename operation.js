// Simple Mathematical operations in JavaScript
//addition
var onionPrice = 75;
var eggPrice = 12;
const costTotal = onionPrice + eggPrice;
console.log('Onion and egg total price is : ', costTotal);

//subtraction
var moneyInPokect = 200;
var saveMoney = moneyInPokect - costTotal;
console.log('Save Money : ', saveMoney);

//multiplecation
let mySalari = 9000;
const totalMoney = mySalari * saveMoney;
console.log('Total Money : ', totalMoney);

//divition

let costWay = 10;
const lastMoney = totalMoney / costWay;
console.log('last Money In my Pokect : ', lastMoney);

//(advanced) Mathematical operation shorthand


let price1 = 60;
let price2 = 40;

/* price1 = price1 + 10;
price1 = price1 - 10;
price1 = price1 * 10;
price1 = price1 / 10;
console.log(price1); */

//shorthand
price1 += 10;
price1 -= 10;
price1 *= 10;
price1 /= 10;
console.log(price1);

//shorthand more way
price1++;
price1--;
console.log('Last Update', price1);