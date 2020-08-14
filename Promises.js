/*
    Promises:
        1. Alleviate "callback hell"
        2. Allows you to write code that assumes a value is returned within a success function.
        3. Only needs a single error handler.
    
    JavaScript has an object called a Promise, P, using which we can alleviate callback hell by writing code
    that assumes that a value is going to be returned eventually.

    A big advantage of Promises is that we don't have to handle the error within every single callback.
*/

/*
    THIS IS AN EXAMPLE OF CHAINING PROMISES
*/

const url = ''

fetch(url)
    .then(function (res) {
        return res.json()
    })
    .then(function (json) {
        return ({
            importantData: json.importantData
        })
    })
    .then(function (data) {
        console.log(data)
    })
    .catch(function (err) {
        //Handles error
    })

/*
    In the example above:
    fetch is related to Promises and then is a callback method. We can create a chain of callback method in
    terms of then in which the function can expect different parameters.
    catch is bascially used to catch an error and it can handle any error.
*/

/*
    JavaScript is a synchronous programming language, but because of callback functions we can make it
    work like an Asynchronous Programming language.

    Promises has 2 parts:
    1. Creation of Promises
    2. Handling of Promises
*/

/*
    Creation of Promises
*/

let promise = new Promise(function (resolve, reject) {
    if (promise_kept)
        resolve('done')
    else
        reject(new Error('...'))
})

/*
    Promises don't return values immediately. It waits for the success or failure and then returns
    accordingly. This lets asynchronous methods return values like synchronous ones. Instead of returning
    values right away, async methods supply a promise to return the value.

    A Promise can be one of these states:
    1. pending - This is the initial state or state during execution of promise. Neither fulfilled nor
    rejected.
    2. fulfilled - Promise was successful.
    3. rejected - Promise failed.
*/

var promises = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve(console.log('Promise resolved'))
    }, 2000)
})
console.log(promises)

/*
    Handling and Consuming the Promise
*/

const isDone = new Promise()
const checkIfDone = () => {
    isDone
        .then(ok => {
            console.log(ok)
        })
        .catch(err => {
            console.error(error)
        })
}

/*
    Running .checkIfDone() will execute the isDone() promise and will wait for it to resolve, using the
    then callback. If there is an error it will be handled in the catch block.
*/

/*
    What is Promise.all()?
*/

async function sequence() {
    await Promise1(50)
    await Promise2(50)
    return 'done'
}

/*
    The above code takes 100ms to complete, not a huge amount of time but still slow.
    
    This is because it is happening in sequence. Two promises are returned, both of which takes 50ms to
    complete. The second promise executes only after the first promise is resolved. This is not a good
    practice, as large requests can be very time consuming. We have to make the execution parellel.
    
    This can be achieved by using Promise.all().
*/

/*
    The Promise.all() method returns a single Promise that resolves when all of the promises passed as an
    iterable have resolved or when the iterable contains no promises. It rejects with the reason of the
    first promise that rejects.
*/

async function sequence() {
    await Promise.all([Promise1(), Promise2()])
    return 'done'
}

/*
    The Promise.all() function resolves when all the promises inside the iterable have been resolved and
    then returns the result.
*/