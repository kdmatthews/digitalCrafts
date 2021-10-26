import React from 'react';
import { useSelector } from 'react-redux';
import Cart from './Cart';

export default function CartContainer() {
    
    const cartInfo = useSelector((state)=>state.CartInfo)
    console.log(cartInfo)
    return (
        <div>
            {cartInfo?.map((item) => (
                <Cart item={item} />
            ))}
        </div>
    )
}