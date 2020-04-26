let mp = new Map()
mp.set(0,1)
mp.set(1,2)
mp.set(2,4)
// using iterator
let it  = mp[Symbol.iterator]()
for ( let i of it )
{
    console.log(i)
}
// keys print
for( i of mp.keys()) console.log(i)
// values print
for( i of mp.values()) console.log(i)
// both key value pair
for( i of mp) console.log(i)