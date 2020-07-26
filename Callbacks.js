/*
    1. Callbacks control flow with asynchronous calls.
    2. Execute function once asynchronous call returns value.
        2.1 Program doesn't have to halt and wait for value.
    
    Q. What is callback hell?
    A. When we have multiple nested callbacks then it creates a callback hell. And it gets messy and hard to
    read. To alleviate callback hell, we have promises.
*/

function doSomething(callback) {
    callback(1)
}

/*
    A custom callback function can be created by using the callback keyword as the last parameter. It can then
    be invoked by calling the callback() function at the end of the function. The typeof operator is optionally
    used to check if the argument passed is actually a function.
*/

doSomething(console.log)

function doSomethingAsync(callback) {
    setTimeout(function () { callback(1) }, 1000)
}

doSomethingAsync(console.log)

/*
    What is a callback function?
    In JavaScript, functions are objects. Can we pass objects to functions as parameters?
    Yes

    So, we can also pass functions as parameters to other functions and call them inside the other functions.
    Sounds complicated? Let me show that in an example below:
*/

function print(callback) {
    callback()
}

/*
    The print() function takes another function as a parameter and calls it inside. This is valid in JavaScript
    and we call it a "callback". So a function that is passed to another function as a parameter is a callback
    function. But that's not all.

    Why do we need callback functions?
    JavaScript runs code sequentially in top-down order. However, there are some cases that code runs (or must
    run) after something else happens and also not sequentially. This is called asynchronous programming.

    Callbacks make sure that a function is not going to run before a task is completed but will run right after
    the task has completed. It helps us develop asynchronous JavaScript code and keeps us safe from problems
    and errors.

    In JavaScript, the way to create a callback function is to pass it as a parameter to another function, and
    then to call it back right after something has happened or some task is completed. Let's see how.
*/

/*
    How to create a callback?
    To understand what I've explained above, let me start with a simple example. We want to log a message to
    the console but it should be after 3 seconds.
*/

const message = function () {
    console.log("This message is shown after 3 seconds.")
}
setTimeout(message, 3000)

/*
    There is a built-in method in JavaScript called "setTimeout", which calls a function or evaluates an
    expression after a given period of time (in milliseconds). So here, the "message" function is being called
    after 3 seconds have passed.

    In other words, the message function is being called after something happened (after 3 seconds passed for
    this example), but not before. So the message function is an example of a callback function.
*/

/*
    What is an Anonymous Function?
    Alternatively, we can define a function directly inside another function, instead of calling it. It will
    look like this:
*/

setTimeout(function () {
    console.log("This message is shown after 3 seconds.")
}, 3000)

/*
    As we can see, the callback function here has no name and a function definition without a name in JavaScript
    is called as an "anonymous function". This does exactly the same task as the example above.
*/

/*
    Callback as an Arrow function
    If you prefer, you can also write the same callback function as an ES6 arrow function, which is a newer
    type of function in JavaScript.
*/

setTimeout(() => {
    console.log("This message is shown after 3 seconds.")
}, 3000);