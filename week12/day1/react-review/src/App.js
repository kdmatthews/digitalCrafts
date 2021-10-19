
import './App.css';
import { useState } from "react";
import StudentContainer from './components/StudentContainer';
import {useDispatch, useSelector} from "react-redux";
function App() {

  // const [students, setStudents] = useState(data);
  // const [counter, setCounter] = useState(0);
  const [inputValue, setInputValue] = useState(0)
  const dispatch= useDispatch()
  const counter = useSelector(state=>state.counter)
 
  // dispatch({ type: "GET_STUDENTS "})
  // state is a place that we can hold/store data
  // We store state in functional components using hooks
  // the process of passing state to another component is called props
  return (
    <div className="App">
  <h1>App Js</h1>
  <h3>Data starts here</h3>
  {counter}
  <input type="number" onChange={(e)=>setInputValue(parseInt(e.target.value))} />
  <button  onClick={()=>dispatch({type: "THE_COUNTER",payload:inputValue})}>Increase Counter</button>
  <StudentContainer />
    </div>
  );
}
// Action is dispatched
// Middleware intercepts the action (this is perfect for api calls)
// After middleware is done with it, the action matches a reducer
// Reducers will then update state
// The store will then send the updaed state
// This will cause a rerender

export default App;
