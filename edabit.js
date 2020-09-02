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

// 16
// Stuttering Function
// Write a function that stutters a word as if someone is struggling to read it. The first two
// letters are repeated twice with an ellipsis ... and space after each, and then the word is
// pronounced with a question mark ?.

// stutter("incredible") ➞ "in... in... incredible?"

// stutter("enthusiastic") ➞ "en... en... enthusiastic?"

// stutter("outstanding") ➞ "ou... ou... outstanding?"

// function stutter(word) {
// 	return `${word.substr(0,2)}... ${word.substr(0,2)}... ${word}?`
// }

// console.log(stutter("incredible"))

// 17
// hasSameBread(
//     ["white bread", "lettuce", "white bread"],
//     ["white bread", "tomato", "white bread"]
//   ) ➞ true

//   hasSameBread(
//     ["brown bread", "chicken", "brown bread"],
//     ["white bread", "chicken", "white bread"]
//   ) ➞ false
  
//   hasSameBread(
    // ["toast", "cheese", "toast"],
    // ["brown bread", "cheese", "toast"]
//   ) ➞ false

// function hasSameBread(arr1, arr2) {
// 	return arr1[0] === arr2[0] && arr1[2] === arr2[2]
// }

// console.log(hasSameBread(["toast", "cheese", "toast"], ["toast", "cheese", "toast"]))

// 18
// Fix the Error: Check Whether a Given Number Is Odd
// function isOdd(num){
//     ret n % 19 += 123;
// }
// function isOdd(num) {
// 	return num % 2 !== 0
// }

//   isOdd(-5) ➞ true

//   isOdd(25) ➞ true
  
//   isOdd(0) ➞ false

//19
// Luke, I Am Your ...
// relationToLuke("Darth Vader") ➞ "Luke, I am your father."

// relationToLuke("Leia") ➞ "Luke, I am your sister."

// relationToLuke("Han") ➞ "Luke, I am your brother in law."

// function relationToLuke(name) {
// 	const people = {
//         'Darth Vader': 'father',
//         'Leia': 'sister',
//         'Han': 'brother in law',
//         'R2D2': 'droid'
//     }
//     return `Luke, I am your ${people[name]}.`
// }

// console.log(relationToLuke('Darth Vader'))

//20
// Number of Stickers
// Given an n * n * n Rubik's cube, return the number of individual stickers that are needed to cover the whole cube.

// howManyStickers(1) ➞ 6

// howManyStickers(2) ➞ 24

// howManyStickers(3) ➞ 54

// function howManyStickers(n) {
// 	return (n ** 2) * 6
// }

// console.log(howManyStickers(15))

//21
// Nth Star Number

// Create a function that takes a positive integer and returns the nth "star number".

// A star number is a centered figurate number a centered hexagram (six-pointed star), such as the one that Chinese checkers is played on.


// starNumber(2) ➞ 13

// starNumber(3) ➞ 37

// starNumber(5) ➞ 121

// function starNumber(n) {
// 	return (6 * n) * (n - 1) + 1
// }

// console.log(starNumber(6))
// // 6n(n − 1) + 1

//22

// Movie Theatre Admittance

// acceptIntoMovie(14, true) ➞ true

// acceptIntoMovie(14, false) ➞ false

// acceptIntoMovie(16, false) ➞ true

// function acceptIntoMovie(age, isSupervised) {
// 	return age >= 15 || isSupervised
// }

// console.log(acceptIntoMovie(14, true))

// 23
// posCom(1) ➞ 2

// posCom(3) ➞ 8

// posCom(10) ➞ 1024

// function posCom(num) {
// 	return 2 ** num
// }

// console.log(posCom(10))

// 24
// tuckIn([1, 10], [2, 3, 4, 5, 6, 7, 8, 9]) ➞ [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// tuckIn([15,150], [45, 75, 35]) ➞ [15, 45, 75, 35, 150]

// tuckIn([[1, 2], [5, 6]], [[3, 4]]) ➞ [[1, 2], [3, 4], [5, 6]]

// function tuckIn(arr1, arr2) {
//     return [arr1[0], ...arr2, arr1[1]]
// }

// console.log(tuckIn([1, 10], [2, 3, 4, 5, 6, 7, 8, 9]))

// 25
// Go Corona!
// endCorona(4000, 2000, 77000) ➞ 39

// endCorona(3000, 2000, 50699) ➞ 51

// endCorona(30000, 25000, 390205) ➞ 79

// function endCorona(recovers, newCases, activeCases) {
//     days = 0
//     while (activeCases > 0) {
//         activeCases += newCases
//         activeCases -= recovers
//         days +=1
//     }
//     return days
// }

// console.log(endCorona(4000, 2000, 77000))

// 26

// Make My Way Home

// distanceHome([2, 4, 2, 5]) ➞ 13

// distanceHome([-1, -4, -3, -2]) ➞ 10

// distanceHome([3, 4, -5, -2]) ➞ 0


