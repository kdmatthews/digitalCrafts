import NavBarLinks from "./NavBarLinks";
import { navbarData } from "./NavbarData";
import { SideBarDiv } from "../styled-components/Sidebar-style";

import React from 'react'

export default function Sidebar(props) {
    const viewSidebar = props.viewSidebar;
    return (
        <>
        {!viewSidebar ?  
        <SideBarDiv>
    
            {navbarData?.map((linkData)=>(
                <NavBarLinks linkData={linkData} />
            ))}
            
            
         
        
        </SideBarDiv> 
         :  <></>}

        
        
       </>
    )
    
         }
