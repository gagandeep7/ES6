let symbol1 = Symbol.for('gag');
let symbol2 = Symbol.for('gag');

// both have same id

console.log(symbol1 == symbol2)

// create obj
let obj = {
    name : "Gag",
    age : 30
}

// adding Key to Obj
let addKey = (obj) =>{
    // create same id Symbol and add value to it
    let key = Symbol.for('gag')
    obj[key] = 21
}

addKey(obj)
// retrieving value from same id symbol
console.log(obj[symbol1])
// dont overwrite age by symbol
console.log(obj[age])