let person = { age : " 17 "}
// create proxy 
let handler = {
    // check if name in target or not .
    get : (target,name) => name in target ? target[name] : "No"
}
// destruct 
let {proxy , revoke} = Proxy.revocable(person,handler)
console.log(proxy.roll)
// // removing proxy from obj 
revoke()
console.log(proxy.roll)



