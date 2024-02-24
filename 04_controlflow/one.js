// if

// if(condition){
//      statements
// }else{
        // statements when condition fails
// }

// <, >, <=, >=, ==, !=, ===(checks also the type), !==

// if( 2 !== "2"){
//     console.log("Executed");
// }

// It accepts all types like, string, bool, number
// C, C++ only, int, char
// let month = "feb"

// switch (month) {
//     case "jan":
//         console.log("January")
//         break;
//     case "feb":
//         console.log("February")
//         break;
//     case "march":
//         console.log("March")
//         break;
//     case "april":
//         console.log("April")
//         break;
//     default:
//         console.log("Default");
//         break;
// }

// truthy and falsy values

// falsy: false, 0, -0, BigInt 0n, "", null, undefined, NaN 
// truthy: rest all like "0", "false", " ", [], {}, function(){}

// array
// const myArray = []
// if(myArray.length>0){
//     console.log(myArray)
// }else{
//     console.log("Empty array received")
// }

// Objects
const myObj = {}
// console.log(Object.keys(myObj)) // array is returned

// if(Object.keys(myObj).length>0){
//     console.log(myObj)
// }else{
//     console.log("Empty Object received")
// }

// Some impt points:
// false is treated as 0 or '' 
// console.log(false == 0)
// console.log(false === 0)
// console.log(false == '     ')
// also giving true, donno why
// console.log(false === '')
// console.log(0 == '')
// console.log(0 === '')
// console.log('' == 0)
// console.log('' === 0)

// Fallback to handle error while receiving data from database
// Nullish Coalescing Operator (??): null and undefined
// takes the first non null and non-undefined value in the sequence 

let val1;

// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 10
val1 = null ?? 5 ?? 10
// in place of values, we will get response from different functions in our project, there will be very helpful
console.log(val1);

// ternary operator

// let value = 5;
// let value2 = value===7? 10 : 15
// console.log(value2)

// Note : ternary and Nullish are different
