import React from 'react';
import { navbarData, NavbarData } from './NavbarData';
import NavBarLinks from './NavBarLinks';
import { NavBarDiv } from '../styled-components/Navbar-style';

export default function Navbar() {
    
    return (
        <>
        <NavBarDiv>
            {navbarData?.map((linkData)=>(
                <NavBarLinks linkData={linkData} />
            ))}
        </NavBarDiv>
        </>
    )
}
