// In Python
// list_of_peoples_name = ["Joe", "Sam"]

//in Javascript
const listOfPeoplesNames = ["Joe", "Sam"];
//const means constant it cannot be reassigned
const number1 ='1';
// let can be reasigned
let zak = "Zak";
// don't use var
var Xavier = "Xavier";

//functions

//In Javascript
//Method1
// function funtionName(){
//     //body of the function
//     return
// }
// funtion functionName2(){return "Joe is cool"//as long as 
// //you are inside the curly braces you will be inside the body of the function
// }

//Method 2 ES6 more modern way to write a function

// const functionName3 = () => {};
// const array = [1,2,3,4,5]
// const fulterArray = array.filter( (thingInTheArray) => {console.log(thingInTheArray)} )
// () => {return "Joe is super coooool"}
// console.log("hello")

const string = ""
const int = 123
const float = 1.3
const boolean = false
const array = [1,2,3,4,5]
const object = {key: "value"}

nameofStudents = ["Kayla", "Zak", "dustin"]
// loops
// in python, list 
// for singleItem in collectionosItems: we used []
// for in in Javascript is used for objects
// for of loop is used for array
//ES6
for (const singleIteminArray of array){
    console.log(singleIteminArray)
}
for (let index = 0; index < array.length; index++){
    const element = nameofStudents[0];
    console.log(element)
}

const tasForTheClass = {
    cohort: "07-2021",
    tas: ["Randy", "Q"]
}
for (const singleItemInObect in tasForTheClass){
    console.log(`${singleItemInObect}: ${tasForTheClass[singleItemInObect]}`)
}
