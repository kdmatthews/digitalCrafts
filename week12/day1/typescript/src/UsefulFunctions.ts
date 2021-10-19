export const data = [
    "joe", "brande", "britt", "q", "dustin", "jose"
]

interface Student {
    firstName: string,
    lastName: string,
    birthday?: string
}

interface Teacher {
    firstName: string,
    lastName: string,
    birthday?: string,
    position: string
}

export const Tim:Student = {
    firstName:"Tim",
    lastName: "Davis",
}

export const Joe:Teacher = {
    firstName: "Joe",
    lastName: "Fraiser",
    birthday: "Wouldn't you like to know",
    position: "teacher"
}

let Jenny = "smiley cat"
let Cameron = true
Cameron = false
let Britt = {
    name: "Britt",
    age: 72929303,
    inaHouse: true
}
if(Cameron){
    console.log("Cameron is real")
}
// interface sayhelloInterface {
//     name: string,
// }
function sayHelloToAStudent (student:string){
    console.log("Hello ", student)
}

sayHelloToAStudent(Britt.name)