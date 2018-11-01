// 1) Make an array from the one below called fave_demo that contains only ages from 18 - 49
let ages = [12, 23, 89, 16, 34, 19, 2, 7, 45, 50, 26, 102]
let ageRange = ages.filter(age => age > 17 && age < 50).sort((a, b) => a-b)
ageRange

// 2) Choose a loop method of your choice to get this result from this array:
let nums = [1, 2, 3, 4, "5", 6, "7"]

let newNums = nums.map(number => parseInt(number))
newNums.push(9, 11, 13)
newNums

let filteredNumber = newNums.filter(num => num%2 !== 0 && num !== 1)
filteredNumber
// expected result:
// `[3, 5, 7, 9, 11, 13]`


// 3) Capitalize 'the', insert a comma after 'teacher' and output "Yoda says, "The greatest teacher, failure is"

let yoda_quote = ["the", "greatest", "teacher", "failure", "is"]

yoda_quote.unshift("Yoda", "says,")

let filteredQuote = yoda_quote.map(word => {
  if(word === "the"){
    return '"The'
  } else if(word === "teacher"){
    return "teacher,"
  } else if(word === "is"){
    return 'is"'
  } else{
    return word
  }
})
let finalAnswer = filteredQuote.join(" ")
finalAnswer


// Straightforward Approach
// yoda_quote.splice(0, 1, '"The')
// yoda_quote.splice(2, 1, "teacher,")
// yoda_quote.splice(4, 1, 'is"')
// yoda_quote.unshift("Yoda", "says,")
// let finalQuote = yoda_quote.join(" ")
// finalQuote

// More complex approach
// let yoda_quote2 = ["the", "greatest", "teacher", "failure", "is"]

// let updateArray = yoda_quote2.filter(word => yoda_quote2.indexOf(word)<3)
// updateArray.push(",")

// updateArray

// let firstWord = yoda_quote2.shift(1).split("")
// let capitalLetter = firstWord.splice(0, 1, '"', (firstWord[0].toUpperCase()))

// let updatedFirstWord = yoda_quote2.unshift(firstWord.join(""))

// let closingQuote = yoda_quote2.pop().split("")
// closingQuote.push('"')
// let newLast = yoda_quote2.push(closingQuote.join(""))
// let insertComma = yoda_quote2.filter(word => yoda_quote2.indexOf(word)===2)
// insertComma.push(",")
// let newWord = insertComma.join("")

// insertComma
// newWord
// yoda_quote2.splice(2, 1, newWord)
// yoda_quote2.unshift("Yoda", "says,")
// let finalResult = yoda_quote.join(" ")
// finalResult

// yoda_quote2



// 4)  * Sort the following numbers in descending order
//    * Remove any integers greater than 19.
//    * Multiply each remaining number by 1.5 and then substract 1.
//    * Then output (either in the DOM or the console) the sum of all the resulting numbers.

const integers = [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8]

let filteredNumbers = integers.filter(number => number < 19)
filteredNumbers


let sortedInt = filteredNumbers.sort((a, b)=> a-b)
sortedInt

let doSomeMath = sortedInt.map(number => (number* 1.5)-1)
doSomeMath

let total = doSomeMath.reduce((accumulator, next)=> accumulator + next)
total