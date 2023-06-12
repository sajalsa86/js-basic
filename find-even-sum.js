function findEvenSum(array) {
    let even = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            even += array[i];
        }
    }
    return even;
}
let myArray = [10, 21, 31, 3, 50, 7, 81, 93, 40];

// output-even
const getEven = findEvenSum(myArray);
console.log('Total Even is : ' + getEven);

function getSumOfAnArray(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        const index = i;
        const element = numbers[index];
        sum += element;
    }
    return sum;
}

function getEvenNumbersOfAnArray(numbers) {
    const evenNumbers = [];
    for (let i = 0; i < numbers.length; i++) {
        const index = i;
        const element = numbers[index];
        if (element % 2 === 0) {
            evenNumbers.push(element);
        }

    }
    return evenNumbers;
}

// sum array
const myNumbers = [10, 15, 20, 25, 30, 35, 40, 45, 50];
const sumArray = getSumOfAnArray(myNumbers);
console.log('Sum Is : ' + sumArray);

//Total even
const evenNumbers = getEvenNumbersOfAnArray(myNumbers);
//console.log(oddNumbers);
const totalEvenNumbers = getSumOfAnArray(evenNumbers);
console.log('Total even Numbrs is : ' + totalEvenNumbers);