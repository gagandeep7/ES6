class Student {
    constructor()
    {
        // default values
        this._name = "abc";
        this._age = 0;
        this._classs = "CSE";
    }

    // setter 

    set values(data)
    {
        this._name = data.name;
        this._classs = data.classs;
        this._age = data.age * 2;
    }

    // getter 
    get values()
    {
        return `name :${this._name } class ${this._classs} age ${this._age}`
    }
}

let s1 = new Student();
// default values
console.log(s1.values)
// pass obj data
s1.values = {name : "gag", age:21 , classs : "EEE" }
// updated
console.log(s1.values)
