/*
....................
CONDITIONALS
....................
1. meaning of 10>5 , 5<10 , 5>=2 , 5<=10 , 5==5 , 5!=6 , === , !==
2. meaning of &&
3. meaning of ||
4.simple codition apply
5.
6.
7.
8.
9.
10.
*/

//1. meaning of ===

/* 
In JavaScript, the === operator is called the strict equality operator. It is used for comparing two values for equality, ensuring both the values being compared have the same value and type.

When you use === to compare two values, JavaScript checks if the values are equal without performing any type coercion. It returns true if both the value and the type are the same, and false otherwise.

Here are a few examples to illustrate the usage of ===:
*/
console.log(5 === 5);        // true
console.log(5 === "5");      // false (different types)
console.log(true === 1);     // false (different types)
console.log(null === undefined); // false (different types)
console.log(0 === false);    // false (different types)
// meaning of !==

/* 
In JavaScript, the !== operator is used for strict inequality comparison. It is a binary operator that compares the values on both sides and checks whether they are not equal in both value and type.

Here's how the !== operator works:

If the operands being compared are of different types, the result is true, indicating that they are not equal.
If the operands are of the same type, JavaScript compares their values.
If the values are not equal, regardless of their type, the result is true.
If the values are equal and of the same type, the result is false.

*/

const num1 = 10;
const num2 = '10';

console.log(num1 !== num2); // true (number 10 is not equal to string '10' in both value and type)
console.log(num1 !== 10);   // false (number 10 is equal to number 10 in both value and type)
console.log(num1 !== 5);    // true (number 10 is not equal to number 5 in value)4

//4. simple condition apply

let myBudget = 1800;

let iPhone = 82000;
let sumsung = 38000;
let note10ProMax = 35000;
let realme3Pro = 18000;
let Nokia1200 = 1600;

if (iPhone < myBudget) {
    console.log('I will buy iPhone');
}
else if (sumsung < myBudget) {
    console.log('I will buy Sumsung');
}
else if (note10ProMax < myBudget) {
    console.log('I will buy Note10');
}
else if (realme3Pro < myBudget) {
    console.log('I will buy Realme');
}
else {
    console.log('I will buy Nokia122');
}