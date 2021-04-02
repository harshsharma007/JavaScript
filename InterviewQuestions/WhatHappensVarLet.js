var x = 3
var y = 4
let demo = () => {
    let ex = () => {
        let x = 2
        let y = 1
        y++
        x--
        return add(x, y)
    }
    return ex()
}

let add = (x, y) => {
    return window.x + window.y
}
console.log(demo())

// Output is 7