import React, { FC } from 'react';
import Card from './Card';

const data = [
    {name: "Jose"},
    {name: "Britt"},
    {name: "Matt"},
    {name: "Dustin"},
    {name: "Justin"},
    {name: "Kayla"},
    {name: "Deanna"},
    {name: "Cameron"},
    {name: "Tim"},
    {name: "Ron"},
    {name: "Jamie"},
    {name: "Brande"},
    {name: "Jordan"},
    {name: "Xavier"},
    {name: "Jenny"}
 ]


const CardContainer = () => {

    return (
        <div>
            {data.map((student) => (
                <Card data={student} />
            ))};

        </div>
    )
}

export default CardContainer
