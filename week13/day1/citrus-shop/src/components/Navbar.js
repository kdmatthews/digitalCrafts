import React from 'react';
import { navbarData, NavbarData } from './NavbarData';
import NavBarLinks from './NavBarLinks';
import { NavBarDiv, Hamburger } from '../styled-components/Navbar-style';
import meat from "../assets/meat.png";

export default function Navbar(props) {
    const viewSidebar = props.viewSidebar
    const setViewSidebar = props.setViewSidebar
    
    return (
        <>
        <NavBarDiv>
            <button onClick={()=>setViewSidebar(!viewSidebar)}>
                { viewSidebar ? <Hamburger src={meat} alt="" /> : <Hamburger src={meat} alt="" />}
                {/* <img src={meat} alt="" /> */}
                </button>
                <h1>Citrus in the City</h1>
            {/* {navbarData?.map((linkData)=>(
                <NavBarLinks linkData={linkData} />
            ))} */}
        </NavBarDiv>
        </>
    )
}
