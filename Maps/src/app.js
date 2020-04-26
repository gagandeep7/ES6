let obj1 = {name:"gag"}
let obj2 = {name:"cool"}
let mp = new WeakMap()
// only objects as key as it store weak reference
// not loop as no itertor because some eleents are deleted
// used for garbage collection the obj which is not used get deleted in map
mp.set(obj1,"real")
mp.set({obj2:"cool"},"what")
mp.get(obj1)
