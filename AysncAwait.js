/*
    Async/Await
    1. Introduced in ES2017
    2. Allows people to write async code as if it were synchronous.

    async keyword is used before function, which will let JavaScript know about the asynchronous behavior of
    the function. await is keyword, which will wait for a value to come back before continuing the code.
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