const container = document.querySelector('.main-container');
const input = document.querySelector('.todo-items');
const submit = document.querySelector('.submit-button');
const remove = document.querySelector('.removeall');
const second = document.querySelector('.second');


const header = document.createElement('h1');
// const directions = document.createElement('h3');
const list = document.createElement('p');


header.innerHTML = 'To Do List';
// directions.innerHTML = 'Please enter the items you would like to add to your list.'

container.append(header);




function inputItems(){
    const valueOfInput = input.value
    // const todolist = document.querySelector('.todolist')
    const item = document.createElement("li")
    item.append(valueOfInput)
    container.append(item)
   
  
}
function removeAll(){
    document.querySelector('.main-container').innerHTML="";
    container.append(header);
}

function resetInput(){
    document.querySelector(".todo-items").value=null;
    
};
submit.addEventListener("click", () => {
    inputItems();
    document.querySelector(".todo-items").value=null;
});
// submit.onclick = inputItems;
remove.onclick = removeAll;