
//  to  add the args dynamically
let sum = 0
// rest operator for dynamic args
let Add = (...args) =>{
    args.forEach((item)=>{
        sum+=item
    })

    return sum
}

ans = Add(19,20,27)
console.log(ans)