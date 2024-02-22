// ++++++++++ Nums ++++++++++++

const score = 400;

const balance = new Number(100);

// console.log(score);
// console.log(balance);

const str = balance.toString();
// console.log(typeof balance);
// console.log(typeof str);

// number of decimal digits
// console.log(balance.toFixed(2));

const otherNumber = 23123.7876

// console.log(otherNumber.toFixed(2));
// console.log(otherNumber.toPrecision(3));
// Take care of how many digits are there before decimal.

const hundreds = 1000000
// console.log(hundreds.toLocaleString("en-IN"));

// console.log(Number.MAX_VALUE);

// foo = new Number(5); 
// bar = new Number(5); 
// console.log(foo === bar)

// foo1 = 5; 
// bar1 = 5;  
// console.log(foo1 === bar1)
// console.log(foo === foo1)
// ++++++++++++ Maths ++++++++++++

console.log(Math);

// console.log(Math.abs(-4));
// console.log(Math.round(4.3));
// console.log(Math.round(4.6));
// console.log(Math.floor(4.6));
// console.log(Math.ceil(4.3));
// console.log(Math.sqrt(4));
// console.log(Math.min(1, 2, 3, 4));
// console.log(Math.max(1, 2, 3, 4));

// Math.random() gives us any random between [0, 1)
// to get a random number between l and h

// const x = Math.random();
// 0 <= x < 1
// 0 <= x * (max-min+1) < (max-min+1)
// min <= (x * (max-min+1)) + min < max+1
// min<= req_number <=max 
// const min = 10;
const max = 15;
console.log(Math.floor(Math.random()*(max-min+1))+min);








