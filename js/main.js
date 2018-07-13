"use strict";

let newOne = (a ,b) => {
    console.log(a+b);
}
// newOne(10, 10);

var map = new Map();
map.set('name', 'Vania');
map.set('name', 'Misha');
map.set('id', '23');
map.set('array', '[1,2,3,4,5,6,7,8,9]')



let mapKeysForOfKeys = () => {
    for(let key of map.keys())
        document.write(key + `<br/>`);
}

let mapKeysForOfValues = () => {
    for(let value of map.values())
        document.write(value + `<br/>`);
}

let mapKeysForOfBoth = () => {
    for(let [value, key] of map)
        document.write([value] + "  ---  " + [key] + `<br/>`);
}

// var obj = {a: 1, b: 2, c: 3 };
// let mapKeysForIn = function()  {
// for(var key in obj)
//     console.log(obj[key]);
// }

// mapKeysForOfKeys();
// mapKeysForOfValues();
// mapKeysForIn();
mapKeysForOfBoth();