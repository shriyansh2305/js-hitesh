function myName(){
    console.log("K")
    console.log("I")
    console.log("T")
    console.log("T")
    console.log("U")
}

// myName();

function addTwoNumbers(num1, num2) {
    // console.log(num1 + num2);
    return num1 + num2
}
const result = addTwoNumbers(2, 3);
// console.log("Result: ", result);
// addTwoNumbers(2, "3");
// addTwoNumbers(2, "a");
// addTwoNumbers(2, null);


function loginUserMessage(username = "No Username Provided"){
    return `${username} just logged in.`
}

// console.log(loginUserMessage());
// console.log(loginUserMessage("Kittu"));


// passing variable arguments

// ... is here rest operator
// both rest and spread are ... but depending on use case, gets the name
function calculateCartPrice(...num1){
    return num1;
}
function calculateCartPrice2(val1, val2, ...num1){
    return num1;
}
// we will get an array, other operations will be done afterwards.
// console.log(calculateCartPrice(100, 200, 300, 400));
// console.log(calculateCartPrice2(100, 200, 300, 400));


// Passing object
const user = {
    username: "Kittu", 
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and Price is ${anyobject.price}`)
}

// handleObject(user);

// handleObject({
//     username: "Shriyansh", 
//     prices: 299
// })

// Try to change the anyobject.username from function and check whether user.username is changed or not?

const myArray = [1, 2, 3, 4, 5]

function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myArray))
console.log(returnSecondValue([9, 8, 7, 6, 5]))








