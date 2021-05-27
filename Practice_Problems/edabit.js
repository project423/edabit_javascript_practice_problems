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

//38
// Does a Number Exist?

// validStrNumber("3.2") ➞ true

// validStrNumber("324") ➞ true

// validStrNumber("54..4") ➞ false

// validStrNumber("number") ➞ false

// function validStrNumber(n) {
// 	return !isNaN(n)
// }

// console.log(validStrNumber("54..44"))

//39
// Where is Bob!?!

// findBob(["Jimmy", "Layla", "Bob"]) ➞ 2

// findBob(["Bob", "Layla", "Kaitlyn", "Patricia"]) ➞ 0

// findBob(["Jimmy", "Layla", "James"]) ➞ -1

// function findBob(names) {
// 	return names.indexOf('Bob')
// }

// console.log(findBob(["Jimmy", "Layla"]))

//40

// How Much is True?

// countTrue([true, false, false, true, false]) ➞ 2

// countTrue([false, false, false, false]) ➞ 0

// countTrue([]) ➞ 0

// function countTrue(arr) {
//      return arr.filter(word => Boolean(word)).length
// }

// console.log(countTrue([true, false, false, true, false]))

//41

// Concatenate Variable Number of Input Arrays

// concat([1, 2, 3], [4, 5], [6, 7]) ➞ [1, 2, 3, 4, 5, 6, 7]

// concat([1], [2], [3], [4], [5], [6], [7]) ➞ [1, 2, 3, 4, 5, 6, 7]

// concat([1, 2], [3, 4]) ➞ [1, 2, 3, 4]

// concat([4, 4, 4, 4, 4]) ➞ [4, 4, 4, 4, 4]

// function concat(...args) {
// 	return args.flat()
// }

// console.log(concat([1, 2, 3], [4, 5], [6, 7]))

//42
// getFillings(["bread", "ham", "cheese", "ham", "bread"]) ➞ ["ham", "cheese", "ham"]

// getFillings(["bread", "sausage", "tomato", "bread"]) ➞ ["sausage", "tomato"]

// getFillings(["bread", "lettuce", "bacon", "tomato", "bread"]) ➞ ["lettuce", "bacon", "tomato"]

// function getFillings(sandwich) {
// 	return sandwich.slice(1,sandwich.length - 1)
// }

// console.log(getFillings(["bread", "ham", "cheese", "ham", "bread"]))

//43

// filterArray([1, 2, 3, "a", "b", 4]) ➞ [1, 2, 3, 4]

// filterArray(["A", 0, "Edabit", 1729, "Python", "1729"]) ➞ [0, 1729]

// filterArray(["Nothing", "here"]) ➞ []

// function filterArray(arr) {
// 	return arr.filter(n => Number.isInteger(n))
// }

// console.log(filterArray([1, 2, 3, "a", "b", 4]))

// 44

// Convert Age to Days
// Create a function that takes the age and return the age in days.

// calcAge(65) ➞ 23725

// calcAge(0) ➞ 0

// calcAge(20) ➞ 7300

// function calcAge(age) {
//     return age * 365
// }

// console.log(calcAge(65))

//45

// What's Hiding Amongst the Crowd?
// A word is on the loose and now has tried to hide amongst a crowd of tall letters! Help write a function to detect what the word is, knowing the following rules:
// The wanted word is in lowercase.
// The crowd of letters is all in uppercase.
// Note that the word will be spread out amongst the random letters, but their letters remain in the same order.

// detectWord("UcUNFYGaFYFYGtNUH") ➞ "cat"

// detectWord("bEEFGBuFBRrHgUHlNFYaYr") ➞ "burglar"

// detectWord("YFemHUFBbezFBYzFBYLleGBYEFGBMENTment") ➞ "embezzlement"

// function detectWord(str) {
// 	return str.split("").filter(letter => letter.toLowerCase() == letter).join("")
// }

// console.log(detectWord("bEEFGBuFBRrHgUHlNFYaYr"))

//46

// Left Shift by Powers of Two
// shiftToLeft(5, 2) ➞ 20

// shiftToLeft(10, 3) ➞ 80

// shiftToLeft(-32, 2) ➞ -128

// shiftToLeft(-6, 5) ➞ -192

// shiftToLeft(12, 4) ➞ 192

// shiftToLeft(46, 6) ➞ 2944

// function shiftToLeft(x, y) {
// 	return x * (2**y)
// }

// console.log(shiftToLeft(-32,2))

//47

// function numberSquares(n) {
// 	return (n * (n + 1) * (2 * n + 1)) / 6
// }

