import React from 'react'
import {Link} from "react-router-dom";
import { StyledLinks } from '../styled-components/SiderbarStyle';

export default function SideBarLinks(props) {
    return (
        <>
            <StyledLinks to={props.linkData.path}>{props.linkData.name}</StyledLinks>
        </>
    )
}
