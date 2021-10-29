import React from 'react';
import ups from "../assets/ups.png.crdownload"
import { ThankDiv, UPS, OuterDiv } from '../styled-components/ThankYou-style';

export default function ThankYou() {
    return (
        <OuterDiv>
        <ThankDiv>
            <h1>Thank you for shopping with us!</h1>
            <h2>Your order is being processed and will ship shortly.</h2>
            <h3>For tracking updates you may click the UPS icon below.</h3>
            <a href="https://www.ups.com/ship/guided/origin?tx=77958650627390817&loc=en_US&src=uis&promoCodeAlias=sOAr&WT.srch=1"><UPS src={ups} alt="" /></a>
        </ThankDiv>
        </OuterDiv>
    )
}
