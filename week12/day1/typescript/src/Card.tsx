import React, { FC } from 'react'
import CardContainer from './CardContainer'

interface DataInterface {
    data: {
        name: string
}
}


const Card:FC<DataInterface> = (props) => {
    return (
        <div>
            <h1>{props.data.name}</h1>
        </div>
    )
}

export default Card


