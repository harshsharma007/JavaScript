/*
    Immediately Invoked Function Expression
    
    A function expression that gets invoked immediately.
    It also creates a closure.
    A nameless function that gets invoked immediately.
    The benefit of using an IIFE is, it doesn't add to or modify global object.
    As they are just statements that are immediately invoked, they do not add to the global object.
*/

const sayHello = (function () {
    var message = 'Hello!'

    function sayHello() {
        console.log(message)
    }

    return sayHello
})()

console.log('typeof message:', typeof message)
console.log(sayHello.toString())
sayHello()

/*
    Why IIFE is useful?
    Scope of the variable "count" is limited only within the function and only return functions that have
    an access to those variables. Due to which, count variable is not accessible in the global scope.
*/

const counter = (function () {
    let count = 0

    return {
        inc: function () { count = count + 1 },
        get: function () { console.log(count) }
    }
})()

counter.get()
counter.inc()
counter.get()

/*
    Mastering JavaScript: Mastering Immediately-Invoked Function Expressions
*/

/*
    Understanding functions inside out and then learning how to exploit them to write modern, clean
    JavaScript code is a critical skill for becoming a JavaScript ninja.

    One of the often used coding patterns with functions has got a fancy name for itself:
    Immediately-Invoked Function Expression. Or more dearly known as IIFE and pronounced as "iify".

    Before we can understand what an IIFE is and why we need one, we need to review a few fundamental
    concepts around JavaScript functions quickly.

    The natural function definition
    Developers new to JavaScript are naturally comfortable with the following syntax when dealing with
    functions.
*/

function sayHi() {
    console.log('Hello, World')
}

sayHi()

/*
    This way of creating a function is called "a function definition" or "a function declaration" or
    "a function statement". Usually, developers new to JavaScript have no trouble using this syntax as
    it closely resembles functions/methods in other popular programming languages.

    These function definitions always start with function keyword and are always followed by a name for
    the function. You can't omit the name as it's invalid syntax.

    Function expressions
    This is when things start to get more interesting in JavaScript. Let's see how a function expression
    looks like.
*/

var msg = 'Hello, World'
var sayHiVar = function () {
    console.log(msg)
}
sayHiVar()

/*
    In the above example, the function on the right-hand side of the assignment operator is often called
    a "function expression". They are everywhere in JavaScript. Most callbacks you might have written
    are often function expressions.

    You might have used these function expressions without understanding the underpinnings. But mastering
    them will give you some secret JavaScript superpowers.

    So the important concept to remember here is that functions are almost like any other values in
    JavaScript. They can be on the right-hand side of an assignment operator, or they can be passed as
    arguments to other functions.
*/

/*
    Anonymous function expressions
    Well, you already know what they are. The above example was an anonymous function expression. They are
    anonymous because they don't have a name following the function keyword.

    Named function expressions
    Function expressions can have names. The most boring and universally explained usage of these named
    function expressions is with recursion. Don't worry much about these now as you can master IIFE without
    understanding named function expressions.
*/

var fibo = function fibonacci() {
    /*
        Some Code
    */
}

/*
    So the difference here is that the function expression has a name "fibonacci" that can be used inside
    that function expression to call itself recursively. (There is more to it like the function name
        shows up in stacktraces and etc, but let's not worry about them in this tutorial).
*/

/*
    Now that you have learned function definitions and function expressions, let's dive right into the
    secret world of IIFEs. They come in a few stylistic variations. Let's first see a variation that's
    really, really easy to understand.
*/

!function () {
    console.log('Hello from IIFE!')
}()

/*
    That's a function that died immediately after it came to life.

    Now let's understand that not so intuitive syntax: "!"
    1. As we saw before, a function statement always start with the function keyword. Whenever JavaScript
        sees function keyword as the first word in a valid statement, it expects that a function
        definition is going to take place. So to stop this from happening, we are prefixing "!" in-front
        of the function keyword on line 1. This bascially enforces JavaScript to treat whatever that's
        coming after "!" as an expression.
    
    2. But the most interesting stuff happens on line 3 where we execute that function expression
        immediately.
    
    So, we have a function expression that's immediately invoked after it's created. And that is called
    an IIFE irrespective of the stylistic variation used to achieve this effect.

    The above stylistic variation can be used by replacing "!" with "+", "-" or even "~" as well.
    Basically any unary operator can be used. All that the first character, "!", is doing here is to make
    that function into an expression instead of a function statement/definition. And then we execute
    that function immediately.
*/

