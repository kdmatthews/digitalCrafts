import React, { useState } from 'react'
import { FormDiv, MainDiv, Input, InputDiv, Forgotpassword, RegisterButton, SignInButton, LoginHeader, SignUp, RememberMe  } from '../styled-components/FormStyle';
export default function Login() {
    const [formData, setFormData] = useState({});
    return (
        
        <FormDiv>
            
            <form>
                <LoginHeader>Login to continue!</LoginHeader>
                <InputDiv>
                <Input onChange={(e)=>setFormData({...formData,[e.target.name]:e.target.value})} type="text" placeholder="Username" name="username" value={formData?.username}/>
                {/* <Input onChange={(e)=>setFormData({...formData,[e.target.name]:e.target.value})} type="text" placeholder="email" name="email" value={formData?.email}/> */}
                <Input onChange={(e)=>setFormData({...formData,[e.target.name]:e.target.value})} type="password" placeholder="Password" name="password" value={formData?.password}/>
                <input type="checkbox" className="checkbox"/> <RememberMe for="checkbox">Remember Me </RememberMe>
                
                <SignInButton>LOGIN</SignInButton>
                <Forgotpassword>FORGOT YOUR PASSWORD?</Forgotpassword>
                <SignUp>New here? Sign Up</SignUp>
                </InputDiv>
               
              
            </form>
        </FormDiv>
     
    )
}
