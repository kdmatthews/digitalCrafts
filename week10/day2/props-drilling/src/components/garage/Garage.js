import React from 'react';
import Cars from './Cars';
import Motorcycles from "./Motorcycles";


export default function Garage() {
    return (
        <div>
            <h1>Garage</h1>
            <Cars />
            <Motorcycles />
        </div>
    )
}
