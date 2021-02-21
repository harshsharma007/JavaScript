/*
    JavaScript statements are executed line by line. However, with effects, the next line of code can be 
    run even though the effect is not finished. This can create errors.

    To prevent this, callback functions can be created. A callback function is executed after the current 
    effect is finished.
    
    This is a traditional example of callback hell.
*/

function login(req, res, callback) {
    User.findOne({ email: req.body.email }, function (err, user) {
        if (err) return callback(err)

        user.comparePassword(req.body.password, (err, isMatch) => {
            if (err) return callback(err)
            if (!isMatch) return res.status(401).send('Incorrect Password')

            //Add relevant data to token
            const payload = { id: user_id, email: user.email }

            jwt.sign(payload, config.secret, {}, function (err, token) {
                if (err) return callback(err)

                user.token = token
                user.save((err) => {
                    if (err) return callback(err)
                    res.json({ token })
                })
            })
        })
    })
}