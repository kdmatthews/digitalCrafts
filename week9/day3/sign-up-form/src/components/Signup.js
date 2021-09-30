import React from "react";
import { SignUpDiv, Input, Header, Button } from "../styled-components/SignUpStyle";


export default function Signup(props) {
    const { signUpItem, setSignUpItem, signUpList, setSignUpList } = props;
    

    return (
        <SignUpDiv>
            <Header>Sign Up</Header>
            
            {/* <form action=""> */}

                <Input type="text" onChange={(e)=>setSignUpItem({...signUpItem, [e.target.name]:e.target.value})} name="firstName" placeholder="First Name" onfocus="this.value=''" />
                <Input type="text" onChange={(e)=>setSignUpItem({...signUpItem, [e.target.name]:e.target.value})} name="lastName" placeholder="Last Name"/>
                <Input type="text" onChange={(e)=>setSignUpItem({...signUpItem, [e.target.name]:e.target.value})} name="DOB" placeholder="Date of Birth"/>
                <Input type="text" onChange={(e)=>setSignUpItem({...signUpItem, [e.target.name]:e.target.value})} name="address" placeholder="Address"/>
                <Input type="text" onChange={(e)=>setSignUpItem({...signUpItem, [e.target.name]:e.target.value})} name="city" placeholder="City"/>
                <Input type="text" onChange={(e)=>setSignUpItem({...signUpItem, [e.target.name]:e.target.value})} name="state" placeholder="State"/>
                <Input type="text" onChange={(e)=>setSignUpItem({...signUpItem, [e.target.name]:e.target.value})} name="zipcode" placeholder="Zipcode"/>
                <Input type="text" onChange={(e)=>setSignUpItem({...signUpItem, [e.target.name]:e.target.value})} name="username" placeholder="Username"/>
                <Input type="text" onChange={(e)=>setSignUpItem({...signUpItem, [e.target.name]:e.target.value})} name="email" placeholder="Email"/>
                <Button onClick={()=>setSignUpList([...signUpList, signUpItem])}>Submit</Button>
               
{/*             
            </form> */}
  
        </SignUpDiv>
    )
}
