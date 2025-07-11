
// let name1 = 'Jean';
// const age = 23; // use const variables as much as possible, let == var, let is newer
//console.log(name1)


const summarizeUser = (user, name, age, hobby) => {
    return ('ID ' + user  + ': ' + name+', plays ' + hobby);
}

name1 = 'Jean Luis IV'
// age = 23
// console.log(summarizeUser(1,name1,age,'tennis'));

// const add = (a, b) => {return(a + b)}
const add = (a,b) => a+b

// can drop parentheses if theres only one argument, empty parenthese if no argument
lol = () => 6*9; // const optional but i guess good practice?

// console.log(add(2,3))
// console.log(lol())


// OBJECTS //

const person1 = {
    name: 'jean',
    age: 23,
    // greet: function() {console.log('Hi I am ' + this.name)} // this.name refers to global 'name' object WHEN IN AN ARROW FUNCTION
    greet() {console.log('Hi i am ' + this.name + ' and i love playing ' + this.hobbies[1])},
    hobbies: ['cooking', 'tennis']
}

// person.greet()
person1.hobbies.push('building mobile apps')
//console.log(person.hobbies.map(item => item + ' :)'));


// copy then edit, dont edit existing objects to avoid errors
const copiedArr = person1.hobbies.slice()
const copiedArr1 = [...person1.hobbies] // remove the three dots and you get a nested array, spread operator pulls out elements of array, object, etc. into surrounding object (of same type?)
const copyPerson = {...person1}
//console.log(copiedArr, copiedArr1, copyPerson)


// rest operator does opposite of spread?, its like kwargs in python or *args and puts it in array already
const toArray = (...args) => args
//console.log(toArray(1,2,3,4, 'testing!', {name : 'test'}))


// object, arr destructuring

// const printName = (person) => console.log(person.name)
const printName = ({ name }) => console.log(name);// ONLY INTERESTED IN NAME PROPERTY SO LETS SPECIFY THIS PROPERTY
const printAgeInFiveYears = ({ name, age }) => console.log(name + ' will be ' + (age + 5) + ' in five years from now.');
printName(person1)
printAgeInFiveYears(person1)

const { name, age } = person1; // extract properties from assigned object, doesnt have to be in a function
console.log(name, age)

const hobbies = ['Basketball', 'Ping pong'] 
const [hobby1, hobby2] = hobbies; // two individual variables, can be named anything since they're being extracted by position rather than by name (which is done for objects)
console.log(hobby1, hobby2)



