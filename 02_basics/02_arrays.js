const arr1 = [1, 2, 3, 4];
const arr2 = [5, 6, 7, 8];

// arr1.push(arr2);
// console.log(arr1);
// arr1 takes arr2 as a single element
// const arr3 = arr1.concat(arr2)
// concat returns a new array
// console.log(arr3);
// const arr3 = ["shriyansh", true];
// const allArray = [...arr1, ...arr2, ...arr3];
// console.log(allArray);

// const depthArray = [1, 2, 3, [4, 5, 6], [7, [8, 9]]];
// console.log(depthArray);

// const flatArray = depthArray.flat(Infinity);
// console.log(flatArray);


console.log(Array.isArray("shriyansh"));
console.log(Array.from("shriyansh"));

console.log(Array.from({name: "shriyansh"})); // returns a NULL array when unable to create array
// In case of objects we need to specify how we want to create array

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));