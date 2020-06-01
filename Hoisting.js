/*
    Hoisting is the process of virtually moving the variable or function definition to the beginning of the
    scope, usually for variable statement var and function declaration function fun() {...}

    When let (and also const and class, which have similar declaration behavior as let) declarations were
    introduced by ES2015, many developers including myself were using the hoisting definition to describe how
    variables are accessed. But after more search on the question, surprisingly for me hoisting is not the
    correct term to describe the initialization and availability of the let varirables.

    ES2015 provides a different and improved mechanism for let. It demands stricter variable declaration
    practices (you can't use before definition) and as a result better code quality.
*/

/*
    1. Error prone var hoisting
    Sometimes, I see a weird practice of variables var varname and functions function funName() {...}
    declaration in any place in the scope:
*/

/*
    Function hoisting
    Function hoisting is a behavior whereby a function definition declared at the very bottom of a file is
    actually available for use at the very top of the file as well.
*/
thisIsHoisted() //=> Will work

//thisIsNotHoisted() //=> Will not work, because const is not available for use until they're actually declared.
thisIsNotHoistedVar()

//var hoisting
console.log(num) //=> undefined
var num
num = 10
console.log(num) //=> 10

//function hoisting
console.log(getPi) //=> [Function: getPi]
console.log(getPi()) //=> 3.14

function getPi() {
    return 3.14
}

/*
    The variable num is accessed before declaration var num, so it is evaluated to undefined. The function
    getPi() {...} is defined at the end of file. However, the function can be called before declaration
    getPi(), as it is hoisted to the top of the scope.

    This is the classical hoisting.

    As it turns out, the possibility to first use and then declare a variable or function creates confusion.
    Suppose you scroll a big file and suddenly see and undeclared variable, how the hell it does appear here
    and where it is defined?
    
    Of course a practiced JavaScript developer won't code this way. But in the thousands of JavaScript GitHub
    repos is quite possible to deal with such code.

    Even looking at the code sample presented above, it is difficult to understand the declaration flow in the
    code. Naturally, first you declare or describe an unknown term. And only later make phrases with it. let
    encourages you to follow this approach with variables.
*/

/*
    2. Under the hood: variable lifecycles
    When the engine works with variables, their lifecycle consists of the following phases:
        I.   Declaration phase is registering a variable in the scope.
        II.  Initialization phase is allocating memory and creating a binding for the variable in the scope.
             At this step the variable is automatically initialized with undefined.
        III. Assignment phase is assigning a value to the initialized variable.
    
    A variable has uninitialzed state when it passed the declaration phase, yet didn't reach the initilization.

    Notice that in terms of variable lifecycle, declaration phase is a different term than generally speaking
    variable declaration. In simple words, the engine processes the variable declaration in 3 phases:
    declaration phase, initialization phase and assignment phase.
*/

/*
    3. var variables lifecycle
    Being familiar with lifecycle phases, let's use them to describe how the engine handles var variables.
        I.   Declaration phase & Initialization phase
        II.  Initialized state (variable === undefined)
        III. Assignment phase (variable = 'value')
        IV.  Assigned state (variable === 'value')
    
    Suppose a scenario when JavaScript encounters a function scope with var variable statement inside. The
    variable passes the declaration phase and right away the initialization phase at the beginning of the
    scope, before any statements are executed (step 1). var variable statement position in the function
    scope does not influence the declaration and initialization phases.

    After declaration and initialization, but before assignment phase, the variable has undefined value and
    can be used already.

    On assignment phase variable = 'value' the variable receives its initial value (step 2).

    Strictly hoisting consists in the idea that a variable is declared and initialized at the beginning of
    the function scope. There is no gap between declaration and initialization phases.

    Let's study an example. The following code creates a function scope with a var statement inside:
*/

function multiplyByTen(number) {
    console.log(ten) //=> undefined
    var ten
    ten = 10
    console.log(ten) //=> 10
    return number * ten
}
console.log(multiplyByTen(4)) // => 40

/*
    When JavaScript starts executing multiplyByTen(4) and enters the function scope, the variable ten passes
    declaration and initialization steps, before the first statement. So when calling console.log(ten), it is
    logged undefined. The statement ten = 10 assigns an initial value. After assignment, the line 
    console.log(ten) logs correctly 10 value.
*/

/*
    4. Function declaration lifecycle
    In case of a function declaration statement function funName() {...} it's even easier.

        I.  Declaration phase, Initialization phase and Assignment phase
        II. Assigned state (funName() can be invoked)
    
    The declaration, initialization and assignment phases happen at once at the beginning of the enclosing
    function scope (only one step). funName() can be invoked in any place of the scope, not depending on the
    declaration statement position (it can be even at the end).

    The following code sample demonstrates the function hoisting:
*/

function sumArray(array) {
    return array.reduce(sum)

    function sum(a, b) {
        return a + b
    }
}
console.log(sumArray([5, 10, 8]))

/*
    When JavaScript executes sumArray([5, 10, 8]), it enters sumArray function scope. Inside this scope,
    immediately before any statement execution, sum passes all 3 phases: declaration, initialization and
    assignment.
    This way array.reduce(sum) can use sum even before its declaration statement function sum(a, b) {...}
*/

