class Person {
    constructor(name)
    {
        this.name = name
        this.age = 19
    }
}
let obj2 = {
    name : "Gag",
    class : "CSE"
}
let obj = Reflect.construct(Person,["Gag"])
Reflect.defineProperty(obj,"gag",{
    writable : true ,
    value : ["gag"],
    // to delete make configurable 
    configurable : true
})
// writable can be modified
console.log(obj)
Reflect.deleteProperty(obj,"gag")
console.log(obj)