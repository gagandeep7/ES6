class Person {
    constructor(name)
    {
        this.name = name
    }

    get names()
    {
        return this.name
    }
}

let Gag = {
    name : "cool"
}
let obj = new Person("real")
console.log(Reflect.get(obj,'names'))
console.log(Reflect.get(obj,'names',Gag)) // here Gag is reciever so name of Gag is returned
console.log(Gag.name)
// Reciever is the object that refers to this so name of Gag is changed
Reflect.set(obj,'name',"what",Gag)
Reflect.set(obj,'name',"REAKLLLL")
console.log(Gag.name)
//  to check whether it has property 
console.log(Reflect.has(obj,"names"))