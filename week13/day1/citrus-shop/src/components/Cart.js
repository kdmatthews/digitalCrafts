import React from 'react';
import { useDispatch } from "react-redux";
import { RemoveItemFromCart } from '../actions/cart-actions';
import { CartButton, CartPlantName, CartPrice, CartImage, CartItem, ImageDiv, DetailsDiv, PriceDiv, QuantityDiv, CartQuantity, CartSize } from '../styled-components/Cart-style';




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
        {/* <h1>{item?.quantity}</h1> */}
        </DetailsDiv>

        {/* <QuantityDiv>
        <CartQuantity>Quantity: {item?.quantity}</CartQuantity>
        </QuantityDiv>  */}

        <PriceDiv>
        <CartPrice>${item?.price} </CartPrice>
        {/* <CartPrice>${item?.price * item?.quantity} </CartPrice> */}
       
        <CartButton onClick={()=>RemoveItemFromCart(dispatch, item)}>X</CartButton>
        </PriceDiv>
           
        </CartItem>
    )
}
