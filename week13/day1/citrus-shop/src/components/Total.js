import React from 'react';
import { useSelector } from 'react-redux';
import { TotalHeader, TotalDiv, CheckoutButton, YourCart } from '../styled-components/Cart-style';

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
      <>
       <YourCart>Your Cart</YourCart>
        <TotalDiv>
          
          <TotalHeader>Total: {formatter.format(total)}</TotalHeader>
          <CheckoutButton onClick={()=>alert("Thank you for trusting us with your citrus needs.")}>Checkout</CheckoutButton>
        
        </TotalDiv>
        </>
    )
}
