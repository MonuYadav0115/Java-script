// 
// if  statement is true so code exicuted 

// if (2 != 3) {
//     console.log("Exicuted")
// }



// const temperature = 70 

// if (temperature < 60 ){
//     console.log("Temperature is less than ")
// } else {
//     console.log("Temperature greter than")
// }



// 2 

// const number = 13
// if (number % 2 == 0){
//     console.log("Yes")
// } else {
//     console.log("No")
// }

// 2  Its run code 


// const score = 200 
// if (score > 100){
//     const  power = "Fly" 
//     console.log(`User Power: ${power}`)
// }



// 3  it's also run but when ever i am change var to const / let then show error becoused scope issue 

// const score  = 300 
// if (score > 100) {
//     var power = "Fly"
//     console.log("User Power", power)
// }
// console.log("User power",power)


 // 4 emplicite scope   without {}  means emplicite notation single line 

//  const balances = 1000
//  if (balances > 400 ) console.log("yes"); 

//same code some differnt 

// const balances = 1000 
// if (balances > 200) console.log("yes"),
// console.log("Yes y balance is more")



// 5 

// const balance = 600 

// if (balance < 500){
//     console.log("less than 500")
// } else if(balance < 750){
//     console.log("less than 750")
// }else if (balance < 900){
//     console.log("less than 900")

// } else {
//     console.log("less than 1200")
// }

// 6  && and operator both true then code exicute

// const userLoggedIn = true 
// const debitcard = true

// if (userLoggedIn && debitcard ) {
//     console.log("course buy")
// }

// 7 && and operatore -- any one condition false code will be not exicuted from under scope 
 
const indian = true 
const soauthindian = true 
const northindian = true 
const pakistani = false 

if (indian && soauthindian && northindian && pakistani) {
    console.log("Yes You are indian citigen")
} else {
    console.log("Not allowed ")
}