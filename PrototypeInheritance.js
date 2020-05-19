/*
    Non-primitive types have a few properties/methods associated with them.
        Array.prototype.push()
        String.prototype.toUpperCase()
    Each object stores a reference to its prototype.
    Properties/methods defined most tightly to the instance have priority.
*/

//Array.push()
const arr = []
arr.push('value')
arr.push('value1')

console.log(arr)

//String.toUpperCase()
const str = 'Test'
console.log(str.toUpperCase())

//The below piece of code will show result only on Browser console.
console.log(arr.__proto__)
console.log(arr.__proto__.__proto__)
//The purpose to write above code is to show, which all methods are associated with an Object.

/*
    Most primitive types have Object wrappers
    String()
    Number()
    Boolean()
    Object()
    (Symbol())

    All of the primitive values have wrappers that give them access to a bunch of methods. JavaScript 
    automatically do boxing.
*/

//Below code would not be executed because it does not makes any sense
//42.toString()

//But in order to type cast 42 into a string then below is the way.
const num = 42
console.log(num.toString())

//Similarly, prototype of 42 won't exist
//42.__proto__

//But prototype of num would exist
console.log(num.__proto__)

/*
    Another way to find out if a value is an instance of some type, you can do x instance of number.
    Because x is actually not of type capital Number, it's just boxed around that number object for your
    reference.
*/