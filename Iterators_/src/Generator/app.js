// create generator 
// * for generator it returns an iterator
function *select()
{
    yield  "Gagan"
    yield  "Cool"

}
// store iterator in varialble
let it = select()
// call iterator
console.log(it.next())
console.log(it.next())
console.log(it.next())
