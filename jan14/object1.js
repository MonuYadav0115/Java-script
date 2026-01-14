
// object and event is most important 

// let jsuser = {
//     name : "Zentrox",
//     age:22,
//     place:"hyderabad",
//     loggedIn: true

// }
// console.log(jsuser["name"])



// upadte 

// let jsuser ={
//     name:"Zentrox",
//     age:21,
//     place:"Hyderabad",
//     email:"zentrox@gmail.com",
//     isloggedIn:true
// }

// jsuser.email = "tom@gamil.com"
// console.log(jsuser)



// freez 


// let jsuser ={
//     name:"Zentrox",
//     age:21,
//     place:"Hyderabad",
//     email:"zentrox@gmail.com",
//     isloggedIn:true
// }
// Object.freeze(jsuser)          // not updated becoused freeze 
// jsuser.email = "tom@gamil.com"
// console.log(jsuser)






// 


// let jsuser = {
//     name:"Zentrox",
//     age:21,
//     place:"varansi",
//     email:"zentrox@gamil.com",
//     isloggedIn:false
// }

// jsuser.greeting = function () {
//     console.log("Hello js user")

// }

// console.log(jsuser.greeting())

// jsuser.greeting1 = function(){
//     console.log(`Hello user how are you ${this.name}`)
// }
// console.log(jsuser.greeting1())



let username = {
    name:"tom",
    age:22,
    place:"jaunpur",
    email:"tom12@gmail.com",
    isloggedIn:true
}
username.greeting = function(){
    console.log(`Hello how are you ${this.name}`)
}
console.log(username.greeting())