import React from 'react';


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
