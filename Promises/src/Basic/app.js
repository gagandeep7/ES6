// create promise
// resolve execute after callback
let promise = new Promise((resolve,reject) => setTimeout( () => resolve("Over"), 1500 ))
// then is used after resolve has returned value pr
promise.then( pr => console.log(pr) ) 

// reject promise use second arg of then method
let promise2 = new Promise((resolve,reject) => setTimeout( () => reject("Failed"), 1500 ))
promise2.then( success =>console.log(success) , err => console.log(err))