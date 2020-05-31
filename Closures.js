/*
    Functions that refer to variables declared by parent function.
    The closure is a behavior whereby functions that refer to variables declared by a parent function still
    exist and it's possibly because of scoping.
*/

//Example of problem created by closure
function makeFunctionArray() {
    const arr = []
    for (var i = 0; i < 5; i++) {
        arr.push(function () {
            console.log(i)
        })
    }

    return arr
}

const arr = makeFunctionArray()
arr[0]() //It would have printed 0 but instead it prints 5