/*
    First-Class Functions

    In JavaScript, functions are first-class objects, which means they can be:
        1. Stored in a variable, object or array.
        2. Passed as an argument to a function.
        3. Returned from a function.
    
    Storing a function
    Functions can be stored in three ways:
        1. Store in a variable: let fn = function doSomething() { }
        2. Store in an object: let obj = { doSomething : function() { } }
        3. Store in an array: arr.push(function doSomething() { })
    
    In the first and third example, I used a named function expression. The function expression defines
    a function as part of a larger expression. The line of code doesn't start with function.

    Function as an argument
    In the next example, the function doSomething is sent as an argument to doAction().
        doAction(function doSomething(){})
    doSomething is a callback.
    A callback is a function passed as an argument to another function.

    Higher order functions
    A higher order function is a function that takes another function as an input, returns a function or
    does both.

    1. Functions are treated the same way as any other value.
        1.1 Functions can be assigned to variables, array values, object values.
        1.2 Everything that isn't primitive is an object.
        1.3 Can be returned from functions.
    2. Allows for the creation of higher-order functions.
        2.1 Either takes one or more functions as arguments or returns a function
        2.2 map(), filter(), reduce(). These are three most famous high order function
    
    Map does an operation that can be done to an array.
    It maps a particular function to every single value in the array and get back an array where the 
    values in the array are the result of passing the original values into some given function.

    Filter is another high order function, it expects a function and the passed function can either return 
    true or false. Filter retains the values that return true and gets rid of the values that return false.

    Reduce an array of multiple values and reduces it into a single value.
    It takes a function that expects two arguments where the first argument is some accumulator and it 
    marches down each value and returns that accumulator to the next value. And the second argument is 
    whatever next in that array.
*/

/*
    Map Example
    Map has basically mapped function addOne to each value in the array and returns the new value.
    Value of x array is [0, 1, 2, 3] but the result after map is [1, 2, 3, 4]
*/

const x = [0, 1, 2, 3]
function addOne(number) {
    return number + 1
}
console.log(addOne(1))

console.log(x.map(addOne))

/*
    Filter Example
    Values 0 and 1 are not greater than 1, that's why they are filtered out.
*/

function isGreaterThanOne(number) {
    return number > 1
}
console.log(isGreaterThanOne(100))
console.log(isGreaterThanOne(1))

console.log(x.filter(isGreaterThanOne))

/*
    Reduce Example
    It starts by invoking first two arguments of an array 0 and 1. Passes 1 and the next argument is 2.
    So, 1 plus 2 is 3. Which means, 3 is the one argument and 3 (from array) is the second argument.
    It returns 6.
*/

function add(x, y) {
    return x + y
    /*
        Here,
            x is the index like 0, 1, 2, 3.
            y is the value of array.
    */
}
console.log(add(1, 2))

console.log(x.reduce(add))