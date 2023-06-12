//Add or remove element from array using push, pop
var numbers = [45, 50, 55, 60, 65, 70, 75,];

//add a elemet of an array
numbers.push(80);
numbers.push(85);
console.log(numbers);

// add a firsr element of an array
numbers.unshift(10);
numbers.unshift(15);

console.log(numbers);

//remove a elemet of an array
numbers.pop();
numbers.pop();
var remove = numbers.pop();
console.log(remove);
console.log(numbers);


//remove a firsr element of an array
numbers.shift();
numbers.shift();
console.log(numbers);