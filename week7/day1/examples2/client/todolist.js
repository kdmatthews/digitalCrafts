
const sendTodo = () =>{
    const todo = document.querySelector(".input").value;
    console.log(todo);
    // e.preventDefault();
    // console.log("Todo is sent");
}
const button = document.querySelector('.submit')
button.addEventListener("click", (e)=> {
    sendTodo(e);
})