import React from 'react';
import { useDispatch } from "react-redux";
import { RemoveItemFromCart } from '../actions/cart-actions';
import { CartButton, CartPlantName, CartPrice, CartImage, CartItem, ImageDiv, DetailsDiv, PriceDiv, RemoveDiv, QuantityDiv, CartQuantity, CartSize } from '../styled-components/Cart-style';




export default function Cart(props) {
    const { item } = props;
    const dispatch = useDispatch()
    return (
       
        <CartItem>

       <ImageDiv>
        <CartImage src={item?.image} alt="" />
        </ImageDiv>

        <DetailsDiv>
        <CartPlantName>{item?.name}</CartPlantName>
        <CartSize>Size: {item?.size}</CartSize>
        </DetailsDiv>
{/* 
        <QuantityDiv>
        <CartQuantity>Quantity: {item?.quantity}</CartQuantity>
        </QuantityDiv> */}

        <PriceDiv>
        <CartPrice>${item?.price}</CartPrice>
        <CartButton onClick={()=>RemoveItemFromCart(dispatch, item)}>X</CartButton>
        </PriceDiv>
           
        </CartItem>
    )
}
