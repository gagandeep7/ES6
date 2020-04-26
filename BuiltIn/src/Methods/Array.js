// array of 10 size
let arr = Array(10)
// fill all with 8
arr.fill(8)
// start and end value for fill
arr.fill(12,5,10)
console.log(arr)
// array passing values list 
arr = Array.of(10,20,30)
console.log(arr)
// return multiple of 15 (only one find then break)
console.log(arr.find( num => num % 15 == 0 ))

// copy
console.log(arr.copyWithin(0,2))
// enteries
let it  = arr.entries();
for ( let e of it )
{
    console.log(e)
}