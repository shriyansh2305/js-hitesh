const tinderUser = new Object();
// const tinderUser = {};
// The above one is singleton object and rest are same

tinderUser.id = "123ab"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

// nesting of objects is possible

const regularUser = {
    email: "abc@gmail.com", 
    fullname: {
        userfullname: {
            firstname: "Shriyansh",
            lastname: "Kumar"
        }
    }
}
// console.log(regularUser.fullname.userfullname.firstname)
// console.log(regularUser.fullname?.userfullname.firstname) // called as optional chaining, used when getting requests from api and that fullname doesnot exists

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// const obj3 = {obj1, obj2};

// const obj3 = Object.assign(obj1, obj2); // obj 1 will get changed as that is working as target object

// const obj3 = Object.assign({}, obj1, obj2);

// using spread operator
const obj3 = {...obj1, ...obj2}

// console.log(obj1)
// console.log(obj3)


const users = [
    {
        name: "Shriyansh", 
        email: "abc@gmail.com"
    },
    {
        name: "Shriyansh", 
        email: "abc@gmail.com"
    },
    {
        name: "Shriyansh", 
        email: "abc@gmail.com"
    },
]

// console.log(users[0])

// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// They return an array, we will use them while dealing with the dbases 

// console.log(tinderUser.hasOwnProperty("isLoggedIn"))
// console.log(tinderUser.hasOwnProperty("isLogged"))

// De-structuring of objects
const course = {
    courseName: "js in hindi",
    price: 999,
    courseInstructor: "Hitesh"
}

// console.log(course.courseInstructor);

const {courseInstructor: instructor} = course

console.log(instructor)
// very helpful in react.

// JSON: Java Script Object Notation

