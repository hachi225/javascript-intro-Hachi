function megaSun(){
    //Traverse the arguments object and accumulate the sum
    var sum = 0
    for (var i =0; i < arguments.length; i++){
        //if the type of the i argument is a number, only then add it to the sum
        if(typeof(arguments[i]) == "number"){
            sum += arguments[i]
        }
    }
    return sum
}


console.log(megaSun(1));
console.log(megaSun(1,2,3));  // => 6
console.log(megaSun(1,2,3,4)); // => 10
console.log(megaSun(1,"hola",3)) // => 4