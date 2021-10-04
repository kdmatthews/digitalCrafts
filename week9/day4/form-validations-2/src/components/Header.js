
import React, { useEffect, useState } from 'react';
import { HeaderHeader, HeaderContainer, Img, WelcomeDiv, WelcomeTitle, WelcomeName, SideBarButton } from "../styled-components/HeaderStyle";
import { MainDiv } from '../styled-components/FormStyle';


const URL = "https://randomuser.me/api/";
export default function Header(props) {
    const viewSidebar = props.viewSidebar
    const setViewSidebar = props.setViewSidebar
    const [user, setUser] = useState({})
    const [counter, setCounter] = useState(0);
    
    // useEffect
    // hook that fires when the component is mounted
    useEffect(() => {
        const getNewsData = async () => {
            const getTheNews = await fetch(URL, {
            method: "GET",
            cache: "no-cache",
            credentials: "same-origin",
            headers: {
                'Content-Type': 'application/json'
            },
        });
        const jsonNews = await getTheNews.json();
        console.log("useeffect was fired")
        setUser({
            ...jsonNews.results[0],
            userImage: jsonNews?.results[0]?.picture?.thumbnail,
          });
    };
        getNewsData();
        return () => {};
    }, [counter]);


    // useEffect(()=>{}) fire when we mount and anytime we call useState
    // useEffect(()=>{},[]) fire when we mount and only when we mount
    // useEffect(()=>{}, [variable]), fire when we mount and only when the variable changes in value


    return (
       
        <HeaderContainer>
            <SideBarButton onClick={()=>setViewSidebar(!viewSidebar)}>
                { viewSidebar ? "Hide Sidebar" : "Show Sidebar" }
                </SideBarButton>
                
            {/* <HeaderHeader>Coding Market</HeaderHeader> */}
            <WelcomeDiv>
            <Img src={user?.picture?.large} alt=""/>
            {/* <WelcomeTitle>Welcome</WelcomeTitle> */}
            <WelcomeName> Welcome {user?.name?.first} {""} {user?.name?.last}!</WelcomeName>
            </WelcomeDiv>
        </HeaderContainer>
       
    )
}
