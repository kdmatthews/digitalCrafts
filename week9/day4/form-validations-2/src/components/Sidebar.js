import React, { useEffect, useState } from 'react';
import { UserButton, HeaderHeader } from "../styled-components/HeaderStyle";
import { SideBarDiv, Img, WelcomeDiv, WelcomeTitle, WelcomeName, LinkDiv } from '../styled-components/SiderbarStyle';
import { MainDiv } from '../styled-components/FormStyle';
import {Link} from "react-router-dom";
import { sidebarData } from './SideBarData';
import SideBarLinks from './SideBarLinks';


const URL = "https://randomuser.me/api/";
export default function Sidebar(props) {
    const viewSidebar = props.viewSidebar;
    
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
        <>
        {viewSidebar ?  
        <SideBarDiv>
            <WelcomeDiv>
            <Img src={user?.picture?.large} alt=""/>
            <WelcomeTitle>Welcome</WelcomeTitle>
            <WelcomeName> {user?.name?.first} {""} {user?.name?.last}</WelcomeName>
            </WelcomeDiv>  
            <LinkDiv>
            {sidebarData?.map((linkData)=>(
                <SideBarLinks linkData={linkData} />
            ))}
            </LinkDiv>
            
          
        
        </SideBarDiv> 
         :  <></>}

        
        
       </>
    )
    
         }
