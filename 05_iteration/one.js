
// iteration means ---> loop 

for (let i = 1; i <= 10; i++){
    const element = i;

    if (element === 5){
        // console.log("5 Is super Number")
    }
    // console.log(i)/
}
// console.log(i)


// 2  

for(let i = 1; i <= 5; i++){
    // console.log(`outer loop value ${i}`)
    for(let j = 1; j <= 5; j++){
        // console.log(`inner loop value ${j} outer loop ${i/}`) 
        // console.log(i + "*" + j + "="  + i * j)
    }
}

// 3 

let myarray = ["red" , "Black" , "white" , "Pink"]
// console.log(myarray.length)

for(index = 0; index <= myarray.length; index++){
    const element = myarray[index];
    // console.log(element)

}

// 4 break and countinue 

// for(let index = 1; index <= 20; index ++){
//     if(index === 5){
//         console.log(`This is super number  ${5}`)
//         break
//     }
//     console.log(`value of i is ==> ${index}`)

// }


// continue ---->

for(let index = 1; index <= 20; index ++){
    if(index === 5){
        console.log(`This number dedected  ${5}`)
        continue
    }
    console.log(`value of i is ==> ${index}`)

}




