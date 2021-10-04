import React from 'react';
import { HeaderHeader, HeaderContainer } from "../styled-components/HeaderStyle";
import { MainDiv } from '../styled-components/FormStyle';
export default function Header(props) {
    const viewSidebar = props.viewSidebar
    const setViewSidebar = props.setViewSidebar
    return (
       
        <HeaderContainer>
            <button onClick={()=>setViewSidebar(!viewSidebar)}>
                { viewSidebar ? "Hide Sidebar" : "Show Sidebar" }
                </button>
            <HeaderHeader>Coding Market</HeaderHeader>
         
        </HeaderContainer>
       
    )
}
