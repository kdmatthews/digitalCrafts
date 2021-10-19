
import './App.css';
import { useState } from "react";
import StudentContainer from './components/StudentContainer';
export const data = [
  {name: "Jose"},
  {name: "Britt"},
  {name: "Matt"},
  {name: "Dustin"},
  {name: "Justin"},
  {name: "Kayla"},
  {name: "Deanna"},
  {name: "Cameron"},
  {name: "Tim"},
  {name: "Ron"},
  {name: "Jamie"},
  {name: "Brande"},
  {name: "Jordan"},
  {name: "Xavier"},
  {name: "Jenny"},
  {name: "Pam"},
]
function App() {

  // const [students, setStudents] = useState(data);
  const [counter, setCounter] = useState(0);
  // state is a place that we can hold/store data
  // We store state in functional components using hooks
  // the process of passing state to another component is called props
  return (
    <div className="App">
  <h1>App Js</h1>
  <h3>Data starts here</h3>
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
