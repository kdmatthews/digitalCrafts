import React, { useEffect, useState } from 'react';
import { UserButton, HeaderHeader } from "../styled-components/HeaderStyle";
import { SideBarDiv, Img, WelcomeDiv, WelcomeTitle, WelcomeName } from '../styled-components/SiderbarStyle';
import { MainDiv } from '../styled-components/FormStyle';
import {Link} from "react-router-dom";


const URL = "https://randomuser.me/api/";
export default function Sidebar() {
    const [user, setUser] = useState({})
    const [counter, setCounter] = useState(0)
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
       
        <SideBarDiv>
            <WelcomeDiv>
            <Img src={user?.picture?.large} alt=""/>
            <WelcomeTitle>Welcome</WelcomeTitle>
            <WelcomeName> {user?.name?.first} {""} {user?.name?.last}</WelcomeName>
            
            </WelcomeDiv>
            <Link to="/">Home</Link>
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/form">Form</Link>
          
        </SideBarDiv>
       
    )
}
