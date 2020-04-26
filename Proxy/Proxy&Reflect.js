let person = { name : "gag", age : " 18 "}
let handler = {

    get : (target,name) => name in target ? target[name] : "No",
    // trap for set
    set :  (target,property,value) =>
    {   // update property value only if length is greater
        if (value.length > 2) Reflect.set(target,property,value)   
    } 
}

let proxy = new Proxy(person,handler)
// here trap dont let update as length less than 2 
proxy.name = "G"
console.log(proxy.name)
proxy.name = "GAAAAAG"
console.log(proxy.name)

