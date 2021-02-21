/*
    Q1.
    In the following code, I expected both a and b to be 3. However, a is undefined and b is 3. Why?
*/

(function () {
    var a = b = 3;
})();

console.log(typeof a)
console.log(b)

/*
    The issue here is that most developers understand the statement var a = b = 3; to be shorthand for:

    var b = 3
    var a = b

    But in fact, var a = b = 3; is actually shorthand for:

    b = 3
    var a = b

    Therefore, b ends up being a global variable (since it is not preceded by the var keyword) and is
    still in scope even outside of the enclosing function.

    The reason a is undefined is that a is a local variable to that self-executing anonymous function
*/

/*
    Q2.
    What would be the output of the below code?
*/

(function () {
    var a = b = 3;

    console.log(a)
    console.log(b)
})();

/*
    Output of both of the variables would be 3.
*/