function func(x, y) {
    var promise = new Promise(function (resolve, reject) {
        y = x
        if (x / y == y / x) {
            resolve(x + y)
        }
        reject('error');
    })

    promise
        .then(function (successMessage) {
            console.log(successMessage)
        }, function (errorMessage) {
            console.log(errorMessage)
        })
}
func(1, 0)