/*
    5. let variable lifecycle
    let variables are processed differently than var. The main distinction is that declaration and initialization
    phases are splited.

        I.   Declaration phase
        II.  Uninitialized state (Accessing variable throws ReferenceError) aka Temporal dead zone
        III. Initialization phase (let variable)
        IV.  Initialized state (variable === undefined)
        V.   Assignment phase (variable = 'value')
        VI.  Assigned state (variable === 'value')
    
    Now, let's study a scenario when the interpreter enters a block scope that contains a let variable
    statement. Immediately the variable passes the declaration phase, registering its name in the scope (step 1).
    The interpreter continues parsing the block statements line by line.

    If you try to access variable at this stage, JavaScript will throw ReferenceError: variable is not defined.
    It happens because the variable state is uninitialized. variable is in the temporal dead zone.

    When interpreter reaches the statement let variable, the initilization phase is passed (step 2). Now the
    variable state is initialized and accessing it evaluates to undefined. The variable exits the temporal
    dead zone.

    Later when an assignment statement appears variable = 'value', the assignment phase is passed (step 3).

    If JavaScript encounters let variable = 'value', then initialization and assignment happen in a single
    statement.

    Let's follow an example. let variable number is created in a block scope:
*/

let condition = true
if (condition) {
    //console.log(number) => Throws ReferenceError
    let number
    console.log(number) //=> undefined
    number = 5
    console.log(number) //=> 5
}

/*
    When JavaScript enters if (condition) {...} block scope, number instantly passes the declaration phase.
    Because number has uninitialized state and is in a temporal dead zone, an attempt to access the variable
    throws ReferenceError: number is not defined. Later the statement let number makes the initialization.
    Now the variable can be accessed, but its value is undefined. The assignment statement number = 5 of
    course makes the assignment phase.

    const and class types have the same lifecycle as let, other than the assignment can happen only once.
*/

/*
    5.1 Why hoisting is not valid in let lifecycle
    As mentioned above, hoisting is variable's coupled declaration and initialization at the top of the scope.
    let lifecycle however decouples declaration and initialization phases. Decoupling vanishes the hoisting
    term for let.

    The gap between the two phases creates the temporal dead zone, where the variable cannot be accessed.
    In a sci-fi style, the collapsed hoisting in let lifecyle creates the temporal dead zone.
*/

/*
    6. Conclusion
    The freedom to declare variables using var is error prone.
    Based on this lesson, ES2015 introduces let. It uses an improved algorithm to declare variables and
    additionally is block scoped.

    Because the declaration and initialization phases are decoupled, hoisting is not valid for a let variable
    (including for const and class). Before initialization, the variable is in temporal dead zone and is
    not accessible.

    To keep variables declaration smooth, these tips are recommended:
        I.  Declare, initialize and then use variables. This flow is correct and easy to follow.
        II. Keep the variables as hidden as possible. The less variables are exposed, the more modular your
            code becomes.
*/

/*
    From edx.org
*/

//This function can be called at the top of a file.
function thisIsHoisted() {
    console.log('This is a function declared at the bottom of a file.')
}

/*
    Below code is also holds true for let keyword.
*/
const thisIsNotHoisted = function() {
    console.log('Should this be hoisted?')
}

/*
    The difference between thisIsHoisted() and thisIsNotHoisted() function is that thisIsNotHoisted is declared
    as const so, it can not be changed. Whereas, thisIsHoisted() is declared as function and can be changed.
*/

var thisIsNotHoistedVar = function() {
    console.log('Var should this be hoisted?')
}

/*
    When thisIsNotHoisted() and thisIsNotHoistedVar() is executed both returns different kind of exception.
    const thisIsNotHoisted() returns -> ReferenceError: thisIsNotHoisted is not defined
    var thisIsNotHoistedVar() returns -> TypeError: thisIsNotHoistedVar is not a function

    The difference between the function error of const and var is that
        When const or let is used, the variable is not declared at all. The variable does not exists at all.
        This is not hoisted and JavaScript does not know what that means.

        But in case of var, it hoists the declaration of the variable. So, it creates a variable called
        thisIsNotHoistedVar. However, it does not assign it a value until the code is executed. So, function
        thisIsNotHoistedVar exists. It's just equal to undefined. So, when it is invoked like a function,
        interpreter throws an error saying this is an undefined variable and it can't be invoked like a function,
        this is a TypeError.
    
    So, even though both of these things errored, the reason that they errored is slightly different.

    Why this happens?
    The reason is actually how JavaScript is executed.
    There are two phases in the execution of a JavaScript file.
    
    First phase
    Before executing any code, it has all of the text in front of it, but it hasn't executed anything,
    it just reads the entire file. Here it actually looks for anything wrong with the file. Let's say,
    an array is missing a comma that's something that's caught in the first reading.
    Then any function definitions just get saved in memory, so if somebody wants to use it they're able to.
    Variable initializations, if they're lexically scoped they will be declared, but they will not be initialized.
    Meaning anything declared with var will say this variable exists but it's not going to be set equal to
    anything until later.

    Second phase
    It is known as execution phase, whereby the code is actually executed. That is when things like const or
    let get invoked or get both declared and initialized.
*/