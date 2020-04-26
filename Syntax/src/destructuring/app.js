let arr = [ 10, 20, 30];
// destructure 
// spread
[a, ...arr] = arr;
console.log(a,arr);

// overwrite default
[a, b ='gag',c] = arr;
console.log(a,b);

// default
[a, b ='gag',c,d="gag"] = arr;
console.log(a,d);

let num1 = 10;
let num2 = 12;

// swap 

[num1,num2] = [num2,num1];

