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

const person = {
    name: 'Jordan',
    greet: function () {
        console.log(this.name)
    }
}

/*
   this is a part of a function which is defined as a method on this object.
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
   What would be the value of this for Case 2?
   Now greet is a global object. So the value of this.name would be undefined. Because name is not a key on
   that global object. And, when we try to de-reference a key which is not defined globally we get undefined.
*/

const friend = {
    name: 'David'
}

/*
   Bind()
   We can explicitly bind some object to any particular function.
*/

friend.greet = person.greet.bind({ name: 'this is a bound object' })
friend.greet()