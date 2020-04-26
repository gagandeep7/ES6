let num = [1,2,3,4]

num[Symbol.toPrimitive] = () =>{
    // sum of element of array
    let sum = 0;
    num.forEach(e => e = e*2 )
    return sum
}

// + calls toPrimitive Symbol
// add +1 to the sum of elements of array
console.log(num + 1)