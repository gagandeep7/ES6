"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//  create class no comma for methods
var Person = function () {
    function Person(name) {
        _classCallCheck(this, Person);

        this.name = name;
    }

    _createClass(Person, [{
        key: "hello",
        value: function hello() {
            console.log("my name is " + this.name);
        }
    }]);

    return Person;
}();

// static method


var Helper = function () {
    function Helper() {
        _classCallCheck(this, Helper);
    }

    _createClass(Helper, null, [{
        key: "say",
        value: function say() {
            console.log("static");
        }
    }]);

    return Helper;
}();

var Gag = function (_Person) {
    _inherits(Gag, _Person);

    function Gag(age, name) {
        _classCallCheck(this, Gag);

        var _this = _possibleConstructorReturn(this, (Gag.__proto__ || Object.getPrototypeOf(Gag)).call(this, name));

        _this.age = age;
        return _this;
    }

    _createClass(Gag, [{
        key: "hello1",
        value: function hello1() {
            console.log("age is " + this.age);
            _get(Gag.prototype.__proto__ || Object.getPrototypeOf(Gag.prototype), "hello", this).call(this);
        }
    }]);

    return Gag;
}(Person);

var g1 = new Gag(21, "gag");
console.log(g1);
exports.Gag = Gag;
exports.Helper = Helper;
exports.Person = Person;