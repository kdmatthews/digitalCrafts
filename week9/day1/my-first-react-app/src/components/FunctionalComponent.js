import React, { useState } from 'react';


export default function FunctionalComponent() {
    const [counter,setCounter] = useState(0)
    const [studentName, setstudentName] = useState("Jordan");
    return (
        <div>
            <p>Functional Counter</p>
            <p>Counter is: {counter}</p>
            <p>student name : {studentName}</p>
            <button onClick={()=>setCounter(counter + 1)}>Increase</button>
            <button onClick={()=>setCounter(counter - 1)}>Decrease</button>
            <button onClick={()=>setstudentName("Dustin")}>Change the student</button>
        </div>
    )
}
