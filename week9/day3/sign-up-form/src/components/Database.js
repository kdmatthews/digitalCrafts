import React from "react";

export default function Database(props) {
    const { address, firstName, lastName, city, state, zipcode, username, email } = props.data;
   
    return (
        
        <div>
            <h3>User Info</h3>
         
        <div className="DB">
           
            <p>{firstName}  {lastName}</p>
            <p>{address}</p>
            <p>{city}, {state}, {zipcode}</p>
            <p>{username}</p>
            <p>{email}</p>
         
          


            
            
           
        </div>
        </div>
    )
}