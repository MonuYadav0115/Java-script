// stack (Primitive DData type)--------> Used 
//  Heap (Non Primitive data type Referece)----> Used

// let myname = "Monu yadav"

// let anothername = myname

// console.log(anothername);

let myname = "Monu Yadav"

let anothername = myname

anothername = "Tom Yadav"

// console.log(myname);         //-------- monu yadav

// console.log(anothername);    // --------tom yadav


// Heap 

let userOne = {

    email:"user@google.com",
    upi:"user@ybl"

}
let userTwo = userOne
userTwo.email = "monu@google.com"

console.log(userOne.email)          //------>monu@google.com  
console.log(userTwo.email)         //------>monu@google.com
