
//1. function declaration
// golobal scope function declaration we can use any place in code
console.log('-------------1----------------');
names();

console.log('-------------2----------------');

function names() {
    console.log('Sajal Hossain');
}
console.log('-------------3----------------');

console.log('-------------4----------------');
names();
console.log('-------------5----------------');
names();
console.log('-------------6----------------');
//block scope function declaration
//  block scope function declaration we can not use any place in code
// but we can only use in {} block.
if (true) {

    function peoples() {
        console.log('Sajal Hossain');
    }
    peoples();
}
else {
    function man() {
        console.log('Akashi akther');
    }
    man();
}

//function expression
//function expression we can not use any place in code
// but we can use it under function expression
let collages = function () {
    console.log('Naogaon Polytechnic');
}
console.log('-------------7----------------');
collages();
console.log('-------------8----------------');
collages();


//block scope function expression we can not use any place in code
//but we can use it under function expression in block scope
// and we can use jodi variable global hoi
let man;
if (false) {

    let peoples2 = function () {
        console.log('Sajal Hossain');
    }
    peoples2();
}
else {
    man = function () {
        console.log('Akashi akther');
    }
    //man();
}
console.log('-------------9----------------');
man();


