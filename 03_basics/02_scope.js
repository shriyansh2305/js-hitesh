// var c = 100

let a = 100
if(true){
    // let a = 10
    const b = 20
    // var c = 300
    // console.log(a)
}

// console.log(a)
// console.log(b)
// console.log(c)

// +++++++ interesting ++++++++++++++

console.log(addOne(5)); // this works 
function addOne(num){
    return num+1
}
// console.log(addTwo(5)); // this won't work
const addTwo = function(num){
    return num+2;
}
console.log(addTwo(5));

