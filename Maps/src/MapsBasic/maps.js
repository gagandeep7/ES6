let obj1 = {
    name:["gag","cool","deep"]
}
let {name:n} = obj1

let mp = new Map()
mp.set('1',n[1])
mp.set('2',n[0])
mp.set('1',n[2])// overwrites the key value
mp.get('1')// output key value
mp.delete('2')//delete key value pair
mp.clear()//delete whole
// new inputs

