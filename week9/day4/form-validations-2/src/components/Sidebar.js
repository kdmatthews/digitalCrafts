import React, { useEffect, useState } from 'react';
import { UserButton, HeaderHeader } from "../styled-components/HeaderStyle";
import { SideBarDiv } from '../styled-components/SiderbarStyle';
import { MainDiv } from '../styled-components/FormStyle';


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
            <h3>Welcome</h3>
            <p> {user?.name?.first} {""} {user?.name?.last}</p>
            <img src={user?.picture?.large} alt=""/>
            
            <h2>Dashboard</h2>
            <h2>Forms</h2>
            <h2>UI Elements</h2>
            <h2>Charts</h2>
            <h2>Tables</h2>
            {/* <p>{user?.location?.city}</p> */}
            {/* <UserButton onClick={() => setCounter(counter + 1)}>Get New User</UserButton> */}
        </SideBarDiv>
       
    )
}
