//way-1
function findOddSum(array) {
    let odd = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 !== 0) {
            odd += array[i];
        }
    }
    return odd;
}
let myArray = [10, 21, 30, 3, 50, 60, 7, 80, 90, 100];

// output-odd
const getOdd = findOddSum(myArray);
console.log('Total odd is : ' + getOdd);


//get sum
function getSumOfAnArray(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        const index = i;
        const element = numbers[index];
        sum += element;
        //console.log(index, element, sum);
    }
    return sum;

}


function getOddNumbersOfAnArray(numbers) {
    const oddNumbers = [];
    for (let i = 0; i < numbers.length; i++) {
        const index = i;
        const element = numbers[index];
        if (element % 2 !== 0) {
            oddNumbers.push(element);
        }
    }
    return oddNumbers;
}
// sum array
const myNumbers = [10, 15, 20, 25, 30, 35, 40, 45, 50];
const sumArray = getSumOfAnArray(myNumbers);
console.log('Sum Array : ' + sumArray);

//Total Odd
const oddNumbers = getOddNumbersOfAnArray(myNumbers);
//console.log(oddNumbers);
const totalOddNumbers = getSumOfAnArray(oddNumbers);
console.log('Total Odd Numbrs is : ' + totalOddNumbers);









