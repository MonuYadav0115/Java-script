
// 

// const myNum = [11,12,13,14,15,16,17,18,19,20]

// const newNum = myNum.map( (num) => num + 10)
// const newnum = myNum.map( (num) => {return num + 10})
// console.log(newnum)



// two times apply map  and filter important 


const myNum = [11,12,13,14,15,16,17,18,19,20]
// const newnum = myNum.map( (num) => num * 10) .map( (num) => num + 1);

const newnum = myNum
.map( (num) => num * 10)
.map( (num) => num + 1)
.filter((num) => num >= 180)

console.log(newnum)