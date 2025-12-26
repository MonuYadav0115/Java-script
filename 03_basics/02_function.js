// function 

// restoperatore (...num) just like spred but used cases different

// function Shopingcard(num){
//     return num
// }
// console.log(Shopingcard(100,110,120,130)) // output 100 only


// 2 apply rest operator

// function Shopingcard(...num){
//     return num
// }
// console.log(Shopingcard(100,200,300,400,5000)) // [100,200,300,400,5000]


// 3 

// const user = {
//     username: "Monu",
//     age:22
// }
// function Handleuser(anyuser){
//     console.log(`Hello i am ${anyuser.username} yadav my age ${anyuser.age}`)
// }
// Handleuser(user)

// 4 same logic and program

// const user = {
//     username:"Zentrox bravix",
//     place:"hyderabad",
//     age:23
// }

// function handleuserobject(anyobject){
//     console.log(`Hello I Am ${anyobject.username} And i am from ${anyobject.place} and my age ${anyobject.age} `)
//     return
// }
// handleuserobject(user)


// 5 same code but direct username pass with object


// const user = {
//     username:"Zentrox",
//     age:22
// }

// function handleuser(anyobject){
//     console.log(`Hello ${anyobject.username} how are you ${anyobject.age}`)
// }
// handleuser({
//     username:"tom",
//     age: 25

// })


// 8 array to function 


// const array = [100,200,300,400,500]

// function resultarray(myarray){
//     return myarray[3]
// }
// console.log(resultarray(array))

// 8 --> 2 

const array = [100,200,300,400,500]

function Resultofarray(getarray){
    return getarray[2]
}
console.log(Resultofarray([900,800,700,600]))