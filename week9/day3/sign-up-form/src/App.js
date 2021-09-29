import { useState } from "react";
import Signup from "./components/Signup";
import Datbase from "./components/Database";


function App() {
  const [signUpItem, setSignUpItem] = useState({});
  const [signUpList, setSignUpList] = useState(['kayla', 'matthews']);
  // const [userInfo, setUserInfo] = useState({})
  return (
    <div className="App">
      <h1>Hello</h1>
      <Signup signUpItem={signUpItem} setSignUpItem={setSignUpItem} signUpList={signUpList} setSignUpList={setSignUpList}/>
      <Datbase signUpList={signUpList}/>
    </div>
  );
}

export default App;
