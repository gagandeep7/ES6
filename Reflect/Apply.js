class Person{
    constructor(name)
    {
        this.name = name
        this.classes = "CSE-A"
    }

    greet(pre)
    {
        // here this is undefined
        console.log(`${pre} ${this.name}`)
    }
 }
 let obj2 = {
     name : "GAG"
 }
 let obj = new Person('Gagan')
  // here this was undefined /// here first arg is function .
//   THIS -> gagan but now THIS -> GAG
 Reflect.apply(obj.greet,obj2,["cool"]) // 2nd arg for this 3rd for 1st arg functions
 Reflect.apply(obj.greet,{},["cool"]) 
 obj.greet("cool")
//  