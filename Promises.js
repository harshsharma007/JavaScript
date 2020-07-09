/*
    Promises:
        1. Alleviate "callback hell"
        2. Allows you to write code that assumes a value is returned within a success function.
        3. Only needs a single error handler.
    
    JavaScript has an object called a Promise, P, using which we can alleviate callback hell by writing code
    that assumes that a value is going to be returned eventually.

    A big advantage of Promises is that we don't have to handle the error within every single callback.
*/

const url = ''

fetch(url)
    .then(function (res) {
        return res.json()
    })
    .then(function (json) {
        return ({
            importantData: json.importantData
        })
    })
    .then(function (data) {
        console.log(data)
    })
    .catch(function (err) {
        //Handles error
    })

/*
    In the example above:
    fetch is related to Promises and then is a callback method. We can create a chain of callback method in
    terms of then in which the function can expect different parameters.
    catch is bascially used to catch an error and it can handle any error.
*/