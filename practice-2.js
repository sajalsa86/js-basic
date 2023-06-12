
//practice problem-1
let fruits = ['apple', 'banana', 'orange'];

// find index of banana
let bananaIndex = fruits.indexOf('banana');
console.log('Index of banana is : ', bananaIndex);

// replace banana with mango
fruits[1] = ['mango']

console.log(fruits);

//practice problem-2


// Variables for your and your friend's scores
var yourScore = 85;
var friendScore = 66;

// Finding your grade
var yourGrade;
if (yourScore >= 80) {
    yourGrade = 'A';
}
else if (yourScore >= 60) {
    yourGrade = 'B';
}
else if (yourScore >= 50) {
    yourGrade = 'C';
}
else if (yourScore >= 40) {
    yourGrade = 'D';
}
else {
    yourGrade = 'F';
}

// Finding your friend's grade
var friendGrade;
if (friendScore >= 80) {
    friendGrade = 'A';
}
else if (friendScore >= 60) {
    friendGrade = 'B';
}
else if (friendScore >= 50) {
    friendGrade = 'C';
}
else if (friendScore >= 40) {
    friendGrade = 'D';
}

else {
    friendGrade = 'F';
}

// Printing the grades
console.log('Your grade: ' + yourGrade);
console.log('Your friends grade: ' + friendGrade);



// Function to calculate the grade based on the score

function calculateGrade(score) {
    if (score >= 80) {
        return 'A';
    } else if (score >= 60) {
        return 'B';
    } else if (score >= 50) {
        return 'C';
    } else if (score >= 40) {
        return 'D';
    } else {
        return 'F';
    }
}

// my score
var myScore = 85;
var myGrade = calculateGrade(myScore);

// Friend's score
var tomScore = 66;
var tomdGrade = calculateGrade(tomScore);


// Output the grades
console.log("My grade: " + myGrade);
console.log("Top grade: " + tomdGrade);

//practice problem-3
//find largest item without function
let num1 = 13;
let num2 = 79;
let num3 = 45;

let largest;

// Compare num1 with num2
if (num1 > num2) {
    largest = num1;
} else {
    largest = num2;
}

// Compare largest with num3
if (largest < num3) {
    largest = num3;
}

console.log("The largest number is:", largest);






