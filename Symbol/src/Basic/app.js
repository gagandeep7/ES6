let symbol1 = Symbol('Debug');
let symbol2 = Symbol('Debug')

// check unique id
console.log(symbol1 == symbol2);

// print string for debug
console.log(symbol2.toString());

// Metaprogramming Object

let obj = {
    name : "Gagan",
    [symbol2] : 21
}

// dont print symbol 
console.log(obj)
// explicit symbol call 
console.log(obj[symbol2])
