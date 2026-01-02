
// for each loop through function  

const coding = ["js", "python" , "cpp" , "ruby" , "java"]

coding.forEach(function ( value){
    // console.log(value)
})



// for each loop through callback

const coding1 = ["js", "python" , "cpp" , "ruby" , "java", "reactjs"]

coding1.forEach( (val1) => {
    // console.log(val1)
})


// array 

const arr = ["zentrox","tom","bravix","Monu"]

arr.forEach( (item,index,element) => {
    // console.log(item , index , element)
})


//  array in object 

const mycoding = [
    {
        languagename: "javascript",
        languagefilename:"js"
    },
    {
        languagename:"java",
        languagefilename:"java"
    },
    {
        languagename:"python",
        languagefilename:"py"
    }

]

mycoding.forEach( (item) => {
    console.log(item.languagename)
})