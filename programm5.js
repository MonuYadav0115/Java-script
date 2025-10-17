
//  Age Group: Declare a variable age and 
//  use the ternary operator to classify the age into "Child"
//   (0-12), "Teen" (13-19), "Adult" (20-64), 
//   and "Senior" (65 and above). Log the result

let age = 45

let category = (age>=0 && age<=12)? "Child"
              :( age>=12 && age<=19)? "Teen"
              :(age>=19 && age<=64)? "Adult"
              :"Senior";

              
console.log(`age: ${age}`)
console.log(`category: ${category}`)


