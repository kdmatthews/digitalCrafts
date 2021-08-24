const container = document.querySelector('.main-container');
const input = document.querySelector('.todo-items');
const submit = document.querySelector('.submit-button');

const header = document.createElement('h1');
const directions = document.createElement('h3');
const list = document.createElement('p');

header.innerHTML = 'To-Do List';
directions.innerHTML = 'Please enter the items you would like to add to your list.'

container.append(header, directions);


function inputItems(){
    const valueOfInput = input.value
    // const todolist = document.querySelector('.todolist')
    let item = document.createElement("li")
    item.append(valueOfInput)
    container.append(item)
    
    
}
function createArray (){
    const array = []
    array.append(valueOfInput)
}
submit.onclick = inputItems;