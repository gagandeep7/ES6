let promise1 = new Promise((resolve,reject) => setTimeout( () => resolve("Over"), 1000 ))
let promise2 = new Promise((resolve,reject) => setTimeout( () => reject("error"), 1500 ))

// Promise.all(...(pr1,pr2)).then( suc => console.log(suc) ).catch( err => console.log(err))

// promise.all check for all promises if all are resolved only then resolve 
// else throw error

Promise.all([promise1,promise2]).then( suc => console.log(suc)).catch( err => console.log(err))

//Promise.race checks for first  promise return value and that set for overall value

Promise.race([promise1,promise2]).then( suc => console.log(suc)).catch( err => console.log(err))
