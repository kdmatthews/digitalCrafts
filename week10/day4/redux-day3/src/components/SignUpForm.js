import React, { useMemo } from 'react';
import "./SignUpStyle.css";
import { useDispatch, useSelector } from 'react-redux';
import debounce from "lodash.debounce";
import { ConsoleLogVariable, IncrementCounter, DecrementCounter } from '../actions/SignUpFormActions';
import { DECREMENT_COUNTER, INCREMENT_COUNTER } from '../action-types/counter-types';


export default function SignUpForm() {
   
    const dispatch = useDispatch()
    const user = useSelector((state) =>state);
    const counter = useSelector((state) => state.Counter);
    const debouncedChangeHandler = useMemo(() => {
        return debounce(dispatch, 3000);
    }, []);
    const DOTWOFUNCTION = () =>{
        console.log("Cowboo")
        dispatch({type: "INCREMENT_COUNTER"});
        dispatch({type: "FILL_INFO"});
    }


    const ConsoleLogVariable = (name) =>{
        console.log(name)
    }
    
    return (
        <div className="signupform">

            <form action="">
            <input onChange={(e) =>debouncedChangeHandler({ type: "SIGNUPFORM_FIRSTNAME", payload:e.target.value, })}type="text" placeholder="First Name"/>
            <input onChange={(e) =>debouncedChangeHandler({ type: "SIGNUPFORM_LASTNAME", payload:e.target.value, })}type="text" placeholder="Last Name" />
            <input onChange={(e) =>debouncedChangeHandler({ type: "SIGNUPFORM_EMAIL", payload:e.target.value, })}type="email" placeholder="Email"/>
            <input onChange={(e) =>debouncedChangeHandler({ type: "SIGNUPFORM_PASSWORD", payload:e.target.value, })}type="password" placeholder="Password"/>
            <input type="submit"  />
            </form>
            {/* {counter}
            <div>
            <button onClick={() => DOTWOFUNCTION()}>Increment Counter</button>
            <button onClick={() => dispatch({type: "DECREMENT_COUNTER"})}>Decrement Counter</button> */}
           <div>
            <button onClick={()=> ConsoleLogVariable("Kayla")}>Print To Conolse</button>
            </div>
            <div>
            <button onClick={()=> IncrementCounter(dispatch, "incremented")}>Increment</button>
            <button onClick={()=> DecrementCounter(dispatch, "decremented")}>Decrement</button>
            </div>

        </div>
    )
}
