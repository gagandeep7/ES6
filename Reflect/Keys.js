class Person {
    constructor(name)
    {
        this.name = name
        this.age = 19
    }

    get names()
    {
        return this.name
    }
}
let obj = Reflect.construct(Person,["Gag"])
Reflect.ownKeys(obj)// return the values inside constructors