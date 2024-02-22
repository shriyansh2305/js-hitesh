// array
// resizable, mixed datatypes, 0-based indexing, shallow copy => share same reference point => if one changes other will get affected

const myArray = [1, 2, 3, 4 ,5, true, "shriyansh"];
const myHeros = ["shaktiman", "naagraj"];

const myArray2 = new Array(1, 2, 3, 4, 5);

// myArray.push(9);
// console.log(myArray);
// myArray.pop();
// console.log(myArray);

// shift and unshift are O(n) and time consuming wrt performance.
// myArray.unshift(9);
// console.log(myArray);
// myArray.shift();
// console.log(myArray);

// console.log(myArray.includes(9));
// console.log(myArray.indexOf(9));
// console.log(myArray.indexOf(5));

// const newArray = myArray.join('-');
// join returns a string with , separated by default
// console.log(myArray);
// console.log(newArray);
// console.log(typeof myArray);
// console.log(typeof newArray);


// slice and splice
console.log("A ", myArray);
// takes index for start and end
const mna1 = myArray.slice(2, 5);
console.log(mna1);
console.log("B ", myArray);
// start index and length
const mna2 = myArray.splice(2, 3);
console.log(mna2);
console.log("C ", myArray);
// spice changes array but slice not

// Doubt: myArray was const, how it got changed
// Array values got changed, still pointing to the same reference
// myArray = myArray2;
// console.log(myArray);
// This will throw an error.






