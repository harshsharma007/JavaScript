/*
    This code solves the traditional callback hell problem.
    This is a new login function with Promises rather than Callbacks.

    Q. How does catch function knows when to invoke?
    A. User.findOne.then().then().then() is one big Promise handling chain. As, Promises(which are in-built)
    knows what to do when an error is found. When an error is found, it marches down the chain and invoke
    that callback with that error object.

    Q. What's the trade-off between Callbacks and Promises? Do we loose anything while using Promises over
    Callbacks?
    A. Most things are migrating from the Callbacks of the past to now Promises. But, Promises were something
    that were introduced recently to JavaScript. Which is the reason that callbacks still exists a lot in
    legacy code.

    Right now, Promises are very popular. But there is a new way of handling asynchronous things that's
    coming in the future. And it is known as Aysnc/Await, which is introduced in ES 2017. ES 2017 is finalized,
    but it's still not adopted by everything.
*/

function login(req, res, callback) {
    User.findOne({ email: req.body.email })
        .then(function (user) {
            return user.comparePassword(req.body.password)
        })
        .then(function (isMatch) {
            if (!isMatch)
                res.status(401).send('Incorrect Password')
            else {
                //Add relevant data to token
                const payload = { id: user_id, email: user.email }
                return jwt.sign(payload, config.secret, {})
            }
        })
        .then(function (token) {
            user.token = token
            return user.save()
        })
        .then(function () {
            res.json({ token })
        })
        .catch(function (err) {
            return callback(err)
        })
}