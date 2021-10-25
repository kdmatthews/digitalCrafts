import React from 'react';
import ShopContainer from './ShopContainer';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

export default function Shop(props) {

    // useEffect(() => {

    // },[])
    // const citrusData = useSelector((state)=>state.ShopInfo);
    // console.log(citrusData)
    return (
        <div>
           
            <h1>{props?.item?.name}</h1>
            <img src={props?.item?.image} alt="" />
            <h3>${props?.item?.price}</h3>
            <button>Add to Cart</button>
            
        </div>
    )
}
