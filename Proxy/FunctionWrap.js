
let func = (message) => console.log(`hello ${message}`)
let handler = {
    // apply used  for function call
    apply: (target, thisArg, Arglist) => {   // update property value only if length is greater
        if (Arglist.length == 1) Reflect.apply(target, thisArg, Arglist)
        else console.log("not possible")
    }

}

let proxy = new Proxy(func, handler)
console.log(proxy("Gag"))// 1 arg true
console.log(proxy("Gag", 1010)) // not equal to 1 arg



                