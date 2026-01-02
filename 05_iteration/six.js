// 1 

// const coding = ["python","javascript","java","rust","cpp"]

// coding.forEach( (item) => {
//     console.log(item)
// })


// 2 

// const coding1 = ["python","javascript","java","rust","cpp"]

// const value = coding.forEach( (item) => {
//     console.log(item);
// })
// console.log(value)




// filter function ********************
// 1
// const number = [1,2,3,4,5,6,7,8,9,10]

// const newnumber = number.filter( (num) => num > 5 )
// console.log(newnumber)


// 2  same try for practice

// let num1 = [11,12,13,14,15,16,17,18,19,20]

// let newnum = num1.filter( (num) => num > 15)
// console.log(newnum)


// 3 same but different tyr to understand  return method with scope 

// let num1 = [11,12,13,14,15,16,17,18,19,20]

// let newnum = num1.filter( (num) => {
//     return num > 15 
    
// })
// console.log(newnum)


//  4  same program but used for each 

// let num1 = [11,12,13,14,15,16,17,18,19,20]

// let newnum = []
// num1.forEach( (num) => {
//     if (num > 14 )
//         newnum.push(num)
// })
// console.log(newnum)


//  ***************Books Example ********************

const books = [
    {title: "bookone" , genre : "fiction" , publish: 1981 , edition: 2025},
    {title: "booktwo" , genre : "non-fiction" , publish: 1971 , edition: 2022},
    {title: "bookthree" , genre : "history" , publish: 1961 , edition: 2021},
    {title: "bookfour" , genre : "non-fiction" , publish: 1951 , edition: 218},
    {title: "bookfive" , genre : "history" , publish: 1941 , edition: 2016},
    {title: "bookssix" , genre : "fiction" , publish: 1931 , edition: 2012},
    {title: "bookseven" , genre : "non-fiction" , publish: 1921 , edition: 2013},
    {title: "bookeight" , genre : "fiction" , publish: 1881 , edition: 2015},
    {title: "booknine" , genre : "history" , publish: 1887 , edition: 2014},
    {title: "bookten" , genre : "fiction" , publish: 1997 , edition: 2024},
]

// const userbooks = books.filter( (bk) => bk.genre === "history")
// const userbooks1 = books.filter( (bk) => bk.edition < 2016)
// const userbooks2 = books.filter((bk) => bk.edition === 2021)
let userbooks3 = books.filter( (bk) => {return bk.edition > 2021})  // {}--> if used scope so return method used  

console.log(userbooks3)

