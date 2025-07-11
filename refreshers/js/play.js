
let name1 = 'Jean';
const age = 23; // use const variables as much as possible, let == var, let is newer
//console.log(name1)


const summarizeUser = (user, name, age, hobby) => {
    return ('ID ' + user  + ': ' + name+', plays ' + hobby);
}

name1 = 'Jean Luis IV'
// age = 23
console.log(summarizeUser(1,name1,age,'tennis'));

// const add = (a, b) => {return(a + b)}
const add = (a,b) => a+b

// can drop parentheses if theres only one argument, empty parenthese if no argument
lol = () => 6*9; // const optional but i guess good practice?

console.log(add(2,3))
console.log(lol())


// OBJECTS //

const person = {
    name: 'jean',
    age: 23,
    // greet: function() {console.log('Hi I am ' + this.name)} // this.name refers to global 'name' object WHEN IN AN ARROW FUNCTION
    greet() {console.log('Hi i am ' + this.name + ' and i love playing ' + this.hobbies[1])},
    hobbies: ['cooking', 'tennis']
}

person.greet()
person.hobbies.push('building mobile apps')
console.log(person.hobbies.map(item => item + ' :)'));

