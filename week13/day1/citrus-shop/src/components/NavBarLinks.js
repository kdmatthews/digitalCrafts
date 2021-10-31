import React from 'react';
import { Link } from 'react-router-dom';
import { LinkDiv } from '../styled-components/Sidebar-style';

export default function NavBarLinks(props) {
    return (
        <LinkDiv>
            <Link to={props.linkData.path}>{props.linkData.name}{<img src={props.linkData.image} alt="" />}</Link>
        </LinkDiv>
    )
}
