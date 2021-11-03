function sum(numA, numB){
    console.log(arguments)
    var numC = numA + numB
    return numC
}
//when the arguments are passed, the function call undefined + undefined
console.log(sum()) // =>NOT a number
console.log(sum(1,2))

// numC is a local variable of the sum function
//console.log(numC); // This is an error. numC only excists within the function!!

