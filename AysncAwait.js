/*
    Async/Await
    1. Introduced in ES2017
    2. Allows people to write async code as if it were synchronous.

    async keyword is used before function, which will let JavaScript know about the asynchronous behavior of
    the function. await is a keyword, which will wait for a value to come back before continuing the code.
*/

async function login(req, res, callback) {
    try {
        const user = await User.findOne({ email: req.body.email })
        const isMatch = await user.comparePassword(req.body.password)
        if (!isMatch)
            return res.status(401).send('Incorrect Password')

        const payload = { id: user_id, email: user.email }
        const token = await jwt.sign(payload, config.secret, {})

        user.token = token
        const success = await user.save()
        res.json({ token })
    }
    catch (err) {
        callback(err)
    }
}

/*
    Q. How JavaScript execute async functions when no await keyword is present?
    A. An async function can contain an await expression, that pauses the execution of the async function
       and waits for the passed Promise's resolution and then resumes the async function's execution and
       returns the resolved value.

       As you assumed, if no await is present the execution is not paused and your code will then be
       executed in a non-blocking manner.
*/

/*
    Promises give us an easier way to deal with asynchrony in our code in a sequential manner. Considering that
    our brains are not designed to deal with asychronicity efficiently, this is a much welcome addition.
    Async/Await functions, a new addition with ES2017 (ES8), help us even more in allowing us to write
    completely synchronous-looking code while performing asynchronous tasks behind the scenes.

    The functionality achieved using async functions can be recreated by combining promises with generators,
    but async functions give us what we need without any extra boilerplate code.
*/

/*
    In the following example, we first declare a function that returns a promise that resolves to a value of
    'scary clown' after 2 seconds. We then declare an async function and await for the promise to resolve before
    logging the message to the console.
*/

function scaryClown() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('scary clown')
        }, 2000)
    })
}

async function msg() {
    const msg = await scaryClown()
    console.log('Message: ', msg)
}

msg() //Message: scary clown

/*
    await is a new operator used to wait for a promise to resolve or reject. It can only be used inside an
    async function.
*/

/*
    The power of async functions becomes more evident when there are multiple steps involved:
*/

function who() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('scary clown')
        }, 200)
    })
}

function what() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('lurks')
        }, 300)
    })
}

function where() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('in the shadows')
        }, 500)
    })
}

async function msgNew() {
    const a = await who()
    const b = await what()
    const c = await where()
    console.log(`${ a } ${ b } ${ c }`)
}

msgNew()

/*
    A word of caution however, in the above example each step is done sequentially, with each additional step
    waiting for the step before to resolve or reject before continuing. If you instead want the steps to happen
    in parallel, you can simply use Promise.all to wait for all the promises to have fulfilled:
*/

async function msgPromiseAll() {
    const [a, b, c] = await Promise.all([who(), what(), where()])
    console.log(`${ a } ${ b } ${ c }`)
}

msgPromiseAll()

/*
    Promise.all returns an array with the resolved values once all the passed-in promises have resolved.
    In the above we also make use of some nice array destructing to make our code succinct.
*/

/*
    Promise-Returning
    Async functions always return a promise, so the following may not produce the result you're after:
*/
async function hello() {
    return 'Hello Alligator!'
}

const b = hello()
console.log(b)

/*
    Since what's returned is a promise, you could do something like this instead:
*/

async function helloA() {
    return 'Hello Alligator!'
}

const ba = helloA()
ba.then(x => console.log(x)) //Hello Alligator

//Or just

async function helloB() {
    return 'Hello Alligator!'
}

helloB().then(x => console.log(x)) //Hello Alligator

/*
    Different Forms
    So far with our examples we saw the async function as a function declaration, but you we can also define
    async function expressions and async arrow functions:

    Async Function Expression
    Here's the async function from our first example, but defined as a function expression:
*/

const msgA = async function () {
    const msg = await scaryClown()
    console.log('Message A:', msg)
}

/*
    Async Arrow Function
    Here's that same example once again, but this time defined as an arrow function:
*/

const msgB = async () => {
    const msg = await scaryClown()
    console.log('Message B:', msg)
}

/*
    Error Handling
    Something else that's very nice about async functions is that error handling is also done completely
    synchronously, using good old try..catch statements. Let's demonstrate by using a promise that will
    reject half the time:
*/

function yayOrNay() {
    return new Promise((resolve, reject) => {
        const val = Math.round(Math.random() * 1)

        val ? resolve('Lucky!!') : reject('Nope')
    })
}

async function msgC() {
    try {
        const msg = await yayOrNay()
        console.log('Message C:', msg)
    } catch (err) {
        console.log(err)
    }
}

msgC()
msgC()

/*
    Given that async functions always return a promise, you can also deal with unhandled errors as you would
    normally using a catch statement:
*/

async function msgD() {
    const msg = await yayOrNay()
    console.log('Message D:', msg)
}
msgD().catch(x => console.log(x))

/*
    This synchronous error handling doesn't just work when a promise is rejected, but also when there's an
    actual runtime or syntax error happening. In the following example, the second time with call our msg
    function we pass in a number value that doesn't have a toUpperCase method in its prototype chain. Our
    try...catch block catches that error just as well:
*/

function caserUpper(val) {
    return new Promise((resolve, reject) => {
        resolve(val.toUpperCase())
    })
}

async function msgE(x) {
    try {
        const msg = await caserUpper(x)
        console.log('Message E:', msg)
    } catch (err) {
        console.log('Ohh no:', err.message)
    }
}

msgE('Hello') //HELLO
msgE(34) //val.toUpperCase is not a function

/*
    Async Functions With Promise-Bases APIS
    As we showed in our primer to the Fetch API, web APIs that are promise-based are a perfect candidate for
    async functions:
*/

async function fetchUsers(endPoint) {
    const res = await fetch(endPoint)
    let data = await res.json()
    data = data.map(user => user.username)
    console.log(data)
}

fetchUsers('https://jsonplaceholder.typicode.com/users')
// ["Bret", "Antonette", "Samantha", "Karianne", "Kamren", "Leopoldo_Corkery", "Elwyn.Skiles", "Maxime_Nienow", "Delphine", "Moriah.Stanton"]

/*
    Conclusion
    Before Async/await functions, JavaScript code that relied on lots of asynchronous events
    (for example: code that made lots of calls to APIs) would end up in what some called "callback hell" - 
    A chain of functions and callbacks that was very difficult to read and understand.

    Async and await allow us to write asynchronous JavaScript code that reads much more clearly.
*/