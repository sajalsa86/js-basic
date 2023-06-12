//19-6 Declare multiple objects with multiple properties
let mobile = {
    color: 'blue',
    ram: '4GB',
    rom: '64GB',
    version: 'Android 12',
    model: 'realme 3pro',
}
//display a object 
console.log(mobile);
// display only one value by property
console.log(mobile.version);
//change a value
let phoneColor = mobile.color = 'Black';
console.log(phoneColor);