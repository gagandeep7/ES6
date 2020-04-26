'use strict';

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var symbol1 = Symbol('Debug');
var symbol2 = Symbol('Debug');

// check unique id
console.log(symbol1 == symbol2);

// print string for debug
console.log(symbol2.toString());

// Metaprogramming Object

var obj = _defineProperty({
    name: "Gagan"
}, symbol2, 21);

// dont print symbol 
console.log(obj);
// explicit symbol call 
console.log(obj[symbol2]);