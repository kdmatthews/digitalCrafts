import React from 'react';
import { useDispatch } from "react-redux";
import { RemoveItemFromCart } from '../actions/cart-actions';



export default function Cart(props) {
    const { item } = props;
    const dispatch = useDispatch()
    return (
       
        <div>

        <h1>{item?.name}</h1>
        <img src={item?.image} alt="" />
        <h3>${item?.price}</h3>
        <button onClick={()=>RemoveItemFromCart(dispatch, item)}>Remove From Cart</button>
                 
           
        </div>
    )
}
