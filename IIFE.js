/*
    Immediately Invoked Function Expression
    
    A function expression that gets invoked immediately.
    It also creates a closure.
    A nameless function that gets invoked immediately.
    The benefit of using an IIFE is, it doesn't add to or modify global object.
    As they are just statements that are immediately invoked, they do not add to the global object.
*/

const sayHello = (function () {
    var message = 'Hello!'

    function sayHello() {
        console.log(message)
    }

    return sayHello
})()

console.log('typeof message:', typeof message)
console.log(sayHello.toString())
sayHello()

/*
    Why IIFE is useful?
    Scope of the variable "count" is limited only within the function and only return functions that have
    an access to those variables. Due to which, count variable is not accessible in the global scope.
*/

const counter = (function () {
    let count = 0

    return {
        inc: function () { count = count + 1 },
        get: function () { console.log(count) }
    }
})()

counter.get()
counter.inc()
counter.get()