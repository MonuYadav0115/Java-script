//  Temperature Check: Declare a variable temperature and 
//  use nested ternary operators to categorize it as "Hot" (above 30),
//   "Warm" (20-30), "Cool" (10-19), and "Cold" (below 10). 
//   Log the result.



let temperature = 20

let category = (temperature>30)? "Hot"
              :(temperature>=20)? "Warm"
              :(temperature>=10)? "Cool"
              :"cold";

console.log(`Temperature: ${temperature}`)
console.log(`category: ${category}`)




