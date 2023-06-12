//(advanced) String Concatenation, type conversion parseInt parseFloat
//numeric
let price1 = 45;
let price2 = 35;
const totalPrice = price1 + price2;
console.log(totalPrice);

//string
let firstName = 'Sajal';
let lastName = 'Hossain';
const fullName = firstName + ' ' + lastName;
console.log(fullName);


//String Concatenation
// with convert string to number
let firstNumber = '45';
let secondNumber = 35;
const totalNumber = parseInt(firstNumber) + secondNumber;
console.log(totalNumber);

let myNumber = '45.546';
let yourNumber = 35.55;
const myAndYou = parseFloat(myNumber) + parseFloat(yourNumber);
console.log(myAndYou);