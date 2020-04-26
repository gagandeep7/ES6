"use strict";

//  to  add the args dynamically
var sum = 0;
// rest operator for dynamic args
var Add = function Add() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
    }

    args.forEach(function (item) {
        sum += item;
    });

    return sum;
};

ans = Add(19, 20, 27);
console.log(ans);