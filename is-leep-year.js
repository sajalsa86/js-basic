//20-4 Check whether a year is a Leap Year or not (simplified way)

/* function isLeepYear(year) {
    const remainder = year % 4;
    if (remainder === 0) {
        return true;
    }
    else {
        return false;
    }
}
//output-1
const myYear = isLeepYear(2023);
console.log('My Leep Year is : ' + myYear);

//output-2
const yourYear = isLeepYear(2024);
console.log('Your Leep Year is : ' + yourYear); */

function isLeepYear(year) {
    if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
        return true;
    }
    else {
        return false;
    }
}

//output-1
const myYear = isLeepYear(2020);
console.log('My Leep Year is : ' + myYear);

//output-2
const yourYear = isLeepYear(2021);
console.log('Your Leep Year is : ' + yourYear);


// find leep year from an array
function findLeepYear(years) {
    let newLeepYear = [];
    for (let i = 0; i < years.length; i++) {
        const index = i;
        const elements = years[index];
        if (elements % 4 === 0 && (elements % 100 !== 0 || elements % 400 === 0)) {
            newLeepYear.push(elements);
        }
    }
    return newLeepYear;
}

const leepYearArray = [2020, 2021, 2023, 2024, 2025, 2028, 2030];
const getInsertNewArray = findLeepYear(leepYearArray);
console.log(getInsertNewArray);