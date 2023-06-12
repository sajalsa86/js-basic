/* 
..........................
Variable
...........................
1. what is js?
2. what is variable?
3. how does js works?
4.how to declare variable?
5.type of variable. how can you find out type of a variable?
6. primitive and non-primitive data type is js
7. Naming convention of js variable
8. math operation +, - , *, / , %
9. sort hand += , -= , /=, *=
10. ++ , --
11. parseInt, parseFloat and to fixed
*/

//1.
/* 
JavaScript (JS) is a high-level, interpreted programming language. It is primarily used for web development to add interactivity and dynamic behavior to websites. JS allows developers to create interactive features, manipulate web page elements, and respond to user actions.

JavaScript is a client-side scripting language, meaning it runs in the web browser on the client's machine rather than on a remote server. This allows for dynamic updates and immediate feedback without requiring page reloads.
*/

//2.
/* In JavaScript, a variable is a named container that holds a value.JavaScript variables are used to store and manipulate data within a JavaScript program.

To declare a variable in JavaScript, you use the var, let, or const keyword, followed by the variable name.Here's an example: */

var age = 28;
let myName = 'Sajal';
const nameAndAge = myName + ' ' + 'Age : ' + age;
console.log(nameAndAge);

//3.


/* 
JavaScript (JS) is a widely used programming language that is primarily designed for web development. It allows developers to add interactivity and dynamic features to websites, making them more engaging and responsive. Here's a high-level overview of how JavaScript works:

Embedding JavaScript: JavaScript code is typically embedded within HTML documents using the <script> tag. You can either include the code directly within the HTML file or link an external JavaScript file.

Client-side Execution: JavaScript is a client-side scripting language, which means it runs on the user's web browser rather than on the web server. When a web page containing JavaScript is loaded in a browser, the browser's JavaScript engine (e.g., V8 engine in Chrome) interprets and executes the JavaScript code.

Event-Driven Programming: JavaScript is event-driven, meaning it responds to user actions (events) such as button clicks, mouse movements, or form submissions. You can define event handlers that specify what should happen when a particular event occurs. These event handlers are typically functions that are triggered by events.

Manipulating the Document Object Model (DOM): The Document Object Model represents the structure of an HTML document as a tree-like structure. JavaScript can manipulate this DOM structure, allowing you to dynamically modify the content, style, and structure of a web page. You can select and modify HTML elements, create new elements, change CSS styles, and handle user interactions through the DOM API provided by the browser.

Variables and Data Types: JavaScript supports variables, which are used to store and manipulate data. It has various data types, including numbers, strings, booleans, arrays, objects, and more. JavaScript is dynamically typed, meaning you don't need to declare the type of a variable explicitly.

Control Flow and Functions: JavaScript provides control flow structures like conditionals (if, else if, else), loops (for, while), and switch statements for making decisions and repeating actions. You can also define reusable blocks of code called functions, which can be called multiple times with different inputs.

Asynchronous Programming: JavaScript supports asynchronous programming using mechanisms such as callbacks, promises, and async/await. Asynchronous operations, like making API requests or loading external resources, can be handled without blocking the main execution thread, allowing the browser to remain responsive.

External Libraries and Frameworks: JavaScript has a vast ecosystem of libraries and frameworks that extend its capabilities. Popular frameworks like React, Angular, and Vue.js provide structured approaches to building complex web applications, while libraries like jQuery simplify DOM manipulation and AJAX requests.

*/

//4. variable declare
//numeric variable
var age = 28;
//string variable
let firstName = 'Sajal';
//boolean variable
let isLove = true;
//undefind variable
let yourName;
// Output: "object"
let numbers2 = [1, 2, 3, 4];


//5. type of variable and find variable type

let age1 = 25;
console.log(typeof age1); // Output: "number"

let name1 = "John";
console.log(typeof name1); // Output: "string"

let isTrue = true;
console.log(typeof isTrue); // Output: "boolean"

let numbers = [1, 2, 3, 4];
console.log(typeof numbers); // Output: "object"

let person = {
    name: "John",
    age: 25,
    isStudent: true
};
console.log(typeof person); // Output: "object"

let data = null;
console.log(typeof data); // Output: "object" (an error in JavaScript)

let variable;
console.log(typeof variable); // Output: "undefined"

let id = Symbol("uniqueId");
console.log(typeof id); // Output: "symbol"

//6. primitive and non primitive data type
/*
Primitive Data Types:

Number: Represents numeric values. It includes integers, floating-point numbers, and special numeric values like Infinity, -Infinity, and NaN.
String: Represents textual data enclosed in single or double quotes.
Boolean: Represents a logical value, either true or false.
Null: Represents the intentional absence of any object value.
Undefined: Represents an uninitialized variable or a variable without a value.
Symbol: Represents a unique and immutable value that is often used as an identifier for object properties.

Non-primitive Data Types (Reference Types):

Object: Represents a collection of key-value pairs and can contain properties and methods. Objects can be created using object literals {}, the new keyword with constructor functions, or built-in JavaScript classes like Array, Date, etc.
Array: Represents an ordered collection of elements. It is a special type of object with numeric indexes.
Function: Represents a reusable block of code that can be invoked with specific parameters.
Date: Represents a specific moment in time.
RegExp: Represents a regular expression object for pattern matching and manipulation.


*/
//7. Naming convention of js variable
/* 
Use descriptive names: Choose meaningful names that clearly indicate the purpose or content of the variable. This helps improve code readability.

Camel case: Use camel case to write variable names, starting with a lowercase letter and capitalizing the first letter of each subsequent word. For example: firstName, numOfItems, isLogged.

Avoid reserved keywords: Do not use JavaScript reserved keywords as variable names, as they have special meanings in the language. Examples of reserved keywords include var, let, const, function, if, else, and return.

*/
let firstName1 = "John";
let numOfItems = 10;
let isLoggedIn = true;
const MAX_SIZE = 100;
const PI = 3.14;

//11. parseInt, parseFloat, to fixed

var bananaPrice = '546';
var varType = parseInt(bananaPrice);
console.log(typeof varType + ' ' + varType);

var orangePrice = '546.5412';
var output = parseFloat(orangePrice).toFixed(1);
console.log(typeof output + ' ' + output);

var x = 0.1;
var y = 0.2;
const sum = x + y;
let sumType = parseFloat(sum.toFixed(1));
console.log(sumType);