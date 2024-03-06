// const coding = ["python", "c", "C++", "java"]

// const values = coding.forEach( (item) => {
    //     console.log(item)
    //     return item
    // } )
    // for-each does not return anything, whether we return or not.
    // console.log(values)
    
    const myNums = [1, 2, 3, 4 , 5, 6, 7, 8, 9, 10]
    console.log(`Original Array: ${myNums}`);
    
// It takes a callback fxn
const filteredArray = myNums.filter( (num) => {
    return num > 5;
} )
console.log(`Filtered Array: ${filteredArray}`);

const mapArray = myNums.map( (num) => {
    return num * num;
} )
console.log(`mapArray : ${mapArray}`);

const reducedProduct = myNums.reduce( (acc, curr) => {
    // console.log(curr);
    // console.log(acc);
    return acc*curr;
}, 1)

console.log(`Reduced Product : ${reducedProduct}`);



// Chaining is possible

const chainedArray = myNums.map( (num) => num * 10 )
.map( (num) => num + 10)
.filter( (num) => num > 50)
.reduce( (acc, num) => acc + num, 0);
console.log(`Chained Array: ${chainedArray}`);


console.log(`Original Array: ${myNums}`);










































// map:
// The map function in JavaScript is a higher-order function that allows you to create a new array by applying a provided function to each element of an existing array. It iterates through the array, applies a transformation function to each element, and returns a new array containing the results.

// Syntax:

// javascript
// Copy code
// const newArray = array.map((currentValue, index, array) => {
//   // Transformation logic
//   return newValue;
// });
// Example:

// javascript
// Copy code
// const numbers = [1, 2, 3, 4, 5];
// const squaredNumbers = numbers.map(num => num * num);
// // Result: [1, 4, 9, 16, 25]



// filter:
// The filter function is another higher-order function that creates a new array by including only the elements that satisfy a specified condition. It iterates through the array, checks each element against the provided condition, and returns a new array with the elements that pass the test.

// Syntax:

// javascript
// Copy code
// const newArray = array.filter((currentValue, index, array) => {
//   // Condition logic
//   return condition;
// });
// Example:

// javascript
// Copy code
// const numbers = [1, 2, 3, 4, 5];
// const evenNumbers = numbers.filter(num => num % 2 === 0);
// // Result: [2, 4]



// reduce:
// The reduce function is used to accumulate values of an array into a single result. It iterates through the array, applying an accumulation function to each element and the accumulated result. It returns a single value that is the result of the accumulation.

// Syntax:

// javascript
// Copy code
// const result = array.reduce((accumulator, currentValue, index, array) => {
//   // Accumulation logic
//   return updatedAccumulator;
// }, initialValue);
// Example:

// javascript
// Copy code
// const numbers = [1, 2, 3, 4, 5];
// const sum = numbers.reduce((accumulator, num) => accumulator + num, 0);
// // Result: 15
// These higher-order functions provide a concise and expressive way to work with arrays, allowing you to perform transformations, filtering, and accumulations with a clean and readable syntax. They are powerful tools for functional programming and can lead to more maintainable and expressive code.

// In all cases, the original array remains the same after using these functions. This immutability is beneficial for preventing unintended side effects and making your code more predictable and easier to reason about. If you need to modify the original array, you would typically use other methods like forEach or traditional for loops.







