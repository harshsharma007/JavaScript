// Array Destructing

const numbers = [1, 2, 3];
[a, b] = numbers;
console.log(a, b);

// If you want to get 1 and 3 elements only then you can skip an empty space between 1 and 3
[num1, , num3] = numbers;
console.log(num1, num3)

// Object Destructing

const person = {
    name: 'Max',
    age: 28
};

const { name } = person;
console.log(name);