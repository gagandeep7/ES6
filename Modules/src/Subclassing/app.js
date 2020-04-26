// extending class
class modifiedArray extends Array {
    // adding method
    convert(){
        let returnArray = [];
        // modify array 
        this.forEach(e=> returnArray.push(`${2 * e}`) )
        return returnArray
    }
}
// create object of subclass
let newArr = new modifiedArray()
// push elements
newArr.push(4)
newArr.push(8)
newArr.push(16)
newArr.push(20)
// call convert method
console.log(newObj.convert())