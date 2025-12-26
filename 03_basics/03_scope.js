// 1 

// if (true){
//     let a = 10
//     const b = 20
//     var c = 30
// }
// console.log(a)   // error show not output
// console.log(b)   // error show not output
// console.log(c)      // output 30 



// 2 

// var a = 40 

// if (true){
//     var a = 50
//     console.log("Inner:a" , a)
// }
// console.log(a)


// 3 

// function one (){
//     username = "Zentrox"
    
//     function two(){
//         website = "zentrox.com"
//         console.log(username)
//     }
//     console.log(website)
//     two()
// }
// one()


// 4 

// if (true){
//     const username = "Tom"
//     if (username === "Tom"){
//         const website = "tomweb.com"
//         console.log(username + website)
//     }
//     // console.log(website)
// }
// // console.log(username)



// ********************** interesting ***********************
console.log(addone(5))

function addone(num){
    return num + 1
}


 
// console.log(addtwo)   // if i am run this programm show error hoisting method 
const addtwo = function(num){
    return num + 2
}
// addtwo(5)