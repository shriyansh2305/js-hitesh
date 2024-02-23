// singleton -> when we declare using constructor Object.create
// object literals -> a way of declaring object
const mySym = Symbol("key1");
const JsUser = {
    name: "Shriyansh", 
    "fullName": "Shriyansh Kumar",
    "full Name": "Shriyansh Kumar", // this can not be accessed using . notation
    [mySym]: 0,
    age: 21, 
    location: "Kolkata",
    email: "kk@gg.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}
// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser.fullName);
// console.log(JsUser["fullName"]);
// console.log(JsUser.full Name); // can not access like this if key contains space
// console.log(JsUser["full Name"]);

// console.log(JsUser[mySym]);
// console.log(JsUser.mySym); // can not access symbol using .
// console.log(typeof(JsUser[mySym]));
// here, typeof is giving us the type of value associated with that key not the key's type which is symbol.

// to overwrite a value or add a new key value pair:

// JsUser.email = "abc.gmail.com"
// JsUser.id = 1234

// console.log(JsUser.email)
// console.log(JsUser.id)
// console.log(JsUser)

// If we don't want to make any changes, then we do freeze

// Object.freeze(JsUser);
// JsUser.email = "xyz@google.com" // we won't get any error but the value will not change.
// console.log(JsUser);

JsUser.greeting = function() {
    console.log("Hello JS User");
}
JsUser.greeting2 = function() {
    console.log(`Hello JS User, ${this.fullName}`);
}

console.log(JsUser.greeting); // returns reference of that fxn
console.log(JsUser.greeting()); // undefined returned why?
console.log(JsUser.greeting2()); // undefined returned why?
// this is used to reference the same object, more later






