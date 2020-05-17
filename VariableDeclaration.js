const firstName = "Harsh"
const lastName = 'Sharma'
const age = 31

console.log(firstName)

/*
    We can use "" or '' to define the value of a variable. It is not an issue in JavaScript.
*/

//Array in JavaScript

const arr = [
    'string',
    42,
    function () {
        console.log('Hi')
    }
]

/*
    You can have all sorts of different variable types in JavaScript array.
*/

//To call the above array
arr[2]()

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
}