import React from 'react'

export default function NavBarLinks(props) {
    return (
        <>
            <a href={props.linkData.path}>{props.linkData.name}</a>
        </>
    )
}
