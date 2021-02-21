// Spread Operator

const numbers = [1, 2, 3]
const newNumbers = [...numbers, 4]
console.log(newNumbers)

// If we do this, then it will simply include elements of array inside an element.

const withoutDots = [numbers, 4]
console.log(withoutDots)

// Rest Operator

const person = {
    name: 'Max'
}

const newPerson = {
    ...person,
    age: 28
}

console.log(newPerson)

const newPersonWithoutDots = {
    person,
    age: 28
}

console.log(newPersonWithoutDots)

/*
    The Rest operator which is used less often though is used in a function and you could also use ES6
    arrow function.
*/

/*
    The three dots used in a function 'filter' are used as a rest operator that merges the arguments into
    an array. We can use array methods like filter, filter will execute a function on every element in
    the passed in array. So here we would get our element and then we could use the inline arrow function
    to simply say return true or false if the element is equal to 1.
*/

const filter = (...args) => {
    return args.filter(el => el === 1);
}

console.log(filter(1, 2, 3))