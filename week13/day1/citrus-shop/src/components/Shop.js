import React from 'react';
import { MoveItemToCart } from '../actions/cart-actions';
import { useDispatch, useSelector } from "react-redux";
import { IncrementQuantity, DecrementQuantity } from '../actions/quantity-actions';
import { ShopDiv } from '../styled-components/Shop-style';


export default function Shop(props) {
    const dispatch = useDispatch();
    const { item } = props;
    // const quanitity = useSelector((state)=>state.Quantity)

    return (
        <div>
           
            <h1>{item?.name}</h1>
            <img src={item?.image} alt="" />
            <h3>${item?.price}</h3>
            <button onClick={() =>IncrementQuantity(dispatch, item)}>Increment</button>
            <button onClick={() =>DecrementQuantity(dispatch, item)}>Decrement</button> 
          
            <h4>{item?.quantity}</h4>
            <button onClick={()=>MoveItemToCart(dispatch, item)}>Add to Cart</button>
            
        </div>
    )
}
