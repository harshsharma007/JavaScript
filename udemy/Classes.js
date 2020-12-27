class Human {
    constructor() {
        this.gender = 'Male'
    }

    printGender() {
        console.log(this.gender)
    }
}

/*
    A property is added by using adding a constructor that is a default function method you can add
    to any class which will be executed whenever you instantiate the class and the method is created
    just with the name of the method parentheses and then curly braces. And then there we can now
    set up properties with the this keyword and we could write this.name = 'Max'
*/

class Person extends Human {
    constructor() {
        /*
            If you are extending another class and you are implementing the constructor then you have to
            add super() method in the constructor. It's a keyword and it simply executes the parent
            constructor.
        */
        super()
        this.name = 'Harsh'

        // We can change the value of gender in the child class
        this.gender = 'Female'
    }

    printMyName() {
        console.log(this.name)
    }
}

/*
    We can use this class to store an instance in a constant with new Person and then we can execute
    person.printMyName()
*/

const person = new Person()
person.printMyName()
person.printGender()