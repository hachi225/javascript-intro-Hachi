function counter(firstValue){
    var currentValue = firstValue

    var logger = function () {
        console.log("El valor actual es: ", currentValue);
    }

    var increment = function(step){
        currentValue += step
        logger()
    }

    var decrement = function(step){
        currentValue -= step
        logger()
    }

    return {    inc: increment,
                dec: decrement}
}

var exampleCounterOne = counter(0)
var exampleCounterTwo = counter(5)

//They're independent!
exampleCounterOne.inc(1)
exampleCounterTwo.inc(1)

console.log("/////////////////////////////");

exampleCounterOne.dec(2)
exampleCounterTwo.dec(2)