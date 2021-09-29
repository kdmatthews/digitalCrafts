import { useState } from "react";

function Form(){
    const [signUpForm,setSignUpForm] = useState({})
    const array1 = [1,2];
    const array2 = [3,4];
    const array3 = [...array1,...array2]
    console.log(array3);

    const obj1 = { firstName: "Joe" };
    const obj2 = { lastName: "Fraiser" };
    const obj3 = { ...obj1,...obj2 };
    console.log(array3);
    return (
        <div>
        <h1>LinkedIn signup Form</h1>
        <form action="">
            <input type="text" onChange={(e)=>setSignUpForm({...signUpForm, [e.target.name]:e.target.value})} name="firstName" placeholder="First Name"/>
            <input type="text" onChange={(e)=>setSignUpForm({...signUpForm, [e.target.name]:e.target.value})} name="lastName" placeholder="Last Name"/>
            <input type="text" onChange={(e)=>setSignUpForm({...signUpForm, [e.target.name]:e.target.value})} name="email" placeholder="Email"/>
            <input type="button" value="Submit"/>
        </form>
        </div>
    )
}

export default Form;