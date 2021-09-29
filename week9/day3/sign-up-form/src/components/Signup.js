import React from "react";


export default function Signup(props) {
    const { signUpItem, setSignUpItem, signUpList, setSignUpList } = props;
    console.log(signUpList)
    console.log(signUpItem)

    return (
        <div>
            <h1>SignUp</h1>
            <form action="">

                <input type="text" onChange={(e)=>setSignUpItem({...signUpItem, [e.target.name]:e.target.value})} name="firstName" placeholder="First Name"/>
                <input type="text" onChange={(e)=>setSignUpItem({...signUpItem, [e.target.name]:e.target.value})} name="lastName" placeholder="Last Name"/>
                <input type="text" onChange={(e)=>setSignUpItem({...signUpItem, [e.target.name]:e.target.value})} name="DOB" placeholder="Date of Birth"/>
                <input type="text" onChange={(e)=>setSignUpItem({...signUpItem, [e.target.name]:e.target.value})} name="address" placeholder="Address"/>
                <input type="text" onChange={(e)=>setSignUpItem({...signUpItem, [e.target.name]:e.target.value})} name="city" placeholder="City"/>
                <input type="text" onChange={(e)=>setSignUpItem({...signUpItem, [e.target.name]:e.target.value})} name="state" placeholder="State"/>
                <input type="text" onChange={(e)=>setSignUpItem({...signUpItem, [e.target.name]:e.target.value})} name="zipcode" placeholder="Zipcode"/>
                <input type="text" onChange={(e)=>setSignUpItem({...signUpItem, [e.target.name]:e.target.value})} name="username" placeholder="Username"/>
                <input type="text" onChange={(e)=>setSignUpItem({...signUpItem, [e.target.name]:e.target.value})} name="email" placeholder="Email"/>
                {/* <input type="button" value="Submit" onClick={console.log("clicked")}/> */}
                <button onClick={()=>setSignUpList({...signUpList, signUpItem})}>Submit</button>
               
            
            </form>
  
        </div>
    )
}
