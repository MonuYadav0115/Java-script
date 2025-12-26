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

var a = 40 

if (true){
    var a = 50
    console.log("Inner:a" , a)
}
console.log(a)