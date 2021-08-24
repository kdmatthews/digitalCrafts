// document object, or just the document
// document.
// getElementsByTagName('p')
// getElementsByClassName('link')
// getElementById('password')
// querySelector gets one thing that matches the search condition.
// querySelector('#password')
// querySelectorAll gets all things that match search conditions
// querySelectorAll('.link')
// document.getElementsByClassName('main-container')


// paper first method
const container = document.querySelector('.main-container');
const secondaryCont = document.querySelector('.secondary-div');
const input = document.querySelector(".input");
const submitButton = document.querySelector('.submit-button');


// you choose what you want to write
const studentName = document.createElement("li");
const studentName2 = document.createElement('h3');
const word = document.createElement('p');


// you write the words out
studentName.innerHTML = 'Deanna'
studentName2.className = "Brande";
studentName2.innerHTML = 'Brande';



function alertMe(){
    const valueOfInput = input.value;
    word.innerHTML = valueOfInput;
    secondaryCont.append(word);
    console.log("this is valueOfInput", valueOfInput);
    alert(valueOfInput);
}
function successMessage(){
    alert("Todo has been added!");
}
// This is adding a function to the event called onClick.
// every time the event is triggered it will run this function
// submitButton.onclick = alertMe;

// An eventlistener lets you add as many functions to the call when the event is triggered
submitButton.addEventListener("click", () => {
    successMessage();
    alertMe();
    console.log("I got clicked");
});
submitButton.onclick = successMessage;
// an eventlistener
input.onchange = () => console.log(input.value);
// append your thought onto the actual paper
container.append(studentName, studentName2);


// paperfirst
// querySelector
// createElement
// change innerHTML of the element
// append to what you selected

// pen first
// createElement
// change innerHTML of the element
// querySelector
// append to query selector