import React from 'react';
import { useSelector } from 'react-redux';
import { TotalHeader } from '../styled-components/Cart-style';

export default function Total() {

    const cartInfo = useSelector((state)=>state.CartInfo);
    console.log(cartInfo)
    let total = 0;
    let formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: "USD",
    });
    for (const x in cartInfo) {
        console.log(cartInfo[x].price)
        console.log(cartInfo[x].quantity)
        total += cartInfo[x].price * cartInfo[x].quantity
       
        
    }
    return (
      
        <div>
          <TotalHeader>Total: {formatter.format(total)}</TotalHeader>
        
        </div>
    )
}