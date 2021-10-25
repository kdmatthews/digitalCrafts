import React from 'react';
import { MoveItemToCart } from '../actions/cart-actions';
import { useDispatch } from "react-redux";

export default function Shop(props) {
    const dispatch = useDispatch();

    // useEffect(() => {

    // },[])
    // const citrusData = useSelector((state)=>state.ShopInfo);
    // console.log(citrusData)
    return (
        <div>
           
            <h1>{props?.item?.name}</h1>
            <img src={props?.item?.image} alt="" />
            <h3>${props?.item?.price}</h3>
            <button onClick={()=>MoveItemToCart(dispatch, props?.item)}>Add to Cart</button>
            
        </div>
    )
}
