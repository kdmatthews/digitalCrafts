// Const cannot be reassigned
const = variableName = 2
// let can be reassigned
let variableName2 = "2"
//var, same as let, just older, hoisted differently

var variableName3 = 3

// Method 1, FUNCTION KEYWORD
// anything inside the {} is the function body
function nameOfFunction(){

}

// ES6
const functionName2 = () => {}

// operators
// assignment = assigns what is on the right to go into what is on the left
const randy = ""
// Loose comparison
// Checks the type, then checks the value disregarding the type to see if they are equal
// Only used if code is buggy and only way to get it to work. not a good fix
const number5 = 5
number5 == 5
// Strict comparison, ===
// checks the type and value and they must be EXACT 
// Use for if statements
// 0  null empty "" Nan On -0 '' `` will always == false
// '0' ( a string containing anything), 'false' (a string containing the text), {} and empty object, [] an empty array, 
//  function (){} ( an empty function) == true
//  +, -, /, *
// increment ++, -- 
// % find the division remainer; modulus
//  !, NOT/BANG  - checking for the opposite ; used for if it is false
const randyIsInTX = ""
if(!randyIsInTX){
    console.log("Come home cowboy");
} else {
    console.log("You're right where you need to be");
}
// && and operator
// if (randy === "randy" && randy != "")
// || or operator if (randy.location == "TX" || randy.location == "FL")

// conditionals

if(1 > 2){
    console.log("1 is less than 2");
} else if (1 > 3){
    console.log ("Woah")
} else {
    console.log("Something happened and math no longer works");
}

// Switch Statement
// has to have what you are comparing and a default case. 
// If you don't use break it will check all of them even if it becomes true
const joe = "teacher"
switch(joe){
    case "teacher":
        console.log("Joe is a teacher")
        break;
    case "fire":
        console.log("joe is fire");
        break;
    default:
        console.log("Joe is boring")
}
// switch just makes it look nicer "syntactic sugar" easier to read than else if
// loops
// while loops are usually not necessary in javascript - too easy to break
// 1 define index make it zero, 2 check with length of index; 3 const element = THIS CREATES A VARIABLE 4.after it finishes checking it increments and keeps checking; 
// if 2 evaluates to false the loop is finished
for (let index = 0; index < Array.length; index ++) {
    const element = array[index];
}

const array = [1, 2, 3, 4, 5]

const fruitSalad = ["mango", "strawberries", "pinaepples", "cocunut"];
fruitSalad[1]
fruitSalad[3]
for (let index = 0; index < fruitSalad.length; index++) {
    const element = fruitSalad[index];
    if(element === "mangoes"){
        console.log(element)
    }
    console.log(element)
}

// syntactic sugar
for(let fruit of fruitSalad){
    console.log(fruit)
}
// object
const pinaeple = {
    name: "pinaepple",
    taste: "sweet and tart",
    easyToPeel: "No",
};
// to print a value in an onject use dot notation
console.log(pinaeple.emoji)

// To change it you would use dot notation to reassign values. 
pinaeple.easyToPeel = 'blah'

