import { useState } from "react";
import TodoItems from "./Todoitems";
function Todolist (){
    const [todoItem,settodoItem] = useState("");
    const [todoList, settodoList] = useState([]);
    return (
        <div>
            <h1>Todo List</h1>
            <input type="text" onChange={(e)=>settodoItem(e.target.value)}placeholder="add todo"/>
            <button onClick={()=>settodoList([...todoList, todoItem])}>Add a to-do</button>
            <TodoItems list={todoList}/>
        </div>
    )
}
export default Todolist;