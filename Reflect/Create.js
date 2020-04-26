class Person{
   constructor(name)
   {
       this.name = name
       this.classes = "CSE-A"
   }
}
class Gag
{
    change_class(classes)
    {
        this.classes = classes
    }
} 
// assign class and constructor arg list as 2nd arg
let obj1 = Reflect.construct(Person,["Gag"])
console.log(obj1)
//  obj1 is instance of Person
console.log(obj1.__proto__ == Person.prototype)
// But we can change its instance
let obj2 = Reflect.construct(Person,["deep"],Gag)
console.log(obj2,(obj2.__proto__ == Person.prototype),(obj2.__proto__ == Gag.prototype))
// now Prototype is Gag constructor
console.log(obj2.classes)
obj2.change_class("CSE-B")
// class name change using prototype
console.log(obj2.classes)
