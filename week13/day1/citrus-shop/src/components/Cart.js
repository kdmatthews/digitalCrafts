import React from 'react';
import { useDispatch } from "react-redux";
import { RemoveItemFromCart } from '../actions/cart-actions';
import { CartButton, CartPlantName, CartPrice, CartImage } from '../styled-components/Cart-style';




export default function Cart(props) {
    const { item } = props;
    const dispatch = useDispatch()
    return (
       
        <div>

        <CartPlantName>{item?.name}</CartPlantName>
        <CartImage src={item?.image} alt="" />
        <CartPrice>${item?.price}</CartPrice>
        {/* <h4>{item?.quantity}</h4> */}
       
        <CartButton onClick={()=>RemoveItemFromCart(dispatch, item)}>Remove From Cart</CartButton>
        
           
        </div>
    )
}
