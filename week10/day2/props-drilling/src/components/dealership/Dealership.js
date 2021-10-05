import React from 'react'
import { useSelector, useDispatch } from 'react-redux';


export default function Dealership() {
    const bugatti = useSelector(state=>state.bugatti)
    const kawasaki = useSelector(state=>state.kawasaki)
    const dispatch = useDispatch()
    return (
        <div>
            <h1>Dealership</h1>
            <p>{bugatti}</p>
            <p>{kawasaki}</p>
            <button onClick={()=>dispatch({type:"CHANGE_KAWASAKI"})}>Change Kawasaki</button>
        </div>
    )
}
