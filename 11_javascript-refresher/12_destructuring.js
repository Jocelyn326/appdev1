
const person = {
    name: 'Celine',
    age: 25
}

const {name, age} = person
const hobbies = ['Sleeping', 'watching']
const [hobby1, hobby2] = hobbies

function printName(person) {
    console.log(person.age)
}

console.log(name)
console.log(hobby1)
printName(person)