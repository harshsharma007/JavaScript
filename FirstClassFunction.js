/*
    First-Class Functions

    1. Functions are treated the same way as any other value.
        1.1 Functions can be assigned to variables, array values, object values.
        1.2 Everything that isn't primitive is an object.
        1.3 Can be returned from functions.
    2. Allows for the creation of higher-order functions.
        2.1 Either takes one or more functions as arguments or returns a function
        2.2 map(), filter(), reduce(). These are three most famous high order function
    
    Map does an operation that can be done to an array.
    It maps a particular function to every single value in the array and get back an array where the values
    in the array are the result of passing the original values into some given function.

    Filter is another high order function, it expects a function and the passed function can either return true
    or false.
    Filter retains the values that return true and gets rid of the values that return false.

    Reduce an array of multiple values and reduces it into a single value.
    It takes a function that expects two arguments where the first argument is some accumulator and it marches
    down each value and returns that accumulator to the next value.
    And the second argument is whatever next in that array.
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
}
console.log(add(1, 2))

console.log(x.reduce(add))