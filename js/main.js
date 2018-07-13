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

var obj = {a: 1, b: 2, c: 3 };
let mapKeysForIn = function()  {
for(var key in obj)
    console.log(obj[key]);
}


const sets = new Set();
sets.add('a');
sets.add('b');
sets.add('c');

let setObj = () => {
    for (let element of sets) {
        console.log(element);
    }
    console.log(sets.size);
    console.log(sets.has(1));
    console.log(sets.has(10));
}


// Getters и seters for Classes

class People {
    constructor(name) {
       this.name = name;
    }
    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name
    }
}

let person = new People("Jhon Snow");
console.log(person.getName());
person.setName("Den");
console.log(person.getName());



let funcBind = () => {

    let user = {
        firstName: "Вася",
        sayHi: function() {
            alert( this.firstName );
        }
    };

    let userBind = user.sayHi();

    // setTimeout(function() { // Вася, but additional wrap
    //     user.sayHi();
    // }, 1000);

    setTimeout(userBind, 1000); // undefined (не Вася!)
}


// function f(a, b) {
//     alert( this );
//     alert( a + b );
// }
//
// var g = f.bind("Context");


// begin call, apply
var employee1 = {
    name: "Hanna",
    position: "Project manager",
    salary: 1000
}

var employee2 = {
    name: "Bill",
    position: "Junior Developer",
    salary: 800
}

function promote(newPosition, salaryRise) {
    this.position = newPosition;
    this.salary += salaryRise;

    return this.name + " is  " + this.position + " and earns $" + this.salary;
}

/// call///

// let hannaNewPos = promote.call(employee1, "Department head", 500);
// let billNewPosition = promote.call(employee2, "Middle Developer", 300);
// document.write(hannaNewPos + `<br/>` + billNewPosition); // call

///apply///

// let hannaNewPosApply = promote.apply(employee1, ["Department head", 500]);
// let billNewPositionApply = promote.apply(employee2, ["Middle Developer", 300]);
// document.write(hannaNewPosApply + `<br/>` + billNewPositionApply); // call

var promoteHanna = promote.bind(employee1);
document.write(promoteHanna("Department head", 500));
// end methods call, apply

// -------- calls ---------- //

// mapKeysForOfKeys();
// mapKeysForOfValues();
// mapKeysForIn();
// mapKeysForOfBoth();
// setObj();
// funcBind();
// g(1,2);
// funcBind();
// userBind;

