// write a loop that creates a new array with the square of each number

const numbers = [2,4,9,12]

let newArray = []

// for (let i = 0; i < 4; i++) {
//     result = numbers [i] ** 2;
//     newArray.push(result)
// }

// console.log(newArray)

// now pass in any array

// const newNumbers = [2,4,6,8,10,12,14,16]

// function squareNumbers(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         const result = arr[i] ** 2;
//         newArray.push(result)
//     }
//     return newArray
// }

// console.log(squareNumbers(newNumbers))

// https://avantutor.com/blog/10-simple-javascript-for-loop-exercises/
//Exercise 4)
// Given two arrays of integers. Add up each element in the same position and
// create a new array containing the sum of each pair. Assume both arrays are of the same length.

 
// let arr_3 = [4, 6, 7];
// let arr_4 = [8, 1, 9];
// // Example output: 
// // [12, 7, 16]
// let additionArray = []

// function resultsArray (arr1, arr2) {
//     for (i = 0; i < arr1.length; i++) {
//         const result = arr1[i] + arr2[i]
//         additionArray.push(result)
//     }
//     return(additionArray)
// }

// console.log(resultsArray(arr_3, arr_4))

// Exercise 1)
// Get the sum of two arrays…actually the sum of all their elements.
// P.S. Each array includes only integer numbers. Output is a number too.

// let arr_1 = [3, 5, 22, 5,  7,  2,  45, 75, 89, 21, 2]; // --> 276
// let arr_2 = [9, 2, 42, 55, 71, 22, 4,  5,  90, 25, 26]; // --> 351
// // // Example output: 

// let sumArr1
// let sumArr2

// function sumOfNumbers (arr) {
//     let sum = 0
//     for (i = 0; i < arr.length; i++) {
//         sum = sum + arr[i] //sum += arr[i]
//     }
//     return sum
// }

// console.log(sumOfNumbers(arr_1))

// Exercise 5)
// Given a string change the every second letter to an uppercase ‘Z’. Assume
// there are no space.

let str1 = "javascript";  

// // Example output: 
// // jZvZsZrZpZ OR each letter on a new line
// // HINT: You can use  if((i+1) % 2 == 0) to check for even indexes

function changeLetter(string) {
    let str2 = ""
    for (let i = 0; i < string.length; i++) {
        if ((i + 1) % 2 == 0) { // (i+1) compensates for index 0, and skips to every SECOND letter in the string array
            newString += 'Z'
        }
        else {
            newString = newString + string[i]
            //newString += string[i]
        }
    }
    return newString
}
const result = changeLetter(str1)
console.log(result)


// or Brian's way

function changeLetter(string){
    let text = '';
    for (let i = 0; i <string.length; i++){
        if ((i+1) % 2 !== 0) {
        text += string[i] + 'Z' 
        } 
    }
    return text
}

console.log(changeLetter(str1))
