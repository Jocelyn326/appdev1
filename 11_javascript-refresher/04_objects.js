
const aboutMe = {
    name: 'Jocelyn',
    age: 25,
    course: 'BSIS3',
}    

function introduce(intro){
    console.log(`Hi, my name is ${intro.name} and I am ${intro.age} years old.` );
}

introduce(aboutMe);
aboutMe.hobby = 'Watching movies'

