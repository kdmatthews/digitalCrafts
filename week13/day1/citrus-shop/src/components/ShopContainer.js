import React from 'react';
import { useSelector } from 'react-redux';

import Shop from './Shop';

export default function ShopContainer() {
    
    const shopInfo = useSelector((state)=>state.ShopInfo)
    console.log(shopInfo)
    return (
        <div>
            {shopInfo?.map((item) => (
                <Shop item={item} />
            ))}
        </div>
    )
}
