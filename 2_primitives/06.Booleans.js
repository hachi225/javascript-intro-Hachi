var boolValue = true
console.log(typeof(boolValue))
var strValue = "true"
console.log(typeof(strValue))

//Boolean operators
//Negative {!}
console.log(!boolValue)
//AND {&&}
var result = boolValue && boolValue
console.log(result)
// OR (||)
var resultTwo = boolValue || !boolValue
console.log(resultTwo)