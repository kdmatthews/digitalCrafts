import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';

function App() {
  const user ={
    firstName: "Wendy",
    lastName: "Spruce",
    userName: "wspruce",
  };
  const birthday = "1/12/1980"
  return (
    <div className="App">
      <Header user={user}/>
      <Header user={user} birthday={birthday}/>
    </div>
  );
}

export default App;
