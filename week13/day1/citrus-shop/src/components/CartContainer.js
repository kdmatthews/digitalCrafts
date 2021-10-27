import React from 'react';
import { useSelector } from 'react-redux';
import Cart from './Cart';
import Total from './Total';
import { CartDiv } from '../styled-components/Cart-style';

export default function CartContainer() {
    
    const cartInfo = useSelector((state)=>state.CartInfo)
    const array = [];
    console.log(cartInfo)
    return (
        <CartDiv>
            <Total />
            
            {cartInfo?.map((item) => (
                <Cart item={item} />
              
            ))}
          
          
        </CartDiv>
    )
}