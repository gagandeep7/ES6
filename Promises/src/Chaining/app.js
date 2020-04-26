let wait = seconds => new Promise((resolve , reject) =>
    {   if( seconds > 2 ) reject("Error") 
        setTimeout(() => resolve(++seconds),1000)
    })
// next then only after intial then completes
// intial resolve give 1 which is passed to custom callback as sec and becomes 2
// any time sec > 2 catch error
wait(0).then(wait).then( sec => console.log(sec)).catch( err => console.log(err))
wait(1).then(wait).then( sec => console.log(sec)).catch( err => console.log(err)) 
// rejected
wait(2).then(wait).then( sec => console.log(sec)).catch( err => console.log(err)) 
