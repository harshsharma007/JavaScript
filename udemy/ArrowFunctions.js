// Normal function

function printMyName(name) {
    console.log(name)
}

printMyName('Max')

// Arrow Function

const arrowMyName = (name) => {
    console.log(name)
}

arrowMyName('Harsh')

// Alternatives to this syntax, regarding the argument list are:

// 1. If we have only one param in the function
const arrowMyNameOneParam = name => {
    console.log(name)
}

arrowMyNameOneParam('Harsh')

// 2. If we have no param in the function
const arrowMyNameNoParam = () => {
    console.log('Harsh')
}

arrowMyNameNoParam()

// 3. If we have more than one param in the function
const arrowMyNameMoreParam = (name, age) => {
    console.log(name, age)
}

arrowMyNameMoreParam('Harsh', 32)

// Alternative to the function body

const multiply = (number) => {
    return number * 2
}

console.log(multiply(2))

/*
    If you have this case where all you do in your function is return and have no other code in there
    you can omit the curly braces and write this in one line and then you also have to omit the return
    keyword. Below is the very short version of writing multiply function
*/

const multiplyNew = number => number * 2

console.log(multiply(2))