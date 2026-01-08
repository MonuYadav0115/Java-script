// const marvel_hero = ["thor","ironman","spiderman"]

// const dc_hero = ["superman","flash","batman"]

// marvel_hero.push(dc_hero)

// // console.log(marvel_hero)
// // console.log(marvel_hero[3][0])

// // const allhero = marvel_hero.concat(dc_hero);

// // console.log(allhero);

// const all_heros = [...marvel_hero,...dc_hero]

// // console.log(all_heros);

// const another_array =[1,2,3,4,5,[3,4,5,6,7],[2,3,6,9,[9,8,7,6]]]

// const real_array = another_array.flat(Infinity);
// // console.log(real_array);


// let score1 = 100
// let score2 = 200
// let score3 = 300

// console.log(Array.of(score1,score2,score3))



// **********************Arrray 2 practice*******************************

// let marvel_hero = ["saktiman","Tom cruse","Tom holand"]

// let south_hero = ["Mahesh Babu","Rajanikant","Prabhash","Allu Arjun"]
// let allhero = [...marvel_hero , south_hero]
// console.log(allhero)

// marvel_hero.push(south_hero)

// console.log(marvel_hero) 

// console.log(marvel_hero[3] [2])



// concate method 


// let marvel_hero = ["saktiman","Tom cruse","Tom holand"]

// let south_hero = ["Mahesh Babu","Rajanikant","Prabhash","Allu Arjun"]

// let all_heros= marvel_hero.concat(south_hero)
// console.log(all_heros)


// spred method 


// let marvel_hero = ["saktiman","Tom cruse","Tom holand"]

// let south_hero = ["Mahesh Babu","Rajanikant","Prabhash","Allu Arjun"]

// let all_heros2 = [...marvel_hero,...south_hero]
// console.log(all_heros2)


// flate method 

// let array1 = [1,2,3,4,5,[11,12,13,14,15],[10,20,30,40,50,[90,80,70]]]

// let newarray1 = array1.flat(Infinity)
// console.log(newarray1)

// example :: The maximum recursion depth Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth


// convert in array form 
 
 console.log(Array.isArray("Monu"))        // check array or not 
 console.log(Array.from("Monu"))          // convert in array 
 console.log(Array.from({name:"Monu"}))  // interesting output [] interviev question 



// same method convert to array
//  usin (of) and (from) to convert 


let score1 = 100
let score2 = 100
let score3 = 100

// console.log(score1,score2,score3)     // simple output 
// console.log(Array.of(score1,score2,score3)) // in array form output 
