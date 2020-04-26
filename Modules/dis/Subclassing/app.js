"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// extending class
var modifiedArray = function (_Array) {
    _inherits(modifiedArray, _Array);

    function modifiedArray() {
        _classCallCheck(this, modifiedArray);

        return _possibleConstructorReturn(this, (modifiedArray.__proto__ || Object.getPrototypeOf(modifiedArray)).apply(this, arguments));
    }

    _createClass(modifiedArray, [{
        key: "convert",

        // adding method
        value: function convert() {
            var returnArray = [];
            // modify array 
            this.forEach(function (e) {
                return returnArray.push("" + 2 * e);
            });
            return returnArray;
        }
    }]);

    return modifiedArray;
}(Array);
// create object of subclass


var newArr = new modifiedArray();
// push elements
newArr.push(4);
newArr.push(8);
newArr.push(16);
newArr.push(20);
// call convert method
console.log(newObj.convert());