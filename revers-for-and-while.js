//Understand for and while loop in a reverse way
let num1 = 10;

while (num1 >= 1) {
    console.log(num1);
    num1--;
}

for (let i = 10; i >= 1; i--) {
    console.log(i);
}


let names = ['Sajal', 'Akashi', 'Samiha', 'Safone', 'Sajid', 'redone'];

for (let i = names.length; i >= 0; i--) {
    const name = names[i];

    console.log(name);
}

let numbers = [25, 30, 35, 101, 205, 65, 98, 100, 50, 105, 85, 250];

for (let i = numbers.length; i >= 0; i--) {

    const number = numbers[i];

    console.log(number);
}