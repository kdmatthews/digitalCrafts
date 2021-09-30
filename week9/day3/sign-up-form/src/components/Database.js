import React from "react";
import { DatabaseDiv, Header2, Name, UserInfo, InfoDiv } from "../styled-components/DatabaseStyle";

export default function Database(props) {
    const { address, firstName, lastName, city, state, zipcode, username, email } = props.data;
   
    return (
       
        <DatabaseDiv>
           <Header2>{firstName}'s Info</Header2>
         
     
        <InfoDiv>           
            <Name>{firstName} {""} {lastName}</Name>
            <UserInfo>{address}</UserInfo>
            <UserInfo>{city}, {state}, {zipcode}</UserInfo>
            <UserInfo>{username}</UserInfo>
            <UserInfo>{email}</UserInfo>
        </InfoDiv>
         
          


            
            
       
        </DatabaseDiv>
    )
}