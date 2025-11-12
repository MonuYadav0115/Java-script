const marvel_hero = ["thor","ironman","spiderman"]

const dc_hero = ["superman","flash","batman"]

marvel_hero.push(dc_hero)

// console.log(marvel_hero)
// console.log(marvel_hero[3][0])

// const allhero = marvel_hero.concat(dc_hero);

// console.log(allhero);

const all_heros = [...marvel_hero,...dc_hero]

// console.log(all_heros);

const another_array =[1,2,3,4,5,[3,4,5,6,7],[2,3,6,9,[9,8,7,6]]]

const real_array = another_array.flat(Infinity);
// console.log(real_array);


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3))
