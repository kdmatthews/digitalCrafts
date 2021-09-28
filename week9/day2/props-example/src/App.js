
import House from "./components/House";
import "./components/Building.css";

function App() {
  const couch = "Couch";
  const chair = "chair";
  const tv = "tv";

  const turnOnALight = () => {
    console.log("light")
  }
  return (
    <div className="App">
     <h1>APP JS</h1>
     <House couch={couch} chair={chair} tv={tv} turnOnALight={turnOnALight} />
    </div>
  );
}

export default App;
