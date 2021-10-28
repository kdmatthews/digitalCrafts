import React from 'react';
import { navbarData, NavbarData } from './NavbarData';
import NavBarLinks from './NavBarLinks';
import { NavBarDiv, Hamburger, Title, SidebarButton, Orange } from '../styled-components/Navbar-style';
import mymenu from "../assets/menu4.png";
import orange from "../assets/orange.png"


export default function Navbar(props) {
    const viewSidebar = props.viewSidebar
    const setViewSidebar = props.setViewSidebar
    
    return (
        <>
        <NavBarDiv>
            <SidebarButton onClick={()=>setViewSidebar(!viewSidebar)}>
                { viewSidebar ? <Hamburger src={mymenu} alt="" /> : <Hamburger src={mymenu} alt="" />}
                {/* <img src={meat} alt="" /> */}
                </SidebarButton>
                <Title>Citrus in the City</Title>
            {/* {navbarData?.map((linkData)=>(
                <NavBarLinks linkData={linkData} />
            ))} */}
            <Orange src={orange} alt="" />
        </NavBarDiv>
        </>
    )
}
