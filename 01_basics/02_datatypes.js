"use strict"; // treat all JS code as newer version

// alert(3 + 3); // we are using nodejs, not browser

console.log(3 
    + 
    3); // code readability should be high

console.log("shriyansh");
// number => 2 power 53 {int / float}
// bigint
// string => ""
// boolean => true/false
// null => standalone value => if a server is unable to send temperature value then insteead of sending 0, it should send null => no any value came [Represents the intentional absence of any object value.]
// undefined => value is not assigned
// symbol => unique

// object

console.log(typeof "kittu");
console.log(typeof null);  // object 
console.log(typeof undefined); // undefined


// The typeof operator in JavaScript has some quirks, and one of them is that when used with an array, it returns 'object'. This behavior can be confusing, but it's important to understand that arrays are a type of object in JavaScript.

// If you want to specifically check if a variable is an array, you can use Array.isArray():

// Base object serving as the prototype for all other objects
let myObject = new Object();

// Data structure for storing and manipulating lists of items
let myArray = new Array();

// Represents sequences of characters
let myString = new String("Hello, World!");

// Represents numeric values
let myNumber = new Number(42);

// Represents a logical value, either true or false
let myBoolean = new Boolean(true);

// Represents a reusable block of code
let myFunction = new Function('console.log("Hello from a function!");');

// Represents a date and time
let currentDate = new Date();

// Represents a regular expression for pattern matching
let regexPattern = new RegExp("[0-9]+");

// Represents an error object
let myError = new Error("This is an error");

// Provides mathematical functions and constants
let result = Math.sqrt(25);

// Provides methods for working with JSON data
let jsonData = '{"key": "value"}';
let parsedData = JSON.parse(jsonData);

// Collection of key-value pairs
let myMap = new Map();

// Collection of unique values
let mySet = new Set();
