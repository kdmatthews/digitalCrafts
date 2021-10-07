import React, { useMemo } from 'react';
import "./SignUpStyle.css";
import { useDispatch, useSelector } from 'react-redux';
import debounce from "lodash.debounce";


export default function SignUpForm() {
   
    const dispatch = useDispatch()
    const user = useSelector(state=>state)
    const debouncedChangeHandler = useMemo(() => {
        return debounce(dispatch, 3000);
    }, []);
    return (
        <div className="signupform">
            <form action="">
            <input onChange={(e) =>debouncedChangeHandler({ type: "SIGNUPFORM_FIRSTNAME", payload:e.target.value, })}type="text" placeholder="First Name"/>
            <input onChange={(e) =>debouncedChangeHandler({ type: "SIGNUPFORM_LASTNAME", payload:e.target.value, })}type="text" placeholder="Last Name" />
            <input onChange={(e) =>debouncedChangeHandler({ type: "SIGNUPFORM_EMAIL", payload:e.target.value, })}type="email" placeholder="Email"/>
            <input onChange={(e) =>debouncedChangeHandler({ type: "SIGNUPFORM_PASSWORD", payload:e.target.value, })}type="password" placeholder="Password"/>
            <input type="submit"  />
            </form>
        </div>
    )
}
