/*
    == coerce the types
    === requires equivalent types

    typeof is used to check the type of a variable.
*/

const x = 42
console.log(typeof x)

//If we run the below piece of code, then the value returned is object

console.log(typeof null)

/*
    This is one of the strange things of JavaScript. Since, ES6 needs to have backward compatibility that's
    why it is impossible to change this behavior. If this is changed then according to ECMA the whole
    internet would break.
*/

/*
    When to use == and ===?
    Answer to this is never use ==. Because it would result in some strange behavior. Always use ===.
*/

/*
    What are falsy values?
    Falsy value is a value, which if cast to bool becomes false. As an example 0 and false.
    Below are some of the other examples
*/

console.log(Boolean(undefined))
console.log(Boolean(null))
console.log(Boolean(false))
console.log(Boolean(0))
console.log(Boolean(NaN))
console.log(Boolean(""))

/*
    On the other hand, any number greater than 0 is truthy. Below are some of the other examples.
*/

console.log(Boolean({}))
console.log(Boolean([]))
console.log(Boolean("Everything else"))