var one = "1"
var two = 2

var result = one * two

console.log(typeof(result))
console.log(result)

//Template Strings
//Allow us to inject variables into a string in a simple way
//Exampple

//Without template string
var str = "hola, este es el resultado: " + result + " con algo adicional de lo que sea"

//with template strings

var str2 = `Hola, este es el resultado: ${result} con algo adicional de lo que sea`

console.log(str);
console.log(str2);

var str3 = `Ejemplo de una expresion: ${1+2}`

console.log(str3)