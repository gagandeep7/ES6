let name = {
    name : "gagan",
    lname : "aujla"
}

let petname = {
    name : "gag"
}

name.__proto__ = Object.prototype;
petname.__proto__ = Object.prototype;
// now changing default proto of petname to name
Object.setPrototypeOf(petname,name);
// get from own obj
console.log(petname.name)
// not have in its own get from name proto 
console.log(petname.lname)