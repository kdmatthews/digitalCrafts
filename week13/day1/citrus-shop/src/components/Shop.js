import React from 'react';
import { MoveItemToCart } from '../actions/cart-actions';
import { useDispatch, useSelector } from "react-redux";

export default function Shop(props) {
    const dispatch = useDispatch();
    const { item } = props;
    // const cartInfo = useSelector((state)=>state.CartInfo)
    // console.log(cartInfo)

    return (
        <div>
           
            <h1>{item?.name}</h1>
            <img src={item?.image} alt="" />
            <h3>${item?.price}</h3>
            <button onClick={()=>MoveItemToCart(dispatch, item)}>Add to Cart</button>
            
        </div>
    )
}
