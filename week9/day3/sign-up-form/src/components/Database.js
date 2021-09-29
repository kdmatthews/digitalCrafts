import React from "react";

export default function Database(props) {
    const { signUpList } = props;
    console.log(signUpList)
    return (
        <div>
            <h1>Database</h1>
            <p>{signUpList}</p>

        </div>
    )
}