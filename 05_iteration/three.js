
// for of 

// arr = [1,2,3,4,5]

// for(const num of arr){
//      console.log(num)
// }



// const greeting = ("Hello world")

// for(const greet of greeting){
//     console.log(`iterate each word: ${greet}`)

// }




//  ********Map************** 

const map = new Map()
map.set("IN" , "India")
map.set("USA" , "united state of america")
map.set("FR" , "France")
map.set("UP" , "Uttar pradesh")

// console.log(map)

// implement foe of loop this map 

for(const [key , value] of map){
    // console.log(key , "->" , value)
}


// in object to implement for of loop 

const myObject = {
    "game1": "cricket match",
    "game2": "hockey",
    "Game3": "basketball",
    "game4": "Gillidandda"

}

for(const [key,value] of myObject){
    console.log(key , "->" , value)       // myObject is not iterable at Object 
}