let person = { name : "gag", age : " 18 "}
let handler = {

    get : (target,name) => name in target ? target[name] : "NoT present",
}
// empty target
let proxy = new Proxy({},handler)
// set proxy as proto of person so that it can use trap of get ()
Reflect.setPrototypeOf(person,proxy)
console.log(person.name)//true
console.log(person.hobbies)// Non as not  in pro