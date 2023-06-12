/* 
.................
LOOP
....................
1.Display "ajke amar mon valo alhamdullah" for 39 times
2. Display numbers between 58 to 98
3. show all even mumbers from 412 to 456
4. show all odd mumbers from 581 to 623
5. Defference between while and for loop
6. Declare a array and display by loop
7. Declare a array and display by while loop 
8. run a loop 30 to 86, it will be stop 46
9. right the price of the books that you have, display the prices if the price is lower than 200
*/

//1. 
let mind = 1;
while (mind <= 39) {
    console.log('ajke amar mon valo alhamdullah');
    console.log(mind);
    mind++;
}
//2. 
for (let i = 58; i <= 98; i++) {
    console.log(i);
}

//3. even number
for (let i = 412; i <= 456; i += 2) {
    console.log(i);
}
//4. odd number
for (let i = 581; i <= 623; i += 2) {
    console.log(i);
}
//6. array
let lastLearn = ['html', 'css', 'bootstarp', 'tailwind', 'js'];

for (let i = 0; i < lastLearn.length; i++) {
    const viewArray = lastLearn[i];
    console.log(viewArray);
}

//7.
let allPhone = ['Nokia', 'VodaPhone', 'Lenevo', 'Realme'];

let i = 0;
while (i < allPhone.length) {
    const vieAllPhone = allPhone[i];
    console.log(vieAllPhone);
    i++;
}

//8.
for (let i = 30; i <= 86; i++) {
    if (i === 46) {
        break;
    }
    console.log(i);
}

//9.
let bangla = 150;
let english = 205;
let chemistry = 185;
let math = 215;
let biology = 195;

let books = [
    { title: 'bangla', price: 150 },
    { title: 'math', price: 250 },
    { title: 'dhormo', price: 100 },
    { title: 'chemistry', price: 350 },
    { title: 'biology', price: 195 },

];
for (let i = 0; i < books.length; i++) {

    let book = books[i];
    if (book.price > 200) {
        continue;
    }
    console.log(book);
}