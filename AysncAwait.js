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
    console.log('${ a } ${ b } ${ c }')
}

msgNew()

/*
    A word of caution however, in the above example each step is done sequentially, with each additional step
    waiting for the step before to resolve or reject before continuing. If you instead want the steps to happen
    in parallel, you can simply use Promise.all to wait for all the promises to have fulfilled:
*/

async function msgPromiseAll() {
    const [a, b, c] = await Promise.all([who(), what(), where()])
    console.log('${ a } ${ b } ${ c }')
}

msgPromiseAll()

/*
    Promise.all returns an array with the resolved values once all the passed-in promises have resolved.
    In the above we also make use of some nice array destructing to make our code succinct.
*/