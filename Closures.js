/*
    The closure is a behavior whereby functions that refer to variables declared by a parent function still
    exist and it's possibly because of scoping.
    Or
    A closure is a function that has access to some variables that have already left scope.
*/

//Example of problem created by closure
function makeFunctionArray() {
    const arr = []

    for (var i = 0; i < 5; i++) {
        arr.push(function () {
            console.log(i)
        })
    }

    console.log(i)
    /*
        Value of i is 5. Because we iterated through the numbers 0 and 5. And by the time we got to 5, that
        was where i was left. Since it was declared with var, a var's lifecycle is till the function ends.
        That's why when arr[0]() is invoked it prints 5.
    */

    /*
        If we use let instead of var, then the value of let is retained to the next } only. If console.log(i)
        is printed in case of let, then it will throw an exception. And arr[0]() will work as expected and 
        will print 0.
    */

    /*
        What will happen if we have another variable i before for loop?
        If i is declared to be of type let or const then it will through an error because i cannot be duplicated.
        But, if i is declared as var then new variable will over-shadow the previous one.
    */

    return arr
}

const arr = makeFunctionArray()
arr[0]() //It would have printed 0 but instead it prints 5

function makeHelloFunction() {
    const message = 'Hello!'

    function sayHello() {
        console.log(message)
    }
    return sayHello
}

const sayHello = makeHelloFunction()

console.log('typeof message: ', typeof message)
console.log(sayHello.toString())

sayHello()

/*
    A closure is a function that has access to its outer function scope even after the outer function has
    returned. This means a closure can remember and access variables and arguments of its outer function
    even after the function has finished.
    Before we dive into closures, let's understand the lexical scope.

    What is a Lexical Scope?
    A lexical scope or static scope in JavaScript refers to the accessibility of the variables, functions
    and objects based on their physical location in the source code.
*/

let a = 'Global'

function outer() {
    let b = 'Outer'

    function inner() {
        let c = 'Inner'

        console.log(c)  //Inner
        console.log(b)  //Outer
        console.log(a)  //Global
    }

    console.log(a)  //Global
    console.log(b)  //Outer

    inner()
}
outer()
console.log(a)

/*
    Here the inner function can access the variables defined in its own scope, the outer function's scope,
    and the global scope. And the outer function can access the variable defined in its own scope and the
    global scope.

    So, a scope chain of the above code would be like this:

    Global {
        Outer {
            Inner
        }
    }

    Notice that inner function is surrounded by the lexical scope of outer function which is, in turn,
    surrounded by the global scope. 
*/

/*
    Practical examples of Closure
    Let's look at some practical examples of closures before diving into how closure work.
*/

//Example #1

function person() {
    let name = 'Peter'

    return function displayName() {
        console.log(name)
    }
}

let peter = person()
peter() //Peter

/*
    In this code, we are calling person function which returns inner function displayName and stores that
    inner function in peter variable. When we call peter function (which is actually referencing the
    displayName function), the name 'Peter' is printed to the console.

    But we don't have any variable named name in displayName function, so this function can somehow access
    the variable of its outer function peter even after that function has returned. So the displayName
    function is actually a closure.
*/