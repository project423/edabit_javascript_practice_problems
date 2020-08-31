// 1
// Return Something to Me!
// giveMeSomething("is better than nothing") ➞ "something is better than nothing"

// function giveMeSomething(a){
//     return `something ${a}` 
// }

// console.log(giveMeSomething("a"))

// 2

// function has_bugs(buggy_code){
//     // if (buggy_code) {
//     //     return 'sad days'
//     // }
//     // else{
//     //     return 'it\'s a good day'
//     // }
//     return (buggy_code ? 'sad days' : 'it\'s a good day')
// }

// console.log(has_bugs(false))

// 3
// Drinks Allowed?

// shouldServeDrinks(17, true) ➞ false

// shouldServeDrinks(19, false) ➞ true

// function shouldServeDrinks(age, onBreak) {
// 	return age >= 18 && !onBreak
// }

// console.log(shouldServeDrinks(19, true))

// 4

// Flip the Boolean

// flipBool(true) ➞ 0

// flipBool(false) ➞ 1

// flipBool(1) ➞ 0

// flipBool(0) ➞ 1

// function flipBool(b) {
// 	return (b ? 0 : 1)
// }

// console.log(flipBool(true))

//5
// Kinetic Energy

// kineticEnergy(60, 3) ➞ 270

// kineticEnergy(45, 10) ➞ 2250

// kineticEnergy(63.5, 7.35) ➞ 1715

// function kineticEnergy(m, v) {
// 	return Math.round((1/2) * m * (v ** 2))
// }

// console.log(kineticEnergy(60, 3))

//6
// Return a String as an Integer

// stringInt("6") ➞ 6

// stringInt("1000") ➞ 1000

// stringInt("12") ➞ 12

// function stringInt(str) {
// 	return parseInt(str)
// }
// console.log(stringInt("6"))

//7

// newWord("apple") ➞ "pple"

// newWord("cherry") ➞ "herry"

// newWord("plum") ➞ "lum"

// function newWord(str) {
// 	return str.slice(1)
// }

// console.log(newWord("apple"))

// 8
// Upvotes vs Downvotes

// getVoteCount({ upvotes: 13, downvotes: 0 }) ➞ 13

// getVoteCount({ upvotes: 2, downvotes: 33 }) ➞ -31

// getVoteCount({ upvotes: 132, downvotes: 132 }) ➞ 0

// function getVoteCount(votes) {
// 	return votes['upvotes'] - votes['downvotes']
// }

// console.log(getVoteCount({ upvotes: 13, downvotes: 2 }))

// 9
// Solve the Equation
// equation("1+1") ➞ 2

// equation("7*4-2") ➞ 26

// equation("1+1+1+1+1") ➞ 5

// function equation(s) {
// 	return eval(s)
// }

// console.log(equation("1+1"))

//10
// Triangle and Parallelogram Area Finder
// areaShape(2, 3, "triangle") ➞ 3

// areaShape(8, 6, "parallelogram") ➞ 48

// areaShape(2.9, 1.3, "parallelogram") ➞ 3.77

// function areaShape(base, height, shape) {
//     // if (shape === 'triangle'){
//     //     return 0.5 * base * height
//     // }
//     // else{
//     //     return base * height
//     // }
//     return (shape === 'triangle' ? 0.5 * base * height : base * height)
// }

// console.log(areaShape(2, 3, "triangle"))

// 11

// yeah_nope(true) ➞ "yeah"

// yeah_nope(false) ➞ "nope"

// function yeah_nope(bool) {
// 	return bool ? 'yeah' : 'nope'
// }

// console.log(yeah_nope(true))

//12

// Evaluate an Equation

// eq("1+2") ➞ 3

// eq("6/(9-7)") ➞ 3

// eq("3+2-4") ➞ 1

// function eq(evaluate) {
//     return eval(evaluate)
// }

// console.log(eq("6/(9-7)"))

// 13

// Convert an Array to a String

// arrayToString([1, 2, 3, 4, 5, 6]) ➞ "123456"

// arrayToString(["a", "b", "c", "d", "e", "f"]) ➞ "abcdef"

// arrayToString([1, 2, 3, "a", "s", "dAAAA"]) ➞ "123asdAAAA"

// function arrayToString(arr) {
// 	return arr.join('')
// }

// console.log(arrayToString([1, 2, 3, "a", "s", "dAAAA"]))

//14
// Four Passengers and a Driver
// carsNeeded(5) ➞ 1

// carsNeeded(11) ➞ 3

// carsNeeded(0) ➞ 0

// function carsNeeded(n) {
// 	return Math.ceil(n/5)
// }

// console.log(carsNeeded(11))

//15

// Less Than, Greater Than
// Create a function that takes two numbers num1, num2, and an array arr and returns an
// array containing all the numbers in arr greater than num1 and less than num2.

// arrBetween(3, 8, [1, 5, 95, 0, 4, 7]) ➞ [5, 4, 7]

// arrBetween(1, 10, [1, 10, 25, 8, 11, 6]) ➞ [8, 6]

// arrBetween(7, 32, [1, 2, 3, 78]) ➞ []

// function arrBetween(num1, num2, arr) {
//     return arr.filter(num => num > num1 && num < num2)
// }

// console.log(arrBetween(3, 8, [1, 5, 95, 0, 4, 7]))