class Mobile {
    constructor()
    {
        this.number = "7009093819";
    }
}
class Name {
    constructor()
    {
        this.name = "Gagan";
    }
}

let obj1 = new Name()
let obj2 = new Mobile()
// combine two different objects
let obj = Object.assign(obj1,obj2);
console.log(obj)
// obj is proto of first arggument
obj.__proto__ === Name.prototype ? "yes" : "no";

let obj3 = Object.assign({},obj1,obj2)
obj3.__proto__ === Object.prototype ? "yes" : "no";
 
