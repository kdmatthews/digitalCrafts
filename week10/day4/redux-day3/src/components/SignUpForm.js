import React, { useState } from 'react';
import "./SignUpStyle.css";
import { useDispatch } from 'react-redux';


export default function SignUpForm() {
   
    const dispatch = useDispatch()
    return (
        <div className="signupform">
            <form action="">
            <input onChange={(e) => dispatch({ type: "SIGNUPFORM_FIRSTNAME", payload:e.target.value})}type="text" placeholder="First Name"/>
            <input type="text" placeholder="Last Name" />
            <input type="email" placeholder="Email"/>
            <input type="password" placeholder="Password"/>
            <input type="submit"  />
            </form>
        </div>
    )
}
