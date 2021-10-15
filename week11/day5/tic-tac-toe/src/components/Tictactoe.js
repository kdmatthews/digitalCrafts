import React from 'react';
import "../App.css";


export default function Tictactoe(props) {
    const { XandO, setXandO, XandOs } = props
    console.log(XandO)
   
    return (
        <div>
           
            <button onClick={()=> setXandO(!XandO)}>{ XandO ? "X" : "O" }</button>
     
            
            
        </div>
    )
}
