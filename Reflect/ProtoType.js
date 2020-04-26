class Person {
    constructor()
    {
        this.age = "GOOGLE"
    }
}

let proto = {
    name : "cool",
    age : 19
}

Person.prototype.name = "Gag"

let obj1 = new Person()
// find prototype
Reflect.getPrototypeOf(obj1)
console.log(obj1.name)
// change prototype here only value set by prototype.name is overwriiten
Reflect.setPrototypeOf(obj1,proto)
console.log(obj1.name)
// updated prototype
Reflect.getPrototypeOf(obj1)