// function distanceHome(arr) {
// 	return Math.abs(arr.reduce((accumulator, currentValue) => accumulator + currentValue))
// }

// console.log(distanceHome([-1, -4, -3, -2]))

// 27
// Get the File Name

// getFilename("C:/Projects/pil_tests/ascii/edabit.txt") ➞ "edabit.txt"

// getFilename("C:/Users/johnsmith/Music/Beethoven_5.mp3") ➞ "Beethoven_5.mp3"

// getFilename("ffprobe.exe") ➞ "ffprobe.exe"

// function getFilename(path) {
// 	return path.split('/').pop()
// }

// console.log(getFilename("C:/Projects/pil_tests/ascii/edabit.txt"))

//28

// Modifying the Last Character

// modifyLast("Hello", 3) ➞ "Hellooo"

// modifyLast("hey", 6) ➞ "heyyyyyy"

// modifyLast("excuse me what?", 5) ➞ "excuse me what?????"

// function modifyLast(str, n) {
// 	return str + str.charAt(str.length-1).repeat(n-1)
// return str + str.slice(-1).repeat(n - 1)
// }

// console.log(modifyLast("hey", 6))


//29
// Halloween Day

// halloween(new Date("2013/10/31")) ➞ "Bonfire toffee"

// halloween(new Date("2012/07/31")) ➞ "toffee"

// halloween(new Date("2011/10/12")) ➞ "toffee"

// function halloween(dt) {
//     if (dt.getMonth() == 9 && dt.getDate() == 31){
//         return 'Bonfire toffee'
//     }
//     return 'toffee'
// }

// console.log(halloween(new Date("2013/10/31")))

//30

// getFilename("C:/Projects/pil_tests/ascii/edabit.txt") ➞ "edabit.txt"

// getFilename("C:/Users/johnsmith/Music/Beethoven_5.mp3") ➞ "Beethoven_5.mp3"

// getFilename("ffprobe.exe") ➞ "ffprobe.exe"

// function getFilename(path) {
// 	return path.split('/').pop()
// }

// console.log("C:/Projects/pil_tests/ascii/edabit.txt")

// 31
// Half, Quarter and Eighth
// Create a function that takes a number and return an array of three numbers: half of the
// number, quarter of the number and an eighth of the number.

// halfQuarterEighth(6) ➞ [3, 1.5, 0.75]

// halfQuarterEighth(22) ➞ [11, 5.5, 2.75]

// halfQuarterEighth(25) ➞ [12.5, 6.25, 3.125]

// function halfQuarterEighth(n) {
// 	return [n/2, n/4, n/8]
// }

// console.log(halfQuarterEighth(22))

//32
// firstLast("ganesh") ➞ "gh"

// firstLast("kali") ➞ "ki"

// firstLast("shiva") ➞ "sa"

// firstLast("vishnu") ➞ "vu"

// firstLast("durga") ➞ "da"

// function firstLast(name) {
// 	return name.slice(0,1) + name.slice(-1)
// }

// console.log(firstLast("vishnu"))

//33
// Burrrrrrrp

// longBurp(3) ➞ "Burrrp"

// longBurp(5) ➞ "Burrrrrp"

// longBurp(9) ➞ "Burrrrrrrrrp"

// function longBurp(num) {
// 	return `Bu${'r'.repeat(num)}p`
// }

// console.log(longBurp(3))

//34

// cubeSquareRoot(81) ➞ 729

// cubeSquareRoot(1646089) ➞ 2111932187

// cubeSquareRoot(695556) ➞ 580093704

// function cubeSquareRoot(num) {
// 	return (num ** (1/2)) ** 3
// }

// console.log(cubeSquareRoot(81))

//35
// Squares and Cubes
// Create a function that takes an array of two numbers and checks if the square root of the
// first number is equal to the cube root of the second number.

// checkSquareAndCube([4, 8]) ➞ true

// checkSquareAndCube([16, 48]) ➞ false

// checkSquareAndCube([9, 27]) ➞ true

// function checkSquareAndCube(arr) {
// 	return (arr[0] ** (1/2)) == (Math.cbrt(arr[1]))
// }

// const checkSquareAndCube = ns => Math.sqrt(ns[0]) ** 3 === ns[1];
// console.log(checkSquareAndCube([25, 125]))

//36
// True Ones, False Zeros

// integerBoolean("100101") ➞ [true, false, false, true, false, true]

// integerBoolean("10") ➞ [true, false]

// integerBoolean("001") ➞ [false, false, true]


// function integerBoolean(n) {
// 	return n.split('').map(x => Boolean(parseInt(x)))
// }
// const integerBoolean = n => [...n].map(a => a == 1);

// console.log(integerBoolean("100101"))

//37
// Broken Bridge

// isSafeBridge("####") ➞ true

// isSafeBridge("## ####") ➞ false

// isSafeBridge("#") ➞ true

// function isSafeBridge(str) {
// 	return !str.includes(' ')
// }

