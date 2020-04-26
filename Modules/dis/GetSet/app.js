"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Student = function () {
    function Student() {
        _classCallCheck(this, Student);

        // default values
        this._name = "abc";
        this._age = 0;
        this._classs = "CSE";
    }

    // setter 

    _createClass(Student, [{
        key: "values",
        set: function set(data) {
            this._name = data.name;
            this._classs = data.classs;
            this._age = data.age * 2;
        }

        // getter 
        ,
        get: function get() {
            return "name :" + this._name + " class " + this._classs + " age " + this._age;
        }
    }]);

    return Student;
}();

var s1 = new Student();
// default values
console.log(s1.values);
// pass obj data
s1.values = { name: "gag", age: 21, classs: "EEE"
    // updated
};console.log(s1.values);