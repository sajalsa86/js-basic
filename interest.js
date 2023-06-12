//simple interest and complex interest

let simpleInterest = (principal, rate, time) => {
    var interest = (principal * rate * time) / 100 / 12 * 3;
    return interest;
}
var principal = 100000;
var rate = 6.75;
var time = 1;
const getInterest = simpleInterest(principal, rate, time);
console.log("Total Amount : ", getInterest);

// Decrease interest by 10%
const decreasedInterest = getInterest - (getInterest * 0.1);
console.log("Amount : ", decreasedInterest);