// date mdn

let myDate = new Date();
console.log(typeof myDate);
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleString());

// let myCreatedDate = new Date(2024, 4, 23);
let myCreatedDate = new Date(2024, 4, 23, 13, 12);
// let myCreatedDate = new Date("2023-05-23");
// let myCreatedDate = new Date("05-23-2024");
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now();
// gives a number in milli seconds, and its calculated form 1 jan, 1970, refer mdn docs
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// Try to compare in milli seconds , eg : who came first
// console.log(Math.floor(Date.now()/1000));

// console.log(myTimeStamp.getMonth()+1);
// myTimeStamp is a number so can't apply this function on that number

// console.log(typeof myTimeStamp);
// console.log(typeof myCreatedDate);

// console.log(myCreatedDate.getMilliseconds());
// console.log(myCreatedDate.getMonth() + 1);
// console.log(myCreatedDate.getDate()); // gives date of month
// console.log(myCreatedDate.getDay()); // gives day of week
// console.log(myCreatedDate.getMilliseconds()); // gives 0 by default
console.log(myCreatedDate.getTime()); // time in milliseconds from 1970, 1 jan

// myDate.toLocaleString('default', {
//     weekday: "long"
//     // We can customize our own date formats.
// })


