import React, { useState } from 'react'
import { FooterDiv, MainDiv, Input, InputDiv, Forgotpassword, RegisterButton, SignInButton  } from '../styled-components/FormStyle';
export default function Form() {
    const [formData, setFormData] = useState({});
    return (
        
        <FooterDiv>
            
            <form>
                <h1>Login</h1>
                <InputDiv>
                <Input onChange={(e)=>setFormData({...formData,[e.target.name]:e.target.value})} type="text" placeholder="username" name="username" value={formData?.username}/>
                {/* <Input onChange={(e)=>setFormData({...formData,[e.target.name]:e.target.value})} type="text" placeholder="email" name="email" value={formData?.email}/> */}
                <Input onChange={(e)=>setFormData({...formData,[e.target.name]:e.target.value})} type="password" placeholder="password" name="password" value={formData?.password}/>
                </InputDiv>
                <Forgotpassword>FORGOT YOUR PASSWORD?</Forgotpassword>
                <div>
                <RegisterButton>Register</RegisterButton>
                <SignInButton>Sign In</SignInButton>
               
                </div>
            </form>
        </FooterDiv>
     
    )
}
