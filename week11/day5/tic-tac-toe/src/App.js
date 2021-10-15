
import Tictactoe from './components/Tictactoe';
import './App.css';
import { useState } from "react";

import React from 'react';

function App() {
  const [XandO, setXandO] = useState(true)
  const XandOs = Array(9).fill(null)
  const winningSquares = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
    
  ]
  function reset (){
    return setXandO(XandO===true);
  }
 
  return (
    <div className="container">
 
 <h1>TicTacToe</h1>

 <div className="grid">
{XandOs.map((sqaure) => ( <Tictactoe XandO={XandO} setXandO={setXandO} XandOs={XandOs}/>)) }
</div>
<h2>Player X, it is your turn!</h2>
            <button onClick={()=>window.location.reload()}>reset</button>
          
    </div>
  );
}

export default App;
