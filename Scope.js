/*
    Scope is a term that's talking about variable lifetime, and how long these variables actually exist.
    There are a couple of different types of scoping:
        Lexical scoping (var): from when they're declared until when their function ends.
        Block scoping (const, let): until the next } is reached.
*/

/*
    Difference between const and let is that const can't be updated. If I set a variable to be a constant, it
    means I'm not going to update that reference later, whereas let can be updated.
*/

const num = 50
//num = 20 //It will throw an error.

let numLet = 50
numLet = 51
numLet++

//But let variable can't be declared twice. The below will fail.
//let numLet = 20

//But the below operation can be performed.
const obj = {}
//obj = {} //It will throw an error because obj is already declared. But below operation can be performed.
obj.a = 'a'

/*
    But why it works?
    Because the pointer is still pointing to the same object. Reference of the object has not changed.
    We mutated that object, but it's still pointing to that same place in memory.
*/

var numVar = 50
numVar = 51
var numVar = 52
/*
    It will not throw an error. Because vars are older ways to declare variables and they don't have the
    same protection that let and const do.
*/

console.log(numVar)
/*
    It will display 52 because 52 is the new value and this concept is known as the concept of shadowing.
*/

/*
    IMPORTANT INTERVIEW QUESTION
    WHAT WOULD BE THE VALUE OF VARIABLE a
*/

var a = 1;
function b() {
    a = 10;
    return;

    function a() {}
}

b();
console.log(a);

/*
    Below is the explanation of the above code
    1. The global a is set to 1
    2. b() is called
    3. function a() {} is hoisted and creates a local variable a that masks the global a
    4. The local a is set to 10 (overwriting the function a)
    5. The global a (still 1) is alerted
*/