/*
................
ARRAY
..................
1. what is the purpose of an array in js?
2. how declare an array in js?
3. number of element in an array
4. what is index in js array?
5. find the value of an element by index
6. get the index of an element by the value
7. change the element by index is js
8. how can you add an element to an array?
9. how can you remove an element to an array?
10. add an element at the first position of js array
11. remove an element at the first position of js array
*/

//1. Purpose of an array

/* 
In JavaScript, an array is a data structure used to store multiple values in a single variable. It allows you to group related values together under a single name, making it easier to manage and manipulate collections of data.

The main purpose of arrays in JavaScript is to provide a convenient way to store and access multiple elements using a single variable. Some common use cases and purposes of arrays include:

Storing and organizing data: Arrays allow you to store multiple values of any type, such as numbers, strings, objects, or even other arrays. For example, you can use an array to store a list of names, a collection of numbers, or a set of objects representing different entities.

Iterating and accessing elements: Arrays provide methods to iterate over their elements, allowing you to perform operations on each item or access specific elements by their index. You can access array elements using their index position, starting from 0 for the first element.
*/

//2. array declare
let myArray = [];  // An empty array

let numbers = [1, 2, 3, 4, 5];  // An array with numeric values

let names = ["Alice", "Bob", "Charlie"];  // An array with string values

let mixed = [1, "hello", true, { key: "value" }];  // An array with mixed data types

//3. number of element in an array
let number = numbers.length;
console.log('Total Element is ', number);

//4. index

/* 
In JavaScript, an index is a numerical value that represents the position of an element within an array. It is used to access and manipulate individual elements in the array.

Arrays in JavaScript are zero-based, which means the first element is located at index 0, the second element at index 1, and so on. You can think of the index as an identifier for each element in the array.

Here's an example of how you can use an index to access elements in a JavaScript array:

*/

let myArray1 = ["apple", "banana", "orange"];
console.log(myArray1[0]); // Output: "apple"
console.log(myArray1[1]); // Output: "banana"
console.log(myArray1[2]); // Output: "orange"
console.log(myArray[3]); // Output: undefined

//5. find the value of an element by index
var bob = names[1];
console.log(bob);

//6. get the index of an element by the value
var index = myArray1.indexOf("banana");
console.log(index);

//7. change the element by index is js
myArray1[2] = "Mango";
console.log(myArray1);

//8. add element to an array
myArray1.push("Dalim");
myArray1.push("Peyara");

console.log(myArray1);

//9. remove element to an array
myArray1.pop();
console.log(myArray1);

//10. add first element
myArray1.unshift("Khezur");
console.log(myArray1);

//11. remove first element
myArray1.shift();
console.log(myArray1);