// numberSquares(2) ➞ 5

// numberSquares(4) ➞ 30

// numberSquares(5) ➞ 55

// console.log(numberSquares(5))

//48
// Numbers to Objects

// numObj([118, 117, 120]) ➞ [{'118':'v'}, {'117':'u'}, {'120':'x'}]

// function numObj(arr) {
//   const array = [];
//   arr.map(num => {
//     const table = {};
//     const letter = String.fromCharCode(num);
//     table[num] = letter;
//     array.push(table);
//   });
//   return array;
// }

// function numObj(arr) {
//   return arr.map(e => ({ [e]: String.fromCharCode(e) }));
// }

// console.log(numObj([118, 117, 120]));

//49
// Is it True?

// isTrue("2=2") ➞ true

// isTrue("8<7") ➞ false

// isTrue("5=13") ➞ false

// isTrue("15>4") ➞ true

// function isTrue(relation) {
//     withReplacement = relation.replace('=','==')
// 	return eval(withReplacement)
// }

// console.log(isTrue("5>6"))

//50

// Promise Practice
// let promise = new Promise((resolve, reject) =>{
//     setTimeout(()=>{
//         resolve("promise resolved")
//     },1000)
// })

//51

// signYourName( obj ) {
//   // write your code here

//   obj.yourSignature = "Whatever";
//   obj.spouseSignature = "Nice Try"
//   return obj;

// } ➞ { yourSignature: "Whatever" }

// const obj = { yourSignature: "" };

// function signYourName(obj) {
//   // write your code here
//   Object.seal(obj);

//   obj.yourSignature = "Whatever";
//   obj.spouseSignature = "Nice Try";
//   return obj;
// }

// 52

// Find the Amount of Potatoes

// potatoes("potato") ➞ 1

// potatoes("potatopotato") ➞ 2

// potatoes("potatoapple") ➞ 1

// function potatoes(str) {
// 	return str.match(/potato/g).length;
// }

//53

// Check If It's a Title String

// checkTitle("A Mind Boggling Achievement") ➞ true

// checkTitle("A Simple Java Script Program!") ➞ true

// checkTitle("Water is transparent") ➞ false

// function checkTitle(title) {
//     titleArray =  title.split(" ")
//     return titleArray.every((word)=>{
//           if (word[0] == word.toUpperCase()[0]){
//               return true
//           }
//     })
// }

// function checkTitle(title) {
// 	return title.split(" ").every(item => item[0] === item[0].toUpperCase());
// }

// console.log(checkTitle("A Mind Boggling Achievement"))

//54

// Older Than Me

// p1 = Person("Samuel", 24)
// p2 = Person("Joel", 36)
// p3 = Person("Lily", 24)

// p1.compareAge(p2) ➞ "Joel is older than me."

// p2.compareAge(p1) ➞ "Samuel is younger than me."

// p1.compareAge(p3) ➞ "Lily is the same age as me.

//55

// class Person {
// 	constructor(name, age) {
// 		this.name = name;
// 		this.age = age;
// 	}

// 	compareAge({name, age}) {
// 		if(age > this.age){
//             return name + " is older than me."
//         }
//         else if(this.age === age){
//             return name + ' is the same age as me.'
//         }
//         return name + " is younger than me."

// 	}
// }
// p1 = new Person("Samuel", 42)
// p2 = new Person("Joel", 36)

// p1.compareAge(p2)

// Which Generation Are You?

//57

// function generation(x, y) {
//   if (x === 0) return "me!";
//   if (y === "f") {
//     if (x === -3) {
//       return "great grandmother";
//     } else if (x === -2) {
//       return "grandmother";
//     } else if (x === -1) {
//       return "mother";
//     } else if (x === 1) {
//       return "daughter";
//     } else if (x === 2) {
//       return "granddaughter";
//     } else if (x === 3) {
//       return "great granddaughter";
//     }
//   } else {
//     if (x === -3) {
//       return "great grandfather";
//     } else if (x === -2) {
//       return "grandfather";
//     } else if (x === -1) {
//       return "father";
//     } else if (x === 1) {
//       return "son";
//     } else if (x === 2) {
//       return "grandson";
//     } else if (x === 3) {
//       return "great grandson";
//     }
//   }
// }

// function generation(x,y) {
//     const elo = {
//       '-3': { m: "great grandfather", f: "great grandmother" },
//       "-2": { m: "grandfather", f: "grandmother" },
//       "-1": { m: "father", f: "mother" },
//       0: { m: "me!", f: "me!" },
//       1: { m: "son", f: "daughter" },
//       2: { m: "grandson", f: "granddaughter" },
//       3: { m: "great grandson", f: "great granddaughter" },
//     };
//         return elo[x][y]
// generation(2, "f") ➞ "granddaughter"

