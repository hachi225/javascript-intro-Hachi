var sum = 0

function accumulate(elem){
    if(typeof(elem) =="number"){
        sum += elem
    }
}


console.log(megasum(1))
console.log(megasum(1,2,3))
console.log(megasum(1,2,3,4))
console.log(megasum(1,`hola`,3))