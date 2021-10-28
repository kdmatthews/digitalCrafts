import React from 'react';
import { MoveItemToCart } from '../actions/cart-actions';
import { useDispatch, useSelector } from "react-redux";
import { IncrementQuantity, DecrementQuantity } from '../actions/quantity-actions';
import { Image, ItemDiv, Button, PlantName, Price } from '../styled-components/Shop-style';


export default function Shop(props) {
    const dispatch = useDispatch();
    const { item } = props;
    // const quanitity = useSelector((state)=>state.Quantity)

    return (
        <ItemDiv>
           
           
            <Image src={item?.image} alt="" />
            <Price>${item?.price}</Price>
            <PlantName>{item?.name}</PlantName>
            {/* <button onClick={() =>IncrementQuantity(dispatch, item)}>Increment</button>
            <button onClick={() =>DecrementQuantity(dispatch, item)}>Decrement</button>  */}
{/*           
            <h4>{item?.quantity}</h4> */}
            <Button onClick={()=>MoveItemToCart(dispatch, item)}>Add to Cart</Button>
            
        </ItemDiv>
    )
}
