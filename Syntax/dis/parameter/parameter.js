"use strict";

// here check is default parameter
var divTwos = function divTwos(number) {
    var check = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : number % 2;

    if (check == 0) {
        return "yes";
    } else {
        return "false";
    }
    ;
};