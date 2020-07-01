/*
    1. Callbacks control flow with asynchronous calls.
    2. Execute function once asynchronous call returns value.
        2.1 Program doesn't have to halt and wait for value.
*/

function doSomething(callback) {
    callback(1)
}

doSomething(console.log)

function doSomethingAsync(callback) {
    setTimeout(function () { callback(1) }, 1000)
}

doSomethingAsync(console.log)