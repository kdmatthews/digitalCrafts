import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Shop from './Shop';

export default function ShopContainer() {
    const dispatch = useDispatch();
    const shopInfo = useSelector((state)=>state.ShopInfo)
    
    return (
        <div>
            {shopInfo.map((item) => (
                <Shop item={item} />
            ))}
        </div>
    )
}
