import React from 'react';
import { navbarData, NavbarData } from './NavbarData';
import NavBarLinks from './NavBarLinks';

export default function Navbar() {
    
    return (
        <>
        <div>
            {navbarData?.map((linkData)=>(
                <NavBarLinks linkData={linkData} />
            ))}
        </div>
        </>
    )
}
