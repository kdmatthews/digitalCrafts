// import Dealership from "./components/dealership/Dealership";
// import Neighborhood from "./components/neighborhood/Neighborhood";
import {useState} from "react";
import "./App.css";
import Exotic from "./components/garage/Exotic";
import Dealership from "./components/dealership/Dealership";

function App() {
  const [mustang, setMustang] = useState("2021 Mustang GT");
  // setMustang("Ford Pinto");
  return (
    <div className="App">
      <h1>props drilling</h1>
      {mustang}
      <Exotic />
      <Dealership />
      {/* <Neighborhood />
      <Dealership /> */}
    </div>
  );
}

export default App;
