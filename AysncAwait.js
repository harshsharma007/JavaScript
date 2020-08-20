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