import React from 'react';
import { useSelector } from 'react-redux';

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
          <h1>Total: {formatter.format(total)}</h1>
        
        </div>
    )
}
