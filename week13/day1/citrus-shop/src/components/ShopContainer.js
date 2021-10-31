import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { IncrementQuantity, DecrementQuantity } from '../actions/quantity-actions';
import { ShopDiv } from '../styled-components/Shop-style';

import Shop from './Shop';

export default function ShopContainer() {
    
    const shopInfo = useSelector((state)=>state.ShopInfo);
    const dispatch = useDispatch();
    
    console.log(shopInfo)
    return (
        
        <ShopDiv>
            
            {shopInfo?.map((item) => (
                
                <Shop item={item} />
                
            ))}
              
        </ShopDiv>
       
    )
}
