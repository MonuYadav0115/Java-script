
// const tinderuser = new Object()  // singletion object 
// const usertinder = {}            // Non singletion object

// console.log(usertinder) // both method to define object empty object
// console.log(tinderuser)  //  same just like upper 


// 1 

// const tinderuser = {}

// tinderuser.id = "123@98"
// tinderuser.name = "Zentrox"
// tinderuser.age = 22
// tinderuser.logedIn = false

// console.log(tinderuser)


// 2 

// const Username = {
//     email:"zentrox@gmail.com",
//     fullname:{
//         userfullname:{
//             firstname:"tom",
//             lastname:"Zentrox"

//         }
//     }
// }
// console.log(Username.fullname.userfullname.firstname)


// // 3 

// const obj1 = {name:"tom" , age:22 , place:"varansi"}
// const obj2 = {name1:"Zentrox" , age1: 23 , place1: "hyderabad"}

// // const obj3 = {obj1 ,obj2}

// const obj3 = Object.assign(obj1 , obj2)

// console.log(obj3)




// 4 

// const target = {1: "A" , 2: "B"}
// const source = {3: "C" , 4: "D"}

// const returntarget = Object.assign(target,source)

// console.log(returntarget)
// console.log(returntarget === target)  // ---> true



// 5 spred method

// const obj1 = {1: "A" , 2: "B"}
// const obj2 = {3: "C" , 4: "D"}

// const obj3 = {...obj1 , ...obj2}

// console.log(obj3)



// 6 

// const instauser = {
//     name:"zentrox",
//     age:21,
//     place:"hyderabad",
//     logedIn:false
// }

// console.log(instauser)

// console.log(Object.keys(instauser))
// console.log(Object.values(instauser))
// console.log(Object.entries(instauser))

// console.log(instauser.hasOwnProperty("logedIn"))