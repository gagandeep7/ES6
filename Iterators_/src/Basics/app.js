const Arr = [1,3,5];

// store iterator function
let it = Arr[Symbol.iterator]();

for(let i  = 0 ; i < Arr.length ; i++)
{
    // calling iterable 
    console.log(it.next())
}


