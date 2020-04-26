'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr); }

var arr = [10, 20, 30];
// destructure 
// spread
var _arr = arr;

var _arr2 = _toArray(_arr);

a = _arr2[0];
arr = _arr2.slice(1);

console.log(a, arr);

// overwrite default
var _arr3 = arr;

var _arr4 = _slicedToArray(_arr3, 3);

a = _arr4[0];
var _arr4$ = _arr4[1];
b = _arr4$ === undefined ? 'gag' : _arr4$;
c = _arr4[2];

console.log(a, b);

// default
var _arr5 = arr;

var _arr6 = _slicedToArray(_arr5, 4);

a = _arr6[0];
var _arr6$ = _arr6[1];
b = _arr6$ === undefined ? 'gag' : _arr6$;
c = _arr6[2];
var _arr6$2 = _arr6[3];
d = _arr6$2 === undefined ? "gag" : _arr6$2;

console.log(a, d);

var num1 = 10;
var num2 = 12;

// swap 

var _ref = [num2, num1];
num1 = _ref[0];
num2 = _ref[1];
_ref;