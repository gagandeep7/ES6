'use strict';

var symbol1 = Symbol.for('gag');
var symbol2 = Symbol.for('gag');

// both have same id

console.log(symbol1 == symbol2);

// create obj
var obj = {
    name: "Gag"

    // adding Key to Obj
};var addKey = function addKey(obj) {
    // create same id Symbol and add value to it
    var key = Symbol.for('gag');
    obj[key] = 21;
};

addKey(obj);
// retrieving value from same id symbol
console.log(obj[symbol1]);