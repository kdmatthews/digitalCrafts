
import './App.css';
import SignUpForm from './components/SignUpForm';
import { useEffect } from "react"
import { useDispatch } from 'react-redux';

function App() {

  const dispatch = useDispatch()

  useEffect(()=>{
    getWeather();
  }, []);


  function convertFunction(data){
    dispatch({})
    return data
  }

  const getWeather = async () => {
    const data = await fetch("http://api.openweathermap.org/data/2.5/weather?q=houston&appid=ff1cadec65d9f10c3aafc2a01b14612c");
    const json = await data.json();
    dispatch({type: "WEATHER_DATA", payload: { json }});
    console.log(json);
  }

    // const data = fetch("http://api.openweathermap.org/data/2.5/weather?q=houston&appid=ff1cadec65d9f10c3aafc2a01b14612c")
    // .then(data => data.json()).then(jsonData => {
    //   convertFunction(jsonData)
    // }).then(data=>data)
    // };
  
  return (
    <div className="App">
      <SignUpForm />
     
    </div>
  );
}


export default App;
