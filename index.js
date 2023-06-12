//17-3 Array index, get and set by index, indexOf
var numbers = [45, 50, 55, 60, 65, 70, 75, 85, 90];

console.log(numbers);
//1. get element value by index
var element = numbers[3];
console.log(element);

//2.set element value by index
var update = numbers[4] = 62;
console.log(update);
console.log(numbers);

//3. find index of an element

var index = numbers.indexOf(70);
console.log(index);