////20-3 Check even and odd number using function
//way-1
function oddEven(num1) {
    if (num1 % 2 === 0) {
        return "Even"
    }
    else {
        return "Odd";
    }
}

console.log(oddEven(4)); // Output: Even
console.log(oddEven(7)); // Output: Odd
console.log(oddEven(-2)); // Output: Even


//way-2
function isEven(num1) {
    let remainder = num1 % 2;
    if (remainder === 0) {
        console.log('Number is Even')
    }
    else {
        console.log('number is odd');
    }
}
isEven(120);

//way-3

function checkEven(params) {
    let remin = params % 2;
    if (remin === 0) {
        return true;
    }
    else {
        return false;
    }

}

const myNumberIsEven = checkEven(120);
console.log(myNumberIsEven);

const hernumberIsEven = checkEven(121)
console.log(hernumberIsEven);
