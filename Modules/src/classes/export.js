//  create class no comma for methods
class Person{
    constructor(name){
        this.name = name;
    }
    
    hello(){
        console.log(`my name is ${this.name}`)
    }

}

// static method
class Helper{
    static say = () => {
        console.log("static")
    }    
}

class Gag extends Person{
    constructor(age,name)
    {
        super(name)
        this.age = age
    }

    hello1 =  () => {
        console.log(`age is ${this.age}`)
        super.hello()
    }
    

}

let g1 = new Gag(21,"gag")
console.log(g1)
export {Gag,Helper,Person}