/*
   These 3 methods are used to control the invocation of the function.

   1. "this" refers to an object that's set at the creation of a new execution context (function invocation).
      In other words, another stack frame.
   2. "this" in JavaScript is slightly different from "this" in other languages.
   3. In the global execution context, "this" refers to global object.
   4. If the function is called as a method of an object, "this" is bound to the object the method is 
      called on. A method is a term for a key value pair in an object where the value is a function. That 
      key is considered a method. So, if a function is called as a method of an object, "this" is bound 
      to that object that function is called on.
*/

const person = {
   name: 'Jordan',
   greet: function () {
      console.log(this.name)
   }
}

/*
   "this" is a part of a function which is defined as a method on this object.
   Method is a key where the value is a function.
   In this case, person.greet is considered a method because greet is this function.
*/

person.greet() //Case 1

/*
   When we call greet method as shown above, this.name gets bound to the name Jordan.
*/

const greet = person.greet
greet() //Case 2

/*
   What would be the value of "this" for Case 2?
   Now greet is a global object. So the value of this.name would be undefined. Because name is not a key 
   on that global object. And, when we try to de-reference a key which is not defined globally we get 
   undefined.
*/

name = 'Harmony'
/*
   "this" refers to global object. If console.log(this.name) is executed on the browser it will return 
   value of the name 'Harmony'. Since, "this" is not a global object in VS code or Node.js. So, we have 
   to use window object to fetch the value of name variable.
*/
console.log(this.name)

const friend = {
   name: 'David',
   greet: function () {
      console.log('greet name', this.name) //David
      console.log('global name', name) //Harmony
   }
}

console.log(friend.greet())

/*
   Bind()
   We can explicitly bind some object to any particular function.
*/

friend.greet = person.greet.bind({ name: 'this is a bound object' })
friend.greet()

person.greet.call({ name: 'this is a bound object' })
person.greet.apply({ name: 'this is a bound object' })

/*
   Difference between Bind, Call and Apply?
   Bind returns a new function.
   Call and Apply rather than returning a new function they will immediately invoke that function.
   E.g. person.greet.bind returns a new function where "this" is automatically bound.

   Bind returns a new function which we store in greet and invoke greet later.
   Call and Apply immediately invoked that.
*/

/*
   Understanding Call, Apply and Bind in detail.

                       +-------------------+-------------------+
                       |                   |                   |
                       |      time of      |       time of     |
                       |function execution |    this binding   |
                       |                   |                   |
   +-------------------+-------------------+-------------------+
   |                   |                   |                   |
   | function object   |      future       |       future      |
   |        f          |                   |                   |
   |                   |                   |                   |
   +-------------------+-------------------+-------------------+
   |                   |                   |                   |
   |   function call   |        now        |         now       |
   |        f()        |                   |                   |
   |                   |                   |                   |
   +-------------------+-------------------+-------------------+
   |                   |                   |                   |
   |     f.call()      |        now        |         now       |
   |     f.apply()     |                   |                   |
   |                   |                   |                   |
   +-------------------+-------------------+-------------------+
   |                   |                   |                   |
   |     f.bind()      |       future      |         now       |
   |                   |                   |                   |
   +-------------------+-------------------+-------------------+
*/

/*
   They all attaches this into function and the difference is in the function invocation.
   
   call attaches this into function and executes the function immediately
*/

var personCall = {
   name: 'James Smith',
   hello: function (thing) {
      console.log(this.name + ' says hello ' + thing)
   }
}

personCall.hello('world') //output: James Smith says hello world
personCall.hello.call({ name: 'Jim' }, 'world') //output: Jim says hello world

/*
   bind attaches this into function and it needs to be invoked
*/

var personBind = {
   name: 'James Smith',
   hello: function (thing) {
      console.log(this.name + ' says hello ' + thing)
   }
}

personBind.hello('world') //output: James Smith says hello world
var helloFunc = personBind.hello.bind({ name: 'Jim' }) //output: Jim says hello world
helloFunc('world')

//Another syntax for bind
var helloFuncNew = personBind.hello.bind({ name: 'Jim' }, 'world')
helloFuncNew()

/*
   apply is similar to call except that it takes an array-like object instead of listing the arguments out
   one at a time:
*/

function personContainer() {
   var person = {
      name: 'James Smith',
      hello: function () {
         console.log(this.name + ' says hello ' + arguments[1])
      }
   }
   person.hello.apply(person, arguments)
}
personContainer('world', 'mars') 
// output: "James Smith says hello mars", note: arguments[0] = "world" , arguments[1] = "mars"

/*
   Other way to set "this" manually is by using ES6 arrow notation. ES6 arrow notation will bind "this" 
   to be whatever "this" is at the time we have declared the function rather than at the time we have 
   invoked the function.
*/

const newPerson = {
   name: 'newPerson',
   greet: () => { console.log(this.name) }
}

newPerson.greet()

/*
   newPerson.greet() will console log 'undefined'. Why?
   Because "this" is a global object. ES6 arrow notation will bind "this" to be whatever the value is at 
   the time of writing.
*/

/*
   Arrow functions - a new feature introduced in ES6 - enabling writing concise functions in JavaScript. 
   While both regular and arrow functions work in a similar manner, yet there are certain interesting 
   differences between them, as discussed below.
*/

/*
   Syntax of regular functions vs Syntax of arrow functions
*/

let square = function (x) {
   return (x * x)
}

let squareNew = (x) => {
   return (x * x)
}

/*
   UNLIKE REGULAR FUNCTIONS, ARROW FUNCTIONS DO NOT HAVE THEIR OWN THIS.
*/

let user = {
   name: 'Watch',
   G1: () => {
      console.log('this.name', this.name) //No this binding here.
   },
   G2: function () {
      console.log('this.name', this.name) //this binding works.
   }
}

/*
   Availability of arguments objects.
   Arguments objects are not available in arrow functions, but are available in regular functions.
*/

let userNew = {
   show() {
      console.log(arguments)
   }
}
userNew.show(1, 2, 3)

let userArrow = {
   show: () => {
      console.log(arguments)
   }
}
userArrow.show(1, 2, 3)

/*
   Using new keyword
   Regular functions created using function declarations or expressions are 'constructible' and 'callable'.
   Since regular functions are constructible, they can be called using the 'new' keyword. However, the
   arrow functions are only 'callable' and not 'constructible'. Thus, we will get a run-time error on 
   trying to construct a non-constructible arrow functions using the new keyword.
*/

let x = function () {
   console.log(arguments)
}
new x(1, 2, 3)

let y = () => {
   console.log(arguments)
}
//new y(1, 2, 3) Throw an exception. Because it is not constructible.