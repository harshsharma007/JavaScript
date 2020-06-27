/*
    How can we use IIFE to solve closure problems?
    We have created a function that returns a function that console log x and pass in i.
    Now, we can immediately invoke that function with i.
    This creates a closure by using an IIFE.
*/

function makeFunctionArray() {
    const arr = []

    for (var i = 0; i < 5; i++) {
        arr.push((function (x) {
            return function () { console.log(x) }
        })(i))
    }
    return arr
}
const functionArr = makeFunctionArray()
functionArr[0]()

/*
    This is not something we use everyday.
    But this is something that it helps to know, how libraries get imported by using an IIFE.
    So, lot of variables that are declared while creating a library don't pollute the global scope.
*/