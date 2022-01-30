let msg1 = "Let's go to the beach"
let msg2 = "Let's go to \'Johnny's\""
let msg3 = 'Let\'s go to the beach'
let book = '"The Road less Traveled" by M.Scott Peck'

console.log(book)

const course = 'Software Engineering Course'

console.log('I am studying in the' + course)
console.log('I am studying in the ' + course)
console.log('I am studying in the', course) //the comma adds a space

const city = 'Boca Code'
//Teamplate Literals
console.log(`I am studying in the ${course} is ${city}`); // each variable should be printed using ${}

//null vs undefined

const a = null
console.log(a)

//Operations
let x = 1
console.log(x)

//Unary operation - Unary operation is operated on a single operand
x = -x
console.log(x)

//Binary operation
let y = 9
let z = 3
console.log(y + z);
console.log(y - z);
console.log(y * z);
console.log(y / z);
console.log(y % z); //modulo-operator, prints the remainder
console.log(y ** z); //exponentiation -  raising the first value(number) to the power of the second value(number): 8^2

//Comparisons: < > >= <=
//When comparing values, we 

console.log(y > z) // false
console.log(y < z) // true
console.log(y < z) // false
console.log(y < z) // true

//Arrays - a collection of items that are ordered (index position of the element in the array)

let myArray1 = ['apple', 'orange'] //this array contains 2 elements that are of type(number)

let myArray2 = ['hi', 'hello', 'aloha'] //this array contains 3 elements that are of type string

let myArray3 = [{greeting:'hi'}, {greeting: 'hola'}]

console.log(myArray2[0]) // prints out hi

console.log(myArray2[1]) // prints out aloha

console.log(myArray2[3]) // prints out undefined because there is no such elemnt at index 3 in the array

console.log(myArray1[1]) 


//Objects: 

let laptop = {
    name: 'Apple MacBook Air',
    color: 'Space Grey',
    price: 1100
};

console.log(laptop.name) //Dot notation
console.log(laptop["name"]) //Bracket notation - be sure to wrap the property in quotes *most commpnly used with Arrays*

console.log(laptop.memory) //Will print undefined because no such property was defined in the object

console.log(laptop) //Will print the whole object

console.log(laptop.name, laptop.color)

console.log(`My ${laptop.name} is ${laptop.color}`)

//Functions

//This first function does not have or 'accept' any arguemnts
//This function does some stuff but does not return a value
function greet() {
    //do some stuff
    console.log('Hi')
    console.log('How are you')
}

greet() //Calling the function; telling the function to run // prints Hi /n How are you?
greet() //Calling the function again


let number1 = 2
let number2 = 4

function addTwoNums() {
    let sum = number1 + number2
    console.log(sum)
    // console.log(sum) will print 2
}

addTwoNums()


function addTwoNums() {
    console.log(number1 + number2)
}

addTwoNums()

