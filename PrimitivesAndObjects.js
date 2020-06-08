/*
    Primitives vs Objects
        Everything other than primitives is an object.
        Primitives are immutable.
        Objects are mutable and are stored by reference.
*/

//How to create an Object?

const o1 = new Object()
o1.firstName = "Harsh"
o1.lastName = "Sharma"
o1.isTeaching = false
o1.greet = function () {
    console.log('Hi')
}

//Another way to create an Object

const o2 = {}
o2.firstName = "Harsh"
o2.lastName = "Sharma"
o2.isTeaching = false
o2.greet = function () {
    console.log('Hi')
}

//Another way to create an Object

const o3 = {
    firstName: 'Harsh',
    lastName: 'Sharma',
    isTeaching: false,
    greet: function () {
        console.log('Hi')
    },
    //Below is an example of nested Object in JavaScript
    address: {
        street: 'Main Street',
        number: 123
    }
}

//To call a function inside an object
console.log(o3.greet())

//The above three examples represent three different ways of declaring objects.

/*
    Ques. Can numbers be placed as a key in an Object?
    Ans.  Yes. The value would be casted as a string and would be used as a key.
*/

const o4 = {
    1: 'One'
}

console.log(o4[1])

/*
    Here 1 would be casted as a string and would be used as a key. Now, 1 is behaving as a key.
    Anything inside [] will be coerced into a string. If we use o4[1] or o4["1"] both are same.
*/

//To read the values from the object below is the syntax for that.

console.log(o3.address)
console.log(o3.address.street)
console.log(o3.address["number"])

/*
    If we don't know the key and want to assign a dynamic value to the key, which means at runtime we will
    decide what key we want to pick up for the value, then below is the syntax
*/

const key = 'number'
console.log(o3.address[key]) //So value of the key is dynamically assigned.