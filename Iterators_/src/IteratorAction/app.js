const Arr = [1,3,5];
// change iterators working 

Arr[Symbol.iterator] = () =>{
    
    let val = 10;
    
    return { 
        // next function   
        "next": ()=> {
            val++;
            // return object
            return {
                done : val <= 13 ? false : true,
                value : val
            }
            
        }
    }
}

let it2 = Arr[Symbol.iterator]()
console.log(it2)

// iterate

for( let i of Arr )
{
    console.log(it2["next"]())
}