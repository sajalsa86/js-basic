//19-7 multiple ways to get and set object property
let shopingCurt = {
    books: 3,
    pen: 25,
    sunglass: 3,
    keybord: 5,
    mouse: 8

};
//way-1.
// when you know the specific property name, use dot notation to get the value
let countPen = shopingCurt.pen;
console.log('Total Pen : ', countPen);


//way-2.
//alternative system
// when you know the specific property name,
let countBooks = shopingCurt['books'];
console.log('Total Books', countBooks);


//way-3.
//put property on variable
// when you know the specific property name, 
let propertyName = 'sunglass';
let countSungalss = shopingCurt[propertyName];
console.log('Total Sunglass : ', countSungalss);


//update or change or set property value
//way-1
shopingCurt.sunglass = 10;
//way-2
shopingCurt['sunglass'] = 15;

//way-3
shopingCurt[propertyName] = 20;
console.log('now total sunglass : ', shopingCurt.sunglass);


//display the all only property of shopingcurt
let viewProperty = Object.keys(shopingCurt);
console.log(viewProperty);


//display the all only values of shopingcurt
let viewValues = Object.values(shopingCurt);
console.log(viewValues);

//display the all shopingcurt
console.log(shopingCurt);
