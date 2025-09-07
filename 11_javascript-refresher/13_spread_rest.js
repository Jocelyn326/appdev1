

const numbers = [1, 2, 3];
const   numbers2 = [...numbers, 4, 5];
console.log("New Numbers:", numbers2);

//------


const user = { name: "Celine", age: 25 };
const user2 = { ...user, hobby: "basketball" };
console.log("New User:",user2)

//------

function add(...args) {
    return args.reduce((total, num) => 
        total + num, 0
    );
}

console.log(add(1,2,3))