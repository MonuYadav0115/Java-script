// Grade Classification: Declare a variable score and 
// set it to a value between 0 and 100.
//  Use nested ternary operators to classify the score into grades:
//   A (>= 90), B (>= 75), C (>= 60), D (>= 45), and F (below 45).
//    Log the grade.



let score = 80

let grade = (score>=90)? "A"
            :(score>=75)? "B"
            :(score>=60)? "C"
            :(score>=45)? "D"
            :"F";
console.log(`score: ${score}`)
console.log(`grade: ${grade}`)


