import React from "react";
import { SignUpDiv, Input, Header, Button } from "../styled-components/SignUpStyle";


export default function Signup(props) {
    const { signUpItem, setSignUpItem, signUpList, setSignUpList } = props;

    const resetInputField = () => {
        setSignUpItem("")
    }

    return (
        <SignUpDiv>
            <Header>Sign Up</Header>
            
            {/* <form action=""> */}

                <Input type="text" onChange={(e)=>setSignUpItem({...signUpItem, [e.target.name]:e.target.value})} name="firstName" placeholder="First Name" value={signUpItem?.firstName} />
                <Input type="text" onChange={(e)=>setSignUpItem({...signUpItem, [e.target.name]:e.target.value})} name="lastName" placeholder="Last Name"value={signUpItem?.lastName}/>
                <Input type="text" onChange={(e)=>setSignUpItem({...signUpItem, [e.target.name]:e.target.value})} name="DOb" placeholder="Date of Birth"value={signUpItem?.DOb}/>
                <Input type="text" onChange={(e)=>setSignUpItem({...signUpItem, [e.target.name]:e.target.value})} name="address" placeholder="Address"value={signUpItem?.address}/>
                <Input type="text" onChange={(e)=>setSignUpItem({...signUpItem, [e.target.name]:e.target.value})} name="city" placeholder="City"value={signUpItem?.city}/>
                <Input type="text" onChange={(e)=>setSignUpItem({...signUpItem, [e.target.name]:e.target.value})} name="state" placeholder="State"value={signUpItem?.state}/>
                <Input type="text" onChange={(e)=>setSignUpItem({...signUpItem, [e.target.name]:e.target.value})} name="zipcode" placeholder="Zipcode"value={signUpItem?.zipcode}/>
                <Input type="text" onChange={(e)=>setSignUpItem({...signUpItem, [e.target.name]:e.target.value})} name="username" placeholder="Username" value={signUpItem?.username}/>
                <Input type="text" onChange={(e)=>setSignUpItem({...signUpItem, [e.target.name]:e.target.value})} name="email" placeholder="Email"value={signUpItem?.email}/>
                <Button onClick={()=>setSignUpList([...signUpList, signUpItem])}>Submit</Button>
               
{/*             
            </form> */}
  
        </SignUpDiv>
    )
}
