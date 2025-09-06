

console.log(5 == '5')
console.log(5 === '5')


let a
let b = null

console.log(a)
console.log(b)


const object = {
    age : 25 ,

    regularfunction:  function() {
        console.log(' This regulat function of this.age', this.age)
    },

    arrowfunction:() => {
        console.log(' This arrow function of this.age', this.age)
    },
}

object.regularfunction();
object.arrowfunction();


let food = ['adobo', 'sinigang', 'tocino']
let grade1 = [95, 88, 92]

let grade2 = grade1;

grade2[0] = 99;
console.log(grade2)