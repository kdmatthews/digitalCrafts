import { useState } from "react";
import Signup from "./components/Signup";
import Datbase from "./components/Database";


function App() {
  const [signUpItem, setSignUpItem] = useState("");
  const [signUpList, setSignUpList] = useState([]);
  const [userInfo, setUserInfo] = useState({})
  return (
    <div className="App">
      <h1>Hello</h1>
      <Signup />
      <Datbase />
    </div>
  );
}

export default App;
