// basic example with while loop
let rostGiven = 0;
while (rostGiven < 15) {
    console.log('Rost Den Please');
    rostGiven++
    if (rostGiven > 10) {
        break;
    }
}

// basic example with for loop
for (let i = 0; i < 10; i++) {
    if (i > 5) {
        break;
    }
    console.log(i);
}

//advance example

let numbers = [25, 30, 35, 65, 101, 205, 65, 98, 100, 50, 105, 85];

for (let i = 0; i < numbers.length; i++) {

    const number = numbers[i];
    if (number > 100) {
        break;
    }

    console.log(number);
}

let names = ['Sajal', 'Akashi', 'Samiha', 'Safone', 'Sajid', 'redone'];

for (let i = 0; i < names.length; i++) {
    const name = names[i];
    if (name == 'Safone') {
        break;
    }
    console.log(name);
}