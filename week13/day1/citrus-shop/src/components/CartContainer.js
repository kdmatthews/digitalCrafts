import React from 'react';
import { useSelector } from 'react-redux';
import Cart from './Cart';
import Total from './Total';

export default function CartContainer() {
    
    const cartInfo = useSelector((state)=>state.CartInfo)
    const array = [];
    console.log(cartInfo)
    return (
        <div>
            <Total />
            
            {cartInfo?.map((item) => (
                <Cart item={item} />
              
            ))}
          
          
        </div>
    )
}