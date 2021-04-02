const numbers = [1, 2, 3, 4]
for (var i = 0; i < numbers[1]; i++) {
    setTimeout(function () {
        console.log(numbers[i])
    }, 3000)
}