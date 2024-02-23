// Immediately Invoked Function Expression

// We want some functions to be executed immediately
// Sometimes, we get pollution from global scope, then we use it

( function chai(){
    // named iife
    console.log(`DB CONNECTED`)
})();
// here, we need to use ; to stop the above function's context

( (username) => {
    // unnamed iife
    console.log(`DB CONNECTED TWO ${username}`)
})("Kittu");