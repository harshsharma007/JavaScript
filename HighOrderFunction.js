function map(arr, fn) {
    const newArr = []

    //Foreach itself is a high order function.
    arr.forEach(function (val) {
        newArr.push(fn(val))
    })

    // for (let i = 0; i < arr.length; i++) {
    //     let val = arr[i]
    //     newArr.push(fn(val))
    // }

    return newArr
}

function addOne(num) {
    return num + 1
}

const x = [0, 1, 2, 3]
console.log(map(x, addOne))