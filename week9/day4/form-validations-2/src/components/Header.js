import React, { useEffect, useState } from 'react';
const URL = "https://randomuser.me/api/";
export default function Header() {
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
        setUser(jsonNews?.results[0]?.picture?.thumbnail);
    };
        getNewsData();
        return () => {};
    }, [counter]);


    // useEffect(()=>{}) fire when we mount and anytime we call useState
    // useEffect(()=>{},[]) fire when we mount and only when we mount
    // useEffect(()=>{}, [variable]), fire when we mount and only when the variable changes in value

 
    return (
        <div>
            <h1>Header</h1>
            <img src={user} alt=""/>
            <button onClick={() => setCounter(counter + 1)}>Get New User</button>
        </div>
    )
}
