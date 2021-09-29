import { useState } from "react";
import Form from "./components/Form";
import ToDoList from "./components/ToDoList";
// useState is hook
// state = {
// counter: 0,
// username: "",
// pokemon: [{id: 1, name: "pikachu"}]
// }
function App() {
  // state = { counter: 0}
  // this.state.counter
  // incrementCounter(){
  //   this.setState({counter: this.state.counter++})
  // }
  // decrememntCounter(){
    // this.setState({counter: this.state.counter--}) 
  // }
 
  // hook
const [counter,setCounter] = useState(0);
const [username, setUserName] = useState("No user selected");





  return (
    <div className="App">
    {/* <h1>HOOKS</h1>
    
    <p> User is: {username}</p>
    <input onChange={(e) => setUserName(e.target.value)}type="text" placeholder="Type a username here"/>
    <button onClick={()=>setUserName("Ron")}>Change user to Ron</button>
    <div>
    <p> Counter is: {counter}</p>
    <button onClick={()=>setCounter(counter+1)}>Add</button>
    <button onClick={()=>setCounter(counter-1)}>Subtract</button> */}

    <Form />
    <ToDoList />
    </div>
    // </div>
  );
}

export default App;
