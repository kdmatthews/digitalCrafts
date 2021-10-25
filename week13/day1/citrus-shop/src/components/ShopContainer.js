import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GetCitrusData } from '../actions/shop_actions';
import Shop from './Shop';

export default function ShopContainer() {
    const dispatch = useDispatch();
    const shopInfo = useSelector((state)=>state.ShopInfo)
    console.log(shopInfo)
    return (
        <div>
            {shopInfo.map((item) => (
                <Shop item={item} />
            ))}
        </div>
    )
}
