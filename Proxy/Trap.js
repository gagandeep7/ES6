let person = { age : " 17 "}
// create proxy 
let handler = {
    // check if name in target or not .
    get : (target,name) => name in target ? target[name] : "No"
}

let proxy = new Proxy(person,handler)
console.log(proxy.age)


