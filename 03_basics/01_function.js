// function sayMyname() {
//     console.log("Monu")
//     console.log("Holland")
//     console.log("Bravix")
//     console.log("Zentrox")
//     console.log("Tom")
// }

// sayMyname ---->    reference 
// sayMyname() ---->  function call()

// 1 

// function addtwonumber(number1,number2){
//     console.log(number1+number2)
// }
// addtwonumber(22, 33)


// 2 

// function addtwonumber(number1,number2){
//     let result = number1 + number2
//     console.log("Monu")
//     return result
//     console.log("Monu")
// }
// const result = addtwonumber(2,5)
// console.log("Result:",result)


// 3 

// function addtwonumber(num1,num2){
//     return num1 + num2

// }
// const result = addtwonumber(22,33)
// console.log(result)


// 4 

// function UsernameLoging(Username){
//     return `${Username} just logged In web`
// }

// console.log(UsernameLoging("Zentrox Bravix"))


// 5 

// function Usernamelogin(username){
//     if (username === undefined){
//         console.log("Please Enter the username:")
//         return
//     }
//     return`${username} just logged in our web`

// }
// console.log(Usernamelogin(""))



// 6  same work like 5 



// 7  Default valued (Tom) if not any value so logged in tom

function usernamecheck(username = "Tom"){
    if (!username){
        console.log("Please Enter the username:")
        return
    }
    return `${username} just logged In our webpage`
} 

console.log(usernamecheck())