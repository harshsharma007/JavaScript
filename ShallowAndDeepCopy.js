//Shallow Copy
const o = {
    a: 'a',
    b: 'b',
    obj: {
        key: 'key'
    }
}

const o2 = Object.assign({}, o)
//The above line of code will perform shallow copy.

console.log(o2)

//Deep Copy
function deepCopy(obj) {
    //check if values are object
    //if so, copy that object (deep copy)
    //else return the value

    const keys = Object.keys(obj)
    const newObject = {}

    for (let i = 0; i < keys.length; i++) {
        const key = keys[i]
        if (typeof obj[key] === 'object') {
            newObject[key] = deepCopy(obj[key])
        }
        else {
            newObject[key] = obj[key]
        }
    }
    return newObject
}

const o3 = deepCopy(o)
//The above line of code will perform deep copy.

console.log(o3)
o.obj.key = 'New Key'
console.log(o3.obj.key)

//The value displayed would be 'Key', instead of 'New Key'. This is an example of deep copy.
//Arrays are also stored by reference. In case of deep copy of an array, we have to check === 'array'