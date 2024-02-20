// Primitive

// 7 : String, Number, Boolean, null, undefined, Symbol, BigInt

// In JavaScript, Number (with an uppercase "N") is not a primitive data type; it's actually a built-in object. The primitive data type for representing numeric values is number (with a lowercase "n"). JavaScript has a Number object that provides methods and properties for working with numbers, but it is not used for typical numeric assignments or operations.

const score = 100;
const scoreValue = 100.3

const isLoggedIn = false;
const outsideTemp = null; // note that it is unknown, not zero
let userEmail;
let userEmail2 = undefined;

let id = Symbol('123');
let anotherId = Symbol('123');

// console.log(id === anotherId);

let bigNumber = 12282839222n

// Reference (Non-Primitive)

// Array, Objects, Functions

// Is JS statically or dynamically typed language? -> dynamically typed as variable types are determined at run time.
const heros = ["shaktiman", "naagraaj", "doga"];

let myObj = {
    name: "kittu",
    age: 22,
}

const myFunction = function(){
    console.log("hello world");
}

// typeof Operator


// ++++++ Stack and Heap Memory in JS +++++++++++++

// Stack (Primitive), Heap (Non-Primitive)

// All the primitive values are created in stack, and we will get a copy of that. 
// Non-primitive are created in heap and we will get reference of them.

let myName = "shriyansh"

let anotherName = myName;

anotherName = "kittu"

// console.log(myName)
// console.log(anotherName)

let objectOne = {
    email: "user@google.com",
    upi: "upi@ybl"
}

let objectTwo = objectOne

objectTwo.email = "new@yahoo.com"

// Note: Objects one and Two are created in stack, but they will get the reference of same memory in the heap.

console.log(objectOne.email)
console.log(objectTwo.email)

