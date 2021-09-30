import { useState } from "react";
import Signup from "./components/Signup";
import Database from "./components/Database";
import { MainDiv } from "./styled-components/SignUpStyle"
// import "./components/style.css"


function App() {
  const [signUpItem, setSignUpItem] = useState({});
  const [signUpList, setSignUpList] = useState([]);
  const data = signUpList
  console.log(data)

  return (
    <MainDiv>
      {/* <div>
        <h1>Sign Up </h1> */}
      <Signup signUpItem={signUpItem} setSignUpItem={setSignUpItem} signUpList={signUpList} setSignUpList={setSignUpList}/>
      {/* </div>
      <div> */}
        {/* <h1>Database</h1> */}
      {data.map((user) => (
        <Database data={user}/>
      ))}
           
      {/* </div> */}
    </MainDiv>
  );
}

export default App;
