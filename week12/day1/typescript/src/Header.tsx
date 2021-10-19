import React, { FC } from 'react';
import Card from './Card';
import CardContainer from './CardContainer';
import { Tim } from "./UsefulFunctions"
interface Headerprops{
    user: {
        firstName: string,
        lastName: string,
        userName: string,
    };
    birthday?: string;
}

const Header:FC<Headerprops> = (props) => {
  
    return (
        <div>
            <h1>Hello {props.user.firstName}</h1>
            <p>{props.user.lastName}</p>
            <p>Username: {props.user.userName}</p>
            <p>{props.birthday}</p>
            <CardContainer />
        </div>
    )
}

export default Header
