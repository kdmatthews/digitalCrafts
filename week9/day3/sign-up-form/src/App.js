import { useState } from "react";
import Signup from "./components/Signup";
import Database from "./components/Database";
import "./components/style.css"


function App() {
  const [signUpItem, setSignUpItem] = useState({});
  const [signUpList, setSignUpList] = useState([]);
  const data = signUpList
  console.log(data)

  return (
    <div className="App">
      <h1>Hello</h1>
      <Signup signUpItem={signUpItem} setSignUpItem={setSignUpItem} signUpList={signUpList} setSignUpList={setSignUpList}/>
      {data.map((user) => (
        <Database data={user}/>
      ))}
           
    </div>
  );
}

export default App;
