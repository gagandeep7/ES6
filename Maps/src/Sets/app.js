// only unique values 
let  set = new Set([1,2,3,2,3,1])
for(e of set)
{
    console.log(e) // 1 2 3 only 
}
set.add(4)
set.delete(2)
for(e of set)
{
    console.log(e) // 1 2 3 only 
}
console.log(set.has(4))

