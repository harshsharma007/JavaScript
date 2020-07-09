/*
    1. this refers to an object that's set at the creation of a new execution context (function invocation).
       In other words, another stack frame.
    2. this in JavaScript is slightly different from this in other languages.
    3. In the global execution context, this refers to global object.
    4. If the function is called as a method of an object, 'this' is bound to the object the method is called on.
       A method is a term for a key value pair in an object where the value is a function. That key is
       considered a method. So, if a function is called as a method of an object, this is bound to that object
       that function is called on.
*/

console.log(this)