// object and event most important 


//Singleton  -----> object.create

// object literals 

// const Jsuser = {
//     name: "monu",
//     age: 22,
//     place: "Uttar Pradesh",
//     email: "monuy7883@gmail.com",
//     Logedin:false,
// }
// console.log(Jsuser.email)
// console.log(Jsuser.age)



// 2 type 
// let Jsuser = {
//     "name": "Monu Yadav",
//     "age": 22,
//     "places": "Tandava",
//     "Logedin":true
// }
// console.log(Jsuser["name"])

// 3 how to change name and email in object 

// const Jsuser = {
//     name: "Monu",
//     age:22,
//     places:"jaunpur",
//     email:"monuy7883@gmail.com"
// }
// Jsuser.email = "tom@gmail.com"
// console.log(Jsuser)

// Object.freeze(Jsuser)

// Jsuser.email = "zentrox@gmail.com"
// console.log(Jsuser)



// 4 new method 


const Jsuser = {
    name:"monu",
    age:22,
    place:"varansi",
    email:"monu@gmail.com"

}

Jsuser.greeting = function(){
    console.log("Hello js user")
} 
console.log(Jsuser.greeting())

Jsuser.greeting2 = function(){
    console.log(`Hello js user ${this.name}`)
}
console.log(Jsuser.greeting2())

