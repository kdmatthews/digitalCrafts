import React, { useState } from 'react'
import { FormDiv, MainDiv, Input, InputDiv, Forgotpassword, RegisterButton, SignInButton, LoginHeader, SignUp, RememberMe  } from '../styled-components/FormStyle';
import { createClient } from '@supabase/supabase-js';
import { useHistory } from "react-router-dom";
import { useDispatch } from 'react-redux';

// Create a single supabase client for interacting with your database 
const supabase = createClient("https://jfrtzyokxuzffqtuugvh.supabase.co", 
"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzMTIwNTA5NCwiZXhwIjoxOTQ2NzgxMDk0fQ.PiBzH9tPOgoLerSrGMRKUfsdXVonFWXGiQ8VX2YU-Ic");
export default function Login(props) {
    const [formData, setFormData] = useState({username: "", password: ""});
    const history = useHistory();
    const dispatch = useDispatch();
    console.log(formData)
    

    // login user
    const login = async (e) => {
        e.preventDefault();
        const { user, session, error } = await supabase.auth.signIn({
            email: formData.username,
            password: formData.password,
          })
          if (session) {
          history.push("/dashboard");
          console.log(formData.username)
        dispatch({type: "GET_USER", payload: formData.username})
        //   console.log(user, session, error);
    }   else {
        alert(error.message);
    }
};

    // register user
    const register = async (e) => {
        e.preventDefault();
        const { user, session, error } = await supabase.auth.signUp({
            email: formData.username,
            password: formData.password,
          })
          if( user ) {
              history.push("/login");
          } else {
              alert(error.message);
          }
          console.log(error)
    }
    return (
        
        <FormDiv>
            
            <form>
                <LoginHeader>Login to continue!</LoginHeader>
                <InputDiv>
                <Input onChange={(e)=>setFormData({...formData,[e.target.name]:e.target.value})} type="text" placeholder="Username" name="username" value={formData?.username}/>
                {/* <Input onChange={(e)=>setFormData({...formData,[e.target.name]:e.target.value})} type="text" placeholder="email" name="email" value={formData?.email}/> */}
                <Input onChange={(e)=>setFormData({...formData,[e.target.name]:e.target.value})} type="password" placeholder="Password" name="password" value={formData?.password}/>
                <input type="checkbox" className="checkbox"/> <RememberMe for="checkbox">Remember Me </RememberMe>
                
               {props?.register ? <SignInButton onClick={(e)=>register(e)} type="submit">Register</SignInButton> :
                <SignInButton onClick={(e)=>login(e)}type="submit">LOGIN</SignInButton>}
                <Forgotpassword>FORGOT YOUR PASSWORD?</Forgotpassword>
                <SignUp>New here? Sign Up</SignUp>
                </InputDiv>
               
              
            </form>
        </FormDiv>
     
    )
}