// generation(-3, "m") ➞ "great grandfather"

// generation(1, "f") ➞ "daughter"

//58

// function dropRight(arr, num = 1) {
//   if (num === 0) return arr;
//   return arr.slice(-num.length, -num);
// }

// console.log(dropRight([1, 2, 3]));
// console.log(dropRight([1, 2, 3], 2));

//59

// Hex to Binary

// toBinary(0xFF) ➞ "11111111"

// toBinary(0xAA) ➞ "10101010"

// toBinary(0xFA) ➞ "11111010"

// function toBinary(num) {
//     return parseInt(num).toString(2)
// }

// console.log(toBinary(0xFF))

//60

// Drink Sorting

// You will be given an array of drinks, with each drink being an object with two properties: name and price. Create a function that has the drinks array as an argument and return the drinks objects sorted by price in ascending order.

// drinks = [
//   { name: "lemonade", price: 51 },
//   { name: "lime", price: 5 },
//   { name: "applejuice", price: 47 },
//   { name: "water", price: 13 },
//   { name: "orangejuice", price: 46 },
//   { name: "coconut", price: 12 },
// ];

// //   sortDrinkByPrice(drinks) ➞ [{name: "lime", price: 10}, {name: "lemonade", price: 50}]

// function sortDrinkByPrice(drinks) {
//   return drinks.sort((a, b) => (a.price > b.price ? 1 : -1));
// }

// console.log(sortDrinkByPrice(drinks));

//61

// Even or Odd: Which is Greater?

// evenOrOdd("22471") ➞ "Even and Odd are the same"

// evenOrOdd("213613") ➞ "Even and Odd are the same"

// evenOrOdd("23456") ➞ "Even is greater than Odd"

// function evenOrOdd(str) {
//   let evenSum = 0;
//   let oddSum = 0;
//   for (num of str.split("")) {
//     let int = parseInt(num);

//     if (int % 2 === 0) {
//       evenSum += int;
//     } else {
//       oddSum += int;
//     }
//   }
//   if (evenSum === oddSum) return "Even and Odd are the same";
//   if (evenSum > oddSum) {
//     return "Even is greater than Odd";
//   } else {
//     return "Odd is greater than Even";
//   }
// }

// console.log(evenOrOdd("224715"));

//62

// Error Messages

// 1 >> "Check the fan"
// 2 >> "Emergency stop"
// 3 >> "Pump Error"
// 4 >> "c"
// 5 >> "Temperature Sensor Error"

// function error(n) {
// 	errorMessages = {
//         1: "Check the fan",
//         2: "Emergency stop",
//         3: "Pump Error",
//         4: "c",
//         5: "Temperature Sensor Error"
//     }
//     if(!errorMessages[n]) return 101;

//     return `${errorMessages[n]}: e${n}`
// }

// console.log(error(2))

//63

// Derivative of a Function

// derivative(1, 4) ➞ 1

// derivative(3, -2) ➞ 12

// derivative(4, -3) ➞ -108

// function derivative(b, m) {
//     exponent = b - 1
//     return b * m ** exponent
// }

// console.log(derivative(-2, 10))

//64

// Incorrect Import Statement

// fixImport("import object from module_name") ➞ "from module_name import object"

// fixImport("import randint from random") ➞ "from random import randint"

// fixImport("import pi from math") ➞ "from math import pi"

// function fixImport(s) {
//   arr = s.split(" ");
//   firstWord = arr[0];
//   secondWord = arr[1];
//   arr[0] = arr[2];
//   arr[1] = arr[3];
//   arr[2] = firstWord;
//   arr[3] = secondWord
//   return arr.join(" ");
// }

// console.log(fixImport("import pi from math"));

// const fixImport = (s) => {
// 	let [a,b,c,d]=s.split(' ')
// 	return `${c} ${d} ${a} ${b}`
// }

//65

// Slightly Superior

// You will be given two extremely similar arrays, but exactly one of the items in an array will be valued slightly higher than its counterpart (which means that evaluating the value > the other value will return true).

// Create a function that returns whether the first array is slightly superior to that of the second.

// function isFirstSuperior(arr1, arr2) {
// 	for(let i = 0; i < arr1.length; i++){
//         if(arr1[i] > arr2[i]) return true
//     }
//     return false
// }

