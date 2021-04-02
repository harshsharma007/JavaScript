const arr1 = [1, 2, 3]
let arr2 = [1, 2, 3]
const obj1 = { name: 'Hi' }
const obj2 = { name: 'Hi' }
arr1.push(4, 5)
arr2.push(4, 5)
obj1.name = 'Deepak'
obj2.name = 'Deepak'
var result1 = obj1 == obj2
var result2 = arr1 == arr2
var result = result1 && result2
console.log(result)