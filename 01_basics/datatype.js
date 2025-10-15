// Primitive data types 

const score = 100
const scoreValue = 100.3
const isloggedin = false
const outsidetemp = null      // object data type 
let username;
const id = Symbol("123")
const anotherId = Symbol("123")

console.log(id === anotherId);
console.log(typeof id)
console.log(typeof anotherId)


// Non Primitive data type (Reference)

const heros = ["saktiman","naagraj","doga"];

let myobj = {
    name:"Monu Yadav",
    age: 22
}

const myfunction = function(){

    console.log("Hello world")

}

console.log(typeof myfunction)       //function
console.log(typeof myobj)           //object
console.log(typeof heros)           //object
console.log(typeof outsidetemp)   // object


