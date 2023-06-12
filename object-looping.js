//19-8 (advanced) Looping through an Object and Object summary
// object
const shopingCurt = {
    books: 10,
    pen: 12,
    register: 6,
    noteBook: 4,
    shampo: 24,
    shop: 5,

};
// now keys value look like a array
//way-1
const keys = Object.keys(shopingCurt);

for (let i = 0; i < keys.length; i++) {
    const keysName = keys[i];
    const keysValue = shopingCurt[keysName];
    console.log(keysName + ' : ' + keysValue);
}

//way-2 by for in loop
for (keysName2 in shopingCurt) {
    const keysValue2 = shopingCurt[keysName2];
    console.log(keysName2 + ' - ' + keysValue2);
}
