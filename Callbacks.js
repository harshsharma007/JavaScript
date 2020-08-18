/*
    A callback is a function that is to be executed after another function has finished executing - hence
    the name 'call back'.

    More complexly put: In JavaScript, functions are objects. Because of this, functions can take functions
    as arguments and can be returned by other functions. Functions that do this are called higher-order
    functions. Any function that is passed as an argument is called a callback function.

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

doSomething(console.log)

/*
    Why do we need Callbacks?
    For one very important reason - JavaScript is an event driven language. This means that instead of
    waiting for a response before moving on, JavaScript will keep executing while listening for other events.
    Lets look at a basic example
*/

function first() {
    console.log(1)
}

function second() {
    console.log(2)
}

first()
second()

/*
    As you would expect, the function first is executed first, and the function second is executed second,
    logging the following to the console
    1
    2

    But what if function first contains some sort of code that can't be executed immediately? For example,
    an API request where we have to send the request then wait for a response? To simulate this action,
    were going to use setTimeout which is a JavaScript function that calls a function after a set amount
    of time. We'll delay our function for 500 milliseconds to simulate an API request. Our new code will
    look like this:
*/

function firstNew() {
    setTimeout(function () {
        console.log(1)
    }, 500)
}

function secondNew() {
    console.log(2)
}

firstNew()
secondNew()

/*
    It's not important that you understand how setTimeout() works right now. All that matters is that you
    see we've moved our console.log(1), inside of our 500 millisecond delay. So what happens now when we
    invoke our functions?

    firstNew()
    secondNew()

    2
    1

    Even though we invoked the first() function first, we logged out the result of that function after the
    second() function.

    It's not that JavaScript didn't execute our functions in the order we wanted it to, it's instead that
    JavaScript didn't wait for a response from first() before moving on to execute second().

    So why show you this? Because you can't just call one function after another and hope they execute in 
    the right order. Callbacks are a way to make sure certain code doesn't execute until other code has
    already finished execution.
*/

/*
    Create a Callback
*/

function doHomework(subject) {
    console.log('Starting my ' + subject + ' homework.')
}

/*
    Above, we've created the function doHomework. Our function takes one variable, the subject that we
    are working on. Call your function.
*/

doHomework('Math')

/*
    Now, lets add in our callback as our last parameter in the doHomework() function we can pass in callback.
    The callback function is then defined in the second argument of our call to doHomework().
*/

function doHomeworkCallback(subject, callback) {
    console.log('Starting my ' + subject + ' homework.')
    callback()
}

doHomeworkCallback('Math', function () {
    console.log('Finished my homework.')
})

/*
    Callback functions don't always have to be defined in our function call. They can be defined elsewhere
    in our code like this:
*/

function doHomeworkNew(subject, callback) {
    console.log('Starting my ' + subject + ' homework.')
    callback()
}

function alertFinished() {
    console.log('Finished my homework.')
}

doHomeworkNew('Math', alertFinished)

/*
    This result of this example is exactly the same as the previous example, but the setup is a little
    different. As you can see, we've passed the alertFinished function definition as an argument during
    our doHomework() function call.
*/

/*
    A custom callback function can be created by using the callback keyword as the last parameter. It can then
    be invoked by calling the callback() function at the end of the function. The typeof operator is optionally
    used to check if the argument passed is actually a function.
*/

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