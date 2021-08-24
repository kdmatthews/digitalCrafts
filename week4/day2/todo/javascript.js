const container = document.querySelector('.main-container');
const todoItems = document.querySelector('.todo-items');
const submitButton = document.querySelector('.submit-button');

const header = document.createElement('h1');
const directions = document.createElement('h3');
const list = document.createElement('p');
const array = []

header.innerHTML = 'To-Do List';
directions.innerHTML = 'Please enter the items you would like to add to your list.'

container.append(header, directions);

function inputItems(){
    const valueOftodoItems = todoItems.value
    list.innerHTML = valueOftodoItems
    container.append(list)
    alert(valueOftodoItems)
}

submitButton.onclick = inputItems;