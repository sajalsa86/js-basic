
//advance example

let numbers = [25, 30, 35, 101, 205, 65, 98, 100, 50, 105, 85, 250];

for (let i = 0; i < numbers.length; i++) {

    const number = numbers[i];
    if (number > 99) {
        continue;
    }

    console.log(number);
}

let names = ['Sajal', 'Akashi', 'Samiha', 'Safone', 'Sajid', 'redone'];

for (let i = 0; i < names.length; i++) {
    const name = names[i];
    if (name == 'Samiha') {
        continue;
    }
    console.log(name);
}