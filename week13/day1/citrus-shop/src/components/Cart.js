import React from 'react';
import { useSelector } from "react-redux";


export default function Cart(props) {
    const { item } = props;
    return (
       
        <div>

        <h1>{item?.name}</h1>
        <img src={item?.image} alt="" />
        <h3>${item?.price}</h3>
                 
           
        </div>
    )
}
