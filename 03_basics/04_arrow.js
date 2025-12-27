
// 1 

const user = {
    username:"Zentrox",
    price: 999,
    welcomemessage: function(){
        console.log(`${this.username} , Welcome to website`);
        console.log(this)   // ---> this is refer current context 

    }
}
// user.welcomemessage()
// user.username = "Tom"
// user.welcomemessage()

// console.log(this)


// 2 

// function chai(){
//     let username = "zentrox"
//     console.log(this.username)

// }
// chai()


// 3 

// const chai = function(){
//     let username = "Zentrox"
//     console.log(this.username)

// }
// chai()


// 4 Arrow method 

// let addtwo = (num1,num2) => {
//     return num1 + num2 
// }
// console.log(addtwo(4,9))


// 5 implesite method 

// let addtwo = (num1, num2) => num1 + num2 

// console.log(addtwo(12,12))

// (5--2)

// let addtwo = (num1 , num2) => (num1 + num2)

// console.log(addtwo(20,30))
