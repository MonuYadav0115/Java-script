
// return method 

const myNum = [1,2,3]

// const totalvalue = myNum.reduce( function (acc ,currvalue) {
//     console.log(`accu value ${acc} and currvalue ${currvalue}`)
//     return acc + currvalue;
// },0)

// array se (same program)

const totalvalue = myNum.reduce( (acc, currvalue) => acc + currvalue , 0)

// console.log(totalvalue)


// new program 

const shopingcard = [
    {
        course: "js course",
        price: 2999
    },
    {
        course: "Python course",
        price: 299
    },
    {
        course: "Mobile dev course",
        price: 12999
    },
    {
        course: "web dev course",
        price: 1999
    }
]
const totalpay = shopingcard.reduce( (acc , item ) => acc + item.price , 0 )
console.log(totalpay)
