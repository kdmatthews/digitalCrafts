import React, { useEffect, useState } from 'react';
import { UserButton, HeaderHeader } from "../styled-components/HeaderStyle";
import { SideBarDiv } from '../styled-components/SiderbarStyle';


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
            <HeaderHeader>Sidebar</HeaderHeader>
            <img src={user?.picture?.large} alt=""/>
            <p>Welcome {user?.name?.first} {""} {user?.name?.last}</p>
            <p>{user?.location?.city}</p>
            <UserButton onClick={() => setCounter(counter + 1)}>Get New User</UserButton>
        </SideBarDiv>
    )
}
