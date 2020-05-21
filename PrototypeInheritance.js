/*
    What is JavaScript Object Prototypes?
    All JavaScript objects inherit properties and methods from a prototype.

    Non-primitive types have a few properties/methods associated with them.
        Array.prototype.push()
        String.prototype.toUpperCase()
    Each object stores a reference to its prototype.
    Properties/methods defined most tightly to the instance have priority.
*/

//Example of Object Prototypes
class Person {
    constructor(first, last, age, eyeColor) {
        this.firstName = first
        this.lastName = last
        this.age = age
        this.eyeColor = eyeColor
    }
}

var me = new Person('Harsh', 'Sharma', 31, 'Brown')
var meOf = new Person('Harsh', 'Sharma', 31, 'Brown')

/*
    We cannot add a new property to an existing object constructor. This will not add nationality property in
    Person.
*/
Person.nationality = "Indian"
console.log(me)

/*
    Below piece of code will add nationality property to me Object only. But, it will not add the property to
    meOf
*/
me.nationality = "Indian"
console.log(me.nationality)
console.log(meOf.nationality)

/*
    The JavaScript prototype property allows you to add new properties to object constructors.
    The JavaScript prototype property also allows you to add new methods to object constructors.
*/

//Now, nationality will be added to every object of Person.
Person.prototype.nationality = "Australian"
console.log(meOf.nationality)

//To define a method.
Person.prototype.name = function () {
    return this.firstName + ' ' + this.lastName
}
console.log(me.name())

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

/*
    Why we use a reference to prototype?
    JavaScript is often described as a prototype-based language - to provide inheritance, objects can have a
    prototype object, which acts as a template object that it inherits methods and properties from.

    What's the alternative?
    The alternative is to clone every single, to deep copy every single prototype every single time. But,
    this is expensive because you have to do deep copy everytime, plus memory of object starts to get pretty
    large. Like, if you have an array of 100 different things, all 100 of those, deep copying every single
    prototype gets pretty big.

    What is the danger of storing a reference to the prototype, rather than copying the whole thing?
    If you change it, then it changes for every single value of that type.
*/

//Example of danger of storing a reference to the prototype.
const i = 42
console.log(i.toString())
Number.prototype.toString = function () {
    return "100"
}
console.log(i.toString())

/*
    So, now i.toString() will now return 100 instead of 42. Not only this will impact i varirable but, it will
    also affect all the future variables.
*/
const j = 20
console.log(j.toString())