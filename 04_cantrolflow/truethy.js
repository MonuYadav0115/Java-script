// truethy 

// const userEmail = "zentrox@gmail.com"

// if(userEmail){
//     console.log("Got a user email");
// } else {
//     console.log("dot't have email id")

// }



// falsey value 
// these are falsy value --->
/*    false , 0 , -0 , (BigInt-0n) , "" , Null , undefined , NaN     */


// truthy value ----

// "0" , "false" , " " , [] , {} , function(){} 



// check array is empty or not 

// const useremail = []

// if(useremail.length === 0){
//     console.log("Array is empty")
// }

// check object is empty or not 

// const objectempty = {}

// if(Object.keys(objectempty).length === 0 ){
//     console.log("Object is empty")
// }

// Nullish Coalesing Operatore (??) : Null , undefined

//  let val1;
//  val1 = 5 ?? 10
//  val1 = null ?? 10
// val1 = undefined ?? 20
// val1 = null ?? 10 ?? 20 
//  console.log(val1)

// Ternary operatore

// condition ? true : false

const iceteaprice = 100

iceteaprice  >= 120 ? console.log("less than 120") : console.log("greater than 100")
