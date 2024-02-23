const user = {
    username: "Shriyansh", 
    price: 999, 
    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website.`)
        // console.log(this)
    }
}

// user.welcomeMessage();
// user.username = "Sam"
// user.welcomeMessage();

// console.log(this)
// here, it is {} empty object, but in browser, it is Window.

// function chai(){
//     // console.log(this)
//     let username = "Kittu"
//     console.log(this.username)
//     // undefined
// }

// const chai = function(){
// //     let username = "Kittu"
// //     console.log(this.username)
//     console.log(this)
// }
// const chai = () => {
//     let username = "Kittu"
//     console.log(this)
//     console.log(this.username)
//      undefined
// }
// chai();


// const addTwo = (num1, num2) => {
//     return num1 + num2
//     // explicit return => when written using {}
// }

const addTwo = (num1, num2) => ( num1 + num2 )

const getusername = () => ( {username: "Shriyansh"} )

// implicit return => no need of writing "return"

console.log(getusername())
console.log(addTwo(3, 5))