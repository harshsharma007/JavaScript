var func = function () {
    var timer = setTimeout(function () {
        console.log('Deepak')
    }, 3000)
    clearTimeout(timer)
}

func()