void function () {
    console.log('Hello from IIFE!')
}();

/*
    Again void is bascially forcing the function to be treated as an expression. All the above patterns
    are useful when we are not interested in the return value from the IIFE.
 
    But then what if you wanted a return value from the IIFE and you want to use that return value
    elsewhere?
*/

/*
    Classical IIFE style
    The IIFE pattern we have seen above is easy to understand. So I started with that style first instead
    of the other more traditional and widely used style.
 
    As we saw in the above IIFE examples, the key to IIFE pattern is taking a function and turning it into
    an expression and executing it immediately.
 
    First, let's see yet another way to make a function expression then!
*/

(function () {
    console.log('I am not IIFE yet!')
});

/*
    In the above code, a function expression is wrapped in parentheses. It's not yet an IIFE as that
    function expression is never ever executed. Now to convert that code into IIFE, we have following
    two stylistic variations:
*/

// Variation 1
(function () {
    console.log('I am an IIFE!')
}());

// Variation 2
(function () {
    console.log('I am an IIFE, too!')
})();

/*
    Now we have got two IIFEs in action. It might be really tough to notice the difference between
    Variation 1 and Variation 2.
 
    1. In Variation 1, on line 3, parentheses () for invoking the function expression is contained inside
    the outer parentheses. Again outer parentheses are needed to make a function expression out of that
    function.
 
    2. In Variation 2, on line 3, parentheses () for invoking the function expression is outside the
    wrapping parentheses for the function expression.
 
    Both variations are used widely.
*/

/*
    Let's nail this down through the wall again by seeing an example that works, and two examples that
    don't work. We will start naming our IIFEs from now as using anonymous functions are usually never
    a good idea.
*/

// Valid IIFE
(function initGameIIFE() {
    /*
        All your magical code to initalize the game!
    */
})()

// Following two are invalid IIFE examples

function nonWorkingIIFE() {
    /*
        Now you know why you need those parentheses around me!
        Without those parentheses, I am a function definition, not an expression.
        You will get a syntax error.
    */
} //(); -> Syntax error that's why commented

/*
    function () {
        You will get a syntax error here as well!
    }()
*/

/*
    You need a function expression to form an IIFE. Function statements/definitions are never used for
    creating IIFEs.

    IIFEs and private variables
    One thing that IIFEs are really good at is to do with their ability to create a function scope for the
    IIFE. Any variables declared inside the IIFE are not visible to the outside world.
*/

(function IIFE_initGame() {
    // Private variables that no one has access to outside this IIFE
    var lives
    var weapons

    init()

    // Private function that no one has access to outside this IIFE
    function init() {
        lives = 5
        weapons = 10
    }
})()

/*
    In this example, we have declared two variables inside the IIFE and they are private to that IIFE.
    No one outside the IIFE has access to them. Similarly, we have an init function that no one has
    access to outside the IIFE. But the init function can access those private variables.

    Next time whenever you are creating a bunch of variables and functions in global scope that no one
    uses outside your code, just wrap all of that in an IIFE and get a lot of good JavaScript karma for
    doing that. Your code will continue to work, but now you are not polluting global scope. Also you
    are shielding your code from someone who may change your globals accidentally, or sometimes
    intentionally!
*/

/*
    IIFEs with a return value
    If you don't need a return value from an IIFE, then you could always use the first stylistic IIFE
    variation that we saw with unary operators like !, +, void etc.

    But another really important and powerful feature of IIFEs is that they can return a value that can
    be assigned to a variable.
*/

var result = (function () {
    return 'From IIFE'
})()

console.log(result);

/*
    1. In this variation, we have an IIFE that has a return statement on line 2.
    2. When we execute the above code, line 5 logs the message with the return value from the IIFE.
 
    Basically, the IIFE is executed, immediately of course and then the return value from it is assigned
    to the result variable. This is a really powerful pattern that we are going to use as we look at the
    example of module pattern.
*/