// function isFirstSuperior(arr1, arr2) {
// 	return arr1 > arr2;
// }

// // isFirstSuperior(["a", "d", "c"], ["a", "b", "c"]) ➞ true

// console.log(isFirstSuperior(["a", "d", "c"], ["a", "b", "c"]))
// console.log(isFirstSuperior(["zebra", "ostrich", "whale"], ["ant", "ostrich", "whale"]))

//66

// Number Split

// numberSplit(4) ➞ [2, 2]

// numberSplit(10) ➞ [5, 5]

// numberSplit(11) ➞ [5, 6]

// numberSplit(-9) ➞ [-5, -4]

// function numberSplit(n) {
// 	if (n % 2 == 0) return [n/2, n/2]

//     return [Math.floor(n/2), Math.ceil(n/2)]

// }

// console.log(numberSplit(5))

//67
// Tile Teamwork Tactics
// In a board game, a piece may advance 1-6 tiles forward depending on the number rolled on a six-sided dice. If you advance your piece onto the same tile as another player's piece, both of you earn a bonus.

// Given you and your friend's tile number, create a function that returns if it's possible to earn a bonus when you roll the dice.

// possibleBonus(3, 7) ➞ true

// possibleBonus(1, 9) ➞ false

// possibleBonus(5, 3) ➞ false

// function possibleBonus(a, b) {
// 	if(a === b || a > b) return false;
//     if( b - a <= 6){
//         return true
//     }else{
//         return false
//     }
// }

// function possibleBonus(a, b) {
// 	return b - a <= 6 && b - a > 0
// }

// 68

// sortByLength(["a", "ccc", "dddd", "bb"]) ➞ ["a", "bb", "ccc", "dddd"]

// sortByLength(["apple", "pie", "shortcake"]) ➞ ["pie", "apple", "shortcake"]

// sortByLength(["may", "april", "september", "august"]) ➞ ["may", "april", "august", "september"]

// sortByLength([]) ➞ []

// function sortByLength(arr) {
//     return arr.sort((a,b)=> a.length - b.length)
// }

// // console.log(sortByLength(["a", "ccc", "dddd", "bb"]))

// console.log(sortByLength(["apple", "pie", "shortcake"]))

//69

// Even All the Way

// Given an array of numbers, return an array which contains all the even numbers in the orginal array, which also have even indices.

// getOnlyEvens([1, 3, 2, 6, 4, 8]) ➞ [2, 4]

// getOnlyEvens([0, 1, 2, 3, 4]) ➞ [0, 2, 4]

// getOnlyEvens([1, 2, 3, 4, 5]) ➞ []

// function getOnlyEvens(nums) {
//   const evens = [];
//   for (let i = 0; i < nums.length; i++) {
//     if (i % 2 === 0 && nums[i] % 2 === 0) {
//       evens.push(nums[i]);
//     }
//   }
//   return evens;
// }
// filter can take a second parameter which is the index
// function getOnlyEvens(nums) {
// 	return nums.filter((item,index) => !(item % 2) && !(index % 2))
// }
// console.log(getOnlyEvens([1, 3, 2, 6, 4, 8]));
// console.log(getOnlyEvens([47, 31, 24, 37, 29, 41, 31, 49, 4, 24]));
// console.log(getOnlyEvens([0, 1, 2, 3, 4]));

//70

// Burglary Series (04): Add its Name

// addName({}, "Brutus", 300) ➞ { Brutus: 300 }

// addName({ piano: 500 }, "Brutus", 400) ➞ { piano: 500, Brutus: 400 }

// addName({ piano: 500, stereo: 300 }, "Caligula", 440) ➞ { piano: 500, stereo: 300, Caligula: 440 }

// function addName(obj, name, value) {
// 	obj[name]=value
//     return obj
// }

// function addName (obj, name, value) {
// 	return {...obj, [name]: value}
// };

// console.log(addName({ piano: 500, stereo: 300 }, "Caligula", 440))

//71
// Emotify the Sentence

// emotify("Make me smile") ➞ "Make me :D"

// emotify("Make me grin") ➞ "Make me :)"

// emotify("Make me sad") ➞ "Make me :("

// function emotify(str) {
// 	const expressions = {
//         smile : ":D",
//         grin : ":)",
//         sad : ":(",
//         mad : ":P"
//     }

//     return `Make me ${expressions[str.split(" ")[2]]}`
// }

// console.log(emotify("Make me smile"))

//72

// repetition("ab", 3) ➞ "ababab"

// repetition("kiwi", 1) ➞ "kiwi"

