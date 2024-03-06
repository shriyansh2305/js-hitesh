// for-of: Here, object word is not object of JS, it is considered as broader term, it can have, array, strings, objects

const arr = [1, 2, 3, 4, 5]

// for (const num of arr) {
//     console.log(num);
// }

const greetings = "Hello World!"

// for (const greet of greetings) {
//     if(greet == ' '){
//         continue;
//     }else{
//         console.log(`Each character is: ${greet}`)
//     }
// }

// Maps : unique key-value pairs, and maintains the order

const map = new Map()

map.set('IN', 'India')
map.set('USA', 'United State of America')
map.set('Fr', 'France')
map.set('IN', 'India')

// console.log(map)

// for (const pr of map) {
    // pr is an array of size 2
//     console.log(pr[0]);
//     console.log(pr[1]);
// }

// for (const [key, value] of map) {
//     console.log(key, ':- ', value)
// }

// no error, but also no output, can't iterate using for-in
// for (const key in map) {
//     console.log(key)
// }

// Iterating objects

const myObject = {
    'game1': 'NFS',
    'game2': 'GTA'
}
// console.log(myObject)
// error: myObject is not iterable using for-of
// for (const game of myObject) {
//     console.log(game)
// }


// for-in loop: gives keys for object and numbers
for (const key in myObject) {
    // console.log(`${key} is shortcut for ${myObject[key]}`)
}

const programming = ["js", 'rb', "py", "java", "cpp"]

// for (const key in programming) {
//    console.log(programming[key])
// }

// for-each loop: prototype in arrays, already injected for arrays, 

// array_name.forEach(callback_fxn);

// programming.forEach( (language) => {
//     console.log(language)
// } )

// programming.forEach( function(value) {
//     console.log(value)
// })

function printMe(item){
    console.log(item)
}
// give reference only, don't execute
// programming.forEach(printMe)

// for-each not just has value, but has index and the entire array also

programming.forEach( (value, idx, arr) =>{
    // console.log(value, idx, arr)
} )


// array of objects

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    }
]

myCoding.forEach(  (object) => {
    console.log(object.languageName)
})
