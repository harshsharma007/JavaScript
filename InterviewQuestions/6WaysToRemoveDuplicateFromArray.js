var arr = [1, 2, 3, 4, 5, 1, 2]

// 1. Use the filter method

function removeDuplicatesByFilter(data) {
    return data.filter((value, index) => data.indexOf(value) === index)
}

console.log(removeDuplicatesByFilter(arr))

/*
    The filter method creates a new array of elements that pass the condition we provide. And any element
    that fails or returns false, it will not be in the filtered array.

    And we can also use the filter method to retrieve the duplicate values from the array by simply
    adjusting our condition.
*/

function getDuplicates(data) {
    return data.filter((value, index) => data.indexOf(value) !== index)
}

console.log(getDuplicates(arr))

/*
    2. By using a Set
    Sets are a new object type with ES6 (ES2015) that allows you to create collections of unique values.
*/

function removeDuplicatesBySet(data) {
    return [...new Set(data)]
}

console.log(removeDuplicatesBySet(arr))

/*
    3. Using the forEach method
    By using forEach, we can iterate over the elements in the array, and we will push into the new array
    if it doesn't exist in the array.
*/

function removeDuplicatesByForEach(data) {
    let unique = []
    data.forEach(element => {
        if (!unique.includes(element))
            unique.push(element)
    })
    return unique
}

console.log(removeDuplicatesByForEach(arr))

/*
    4. By using the Reduce method
    Reduce is always a bit more tricky to understand. The reduce method is used to reduce the elements
    of the array and combine them into a final array based on some reducer function that you pass.
*/

function removeDuplicatesByReduce(data) {
    let unique = data.reduce(function (a, b) {
        if (a.indexOf(b) < 0)
            a.push(b)
        return a
    }, [])
    return unique
}

console.log(removeDuplicatesByReduce(arr))

// The same reduce method with difference approach

function removeDuplicatesByNewReduce(data) {
    return data.reduce((acc, cur) => acc.includes(cur) ? acc : [...acc, cur], [])
}

console.log(removeDuplicatesByNewReduce(arr))

/*
    5. Adding a unique method to the Array prototype
    In JavaScript the array prototype constructor allows you to add new properties and methods to the
    Array object.
*/

Array.prototype.unique = function () {
    var unique = []
    for (i = 0; i < this.length; i++) {
        var current = this[i]
        if (unique.indexOf(current) < 0)
            unique.push(current)
    }
    return unique
}

console.log(arr.unique())

// Sets will work much faster when you compare with the normal approach.

Array.prototype.unique = function () {
    return Array.from(new Set(this))
}

console.log(arr.unique())

/*
    Removing duplicate Objects from a given array
    Sometimes it's a requirement to remove duplicate objects from an array of objects by the property
    name. We can achieve this by:
*/

var users = [
    { name: 'Jayant', age: 25 },
    { name: 'Sandy', age: 25 },
    { name: 'Shiva', age: 25 },
    { name: 'Jayant', age: 25 }
]

function uniqueByKeepLast(data, key) {
    return [
        ...new Map(
            data.map(x => [key(x), x])
        ).values()
    ]
}

console.log(JSON.stringify(uniqueByKeepLast(users, x => x.name)))