// repetition("cherry", 2) ➞ "cherrycherry"

// function repetition(txt, n) {
//     let string = ""
// 	if(!n){
//         return string
//     }
//     return txt + repetition(txt, n - 1)
// }

// function repetition(txt, n) {
// 	return n ? txt + repetition(txt, n - 1) : '';
// }

// console.log(repetition("cherry", 2))
// console.log(repetition("ab", 3))

//73
// Find the Bomb
// bomb("There is a bomb.") ➞ "Duck!!!"

// bomb("Hey, did you think there is a bomb?") ➞ "Duck!!!"

// bomb("This goes boom!!!") ➞ "There is no bomb, relax."

// function bomb(str) {
// 	if(str.match(/\b(bomb)\b/gi)){
//         return "Duck!!!"
//     }
//     return "There is no bomb, relax."
// }
// console.log(bomb("This goes BoMb!!!"))

//74

// fruitSalad(["apple", "pear", "grapes"]) ➞ "apargrapepesple"

// fruitSalad(["raspberries", "mango"]) ➞ "erriesmangoraspb"

// fruitSalad(["banana"]) ➞ "anaban"

// function fruitSalad(arr) {
// 	firstChunks =  arr.map((fruit)=>{
//         return fruit.slice(0, fruit.length/2)
//     })
//     lastChunks =  arr.map((fruit)=>{
//         return fruit.slice(fruit.length/2)
//     })

//     return [...firstChunks, ...lastChunks].sort().join('')
// }

// console.log(fruitSalad(["apple", "pear", "grapes"]))

//75

// Highest Digit

// Create a function that takes a number as an argument and returns the highest digit in that number.

// highestDigit(379) ➞ 9

// highestDigit(2) ➞ 2

// highestDigit(377401) ➞ 7

// function highestDigit(number) {
//   const numbers = [];
//   if (number === 0) return 0;

//   while (number) {
//     numbers.push(number % 10);
//     number = Math.floor(number / 10);
//   }
//   return Math.max(...numbers);
// }

// console.log(highestDigit(10));

// 76

// Cycling Through Strings

// stringCycling("abc", "hello") ➞ "abcab"

// stringCycling("programming", "edabit") ➞ "progra"

// stringCycling("the world in me evolves in hers", "i love Tesh, so much so") ➞ "the world in me evolves"

// stringCycling("a thing of beauty is a joy forever", "indulge me surely") ➞ "a thing of beauty"

// stringCycling("to", "hide") ➞ "toto"

// stringCycling("such a feeling coming over me", "top of the world") ➞ "such a feeling c"


// function stringCycling(a, b) {
//     return b.length > a.length ? a.padEnd(b.length, a) : a.slice(0,b.length)    	
// }

// // const stringCycling = (a, b) => "".padEnd(b.length, a);

// console.log(stringCycling("abc", "hello"))
// console.log(stringCycling("programming", "edabit"))


// 77

// Array Operation

// arrayOperation(1, 10, 3) ➞ [3, 6, 9]

// arrayOperation(7, 9, 2) ➞ [8]

// arrayOperation(15, 20, 7) ➞ []

// function arrayOperation(x, y, n) {
//     const nums = []
// 	for(let i = x; i <= y; i++){
//         if(i % n === 0){            
//             nums.push(i)
//         }
//     }
//     return nums    
// }

// console.log(arrayOperation(1, 10, 3))
// console.log(arrayOperation(10, 50, 10))

//78

// const names = ["Dennis", "Vera", "Mabel", "Annette", "Sussan"]
// const jobs = ["Butcher", "Programmer", "Doctor", "Teacher", "Lecturer"]

// assignPersonToJob(names, jobs) ➞ {
//   Dennis: "Butcher",
//   Vera: "Programmer",
//   Mabel: "Doctor",
//   Annette: "Teacher",
//   Sussan: "Lecturer"
// }

// const names = ["Dennis", "Vera", "Mabel", "Annette", "Sussan"]
// const jobs = ["Butcher", "Programmer", "Doctor", "Teacher", "Lecturer"]

// function assignPersonToJob(names, jobs) {
//     const result = {};
// 	names.forEach((key, i)=> result[key] = jobs[i])    
// }

// console.log(assignPersonToJob(names, jobs))

// 79

// function makePlusFunction(num){
//     return function (x){
//         return x + num;
//     }
// }

// const plusTwo = makePlusFunction(2)
// const plusFive = makePlusFunction(5)
// const plusSeven = makePlusFunction(plusTwo(plusFive(0)))
// const plusTen = makePlusFunction(10)


