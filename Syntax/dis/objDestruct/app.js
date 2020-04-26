"use strict";

var obj = {
    name: "gag",
    "classs": 7
};

// cls here is alias
var name = obj.name,
    cls = obj["classs"];

console.log(name, cls);