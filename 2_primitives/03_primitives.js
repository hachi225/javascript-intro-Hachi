// Any value you use is of a certain type. JS has the following primitives types

//Numbers
-1
3.14
100

//strings
"Can be with double quotes"
'Or single quotes'
"It's my birthday"

//booleans
true// true
false//false

//undefined: This is the type of variables that are declared but not assigned

var someVar //This is undefined

//Null: Used to explisity declare that a value has no value
null

//Rule of thumb: The js interpreter uses undefined. Developers (us) use null

//Objects are very similar to python dicts
var someObject = {}

someObject["SayHello"] = function(){
    console.log("hola")
}

someObject.SayHello()

//Functions

function fisrtFunction(name){
    console.log("Hola", name);
}

fisrtFunction("Boolean")