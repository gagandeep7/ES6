'use strict';

var buttonES5 = document.querySelector('.es5');
var buttonES6 = document.querySelector('.es6');

// arrow function
var fn = function fn() {
    return console.log(undefined);
};

// es5 function
function fn2() {
    console.log(this);
}

buttonES6.addEventListener("click", fn);
buttonES5.addEventListener("click", fn2);