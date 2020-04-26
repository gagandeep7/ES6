import {num,hello,change} from './export.js';

let num2 = num ;
hello();
// before change
console.log(num);
console.log(num2)

change();


// after change it is reference to export 
console.log(num);
// it dont change as it is new address 
console.log(num2)