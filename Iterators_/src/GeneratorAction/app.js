let obj = {
    // referencre to generator not calling
    name:"gag",
    [Symbol.iterator] : gen
};

function *gen()
{
    // generate 5 random number upto 5
    for(let i = 0 ; i < 5 ; i++)
    {   
        // throw error
        try {
        yield (Math.random() * 5)
        // catch error 
    } catch (error) {
        console.log(error)
        }
    }
}
// for of to traverse  over iterator until done : false

let cnt = 0;
for(let e of obj)

{   
    // overwrite value by erroe
    // if(cnt==1) console.log(obj[Symbol.iterator]().throw("error"))
    if(cnt==2) console.log(obj[Symbol.iterator]().return("error"))
    console.log(e)
    cnt++
}




