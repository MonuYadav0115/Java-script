// Object Destructuring 

const course = {
    coursename: "Java Script",
    courseprices:"1000",
    courseInstruture:"Hitesh Chaudhary"
}

// course.coursename

const {courseInstruture:Instruture} = course
console.log(Instruture)