/*
    IIFEs with parameters
    Not only IIFEs can return values, but IIFEs can also take arguments while they are invoked.
*/

(function IIFE(msg, times) {
    for (var i = 1; i <= times; i++) {
        console.log(msg)
    }
})('Hello!', 5);

/*
    1. In the above example, on line 1, IIFE has two formal parameters named msg, times respectively.
    2. When we execute the IIFE on line 5, instead of the empty parentheses () we have seen so far, we
    are now passing arguments to the IIFE.
    3. Line 2 and 3 use those parameters inside the IIFE.

    This is a really powerful pattern and we see this often in jQuery code and in other libraries as well.
*/

/*
    (function($, global, document) {
        use $ for jQuery, global for window
    })(jQuery, window, document)

    In the above example, we are passing jQuery, window and document as arguments to the IIFE on line 3.
    The code inside the IIFE can refer to them as $, global, document respectively.

    Here are a few advantages of passing these to the IIFE.
    1. JavaScript always does scope lookups from the current function's scope and keeps searching in
    higher scopes until it finds an identifier. When we pass document on line 3, that's the only time
    when we are doing a scope lookup beyond local scope for the document. Any references in the IIFE to
    document will never need to be looked up beyond the local scope of the IIFE. Same applies to jQuery
    as well. Performance gain by this may not be huge based on how trivial or complex the IIFE code is,
    but still it's a useful trick to know.

    2. Also, JavaScript minifiers can safely minify the parameter names declared in a function. If we
    did not pass these as parameters, minifiers don't minify direct references to document or jQuery as
    they are outside the scope of this function.
*/

/*
    Classical JavaScript module pattern
    Now that you have mastered IIFEs, let's see an example of module pattern that puts IIFEs and closures
    on steroids. We will implement a classic Sequence singleton object that works seamlessly without
    anyone being able to accidentally corrupt the current sequence value.

    We will write this code in two steps so we understand what's happening incrementally.
*/

var Sequence = (function sequenceIIFE() {
    // Private variable to store current counter value.
    var current = 0

    // Object that's returned from the IIFE.
    return {
    }
})();

console.log(typeof Sequence);

/*
    1. In the above example, we have an IIFE that returns an object.
    2. We also have a local variable in the IIFE named current.
    3. The return value of the IIFE, which is an object in this example is assigned to the Sequence
    variable.

    Now, let's improve this by adding a few functions on the object that we return.
*/

var SequnceNew = (function sequenceIIFE() {
    // Private variable to store current counter value.
    var current = 0

    // Object that's returned from the IIFE.
    return {
        getCurrentValue: function () {
            return current
        },
        getNextValue: function () {
            current = current + 1
            return current
        }
    }
})()

console.log(SequnceNew.getNextValue()) //1
console.log(SequnceNew.getNextValue()) //2
console.log(SequnceNew.getCurrentValue()) //2

/*
    1. In this example, we add two functions on the object that we return from the IIFE.
    2. getCurrentValue function that returns the value in current variable.
    3. Add getNextValue function that increments the value in current by 1 and then returns the value
    in current.

    Since current variable in private to the IIFE, no one but the functions that have access to it
    through closure can modify or access the current variable. Now that's a really powerful JavaScript
    pattern that you have learned. It combines the power of both IIFEs and closures.

    This is a very basic variation on the module pattern. There are more patterns, but almost all of them
    use an IIFE to create a private closure scope.
*/

/*
    When you can omit parentheses
    Parentheses around the function expression basically force the function to become an expression
    instead of a statement. But when it's obvious to the JavaScript engine that it's a function expression,
    we don't technically need those surrounding parentheses as shown below.
*/

var resultA = function () {
    return "From IIFE!"
}()

/*
    In the above example, function keyword isn't the first word in the statement. So JavaScript doesn't
    treat this as a function statement/definition. Similarly there are other places where you can omit
    parenthesis when you know it's an expression.

    But I always prefer to use the parenthesis even in this case. Using parenthesis improves readability
    by stylistically hinting the reader on the first line that the function is going to be an IIFE. They
    don't have to scroll to the last line of the function to realize what they just read through was an
    IIFE after all!
*/