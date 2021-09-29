import React from "react";

export default function Database(props) {
    const { data } = props;
    console.log(data)
    const address = data.address
    const firstname = data.firstName
    const lastname = data.lastName
    const city = data.city
    const state = data.state
    const zipcode = data.zipcode
    const username = data.username
    const email = data.email

   
    // const address = signUpList[0].address
    // const firstName = signUpList[0].firstName
    // const lastName = signUpList[0].lastName
    return (
        
        <div>
            <h3>User Info</h3>
         
        <div className="DB">
           
            <p>{firstname}  {lastname}</p>
            <p>{address}</p>
            <p>{city}, {state}, {zipcode}</p>
            <p>{username}</p>
            <p>{email}</p>
         
          


            
            
           
        </div>
        </div>
    )
}