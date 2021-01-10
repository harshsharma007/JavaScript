class Human {
    gender = 'Male'

    printGender = () => {
        console.log(this.gender)
    }
}

class Person extends Human {
    name = 'Harsh'
    gender = 'Female'

    printMyName = () => {
        console.log(this.name)
        console.log(this.gender)
    }
}

const person = new Person()
person.printMyName()
person.printGender()