
import React, { useEffect, useState } from 'react';
import { HeaderHeader, HeaderContainer, Img, WelcomeDiv, WelcomeTitle, WelcomeName, SideBarButton } from "../styled-components/HeaderStyle";
import { MainDiv } from '../styled-components/FormStyle';
import { useDispatch, useSelector } from 'react-redux';



const URL = "https://randomuser.me/api/";
export default function Header(props) {
    const viewSidebar = props.viewSidebar
    const setViewSidebar = props.setViewSidebar
    const [user, setUser] = useState({})
    const [counter, setCounter] = useState(0);
    const dispatch = useDispatch()
    const userdata = useSelector(state=>state.userData.name?.first)
    const userLastName = useSelector(state=>state.userData.name?.last)
    const userImage = useSelector(state=>state.userData.picture?.large)
   
    
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
        // setUser({
        //     ...jsonNews.results[0],
        //     userImage: jsonNews?.results[0]?.picture?.thumbnail,
        //   });
        dispatch({
            type:"GET_USERDATA",
            payload:{...jsonNews.results[0]}
        })
    };
    //     dispatch({type: 'SET_USERDATA', payload: jsonNews.results[0]})
    // };
        getNewsData();
        return () => {};
    }, [counter]);


    // useEffect(()=>{}) fire when we mount and anytime we call useState
    // useEffect(()=>{},[]) fire when we mount and only when we mount
    // useEffect(()=>{}, [variable]), fire when we mount and only when the variable changes in value
    // const dispatch = useDispatch()

    return (
       
        <HeaderContainer>
            <SideBarButton onClick={()=>setViewSidebar(!viewSidebar)}>
                { viewSidebar ? "Hide Sidebar" : "Show Sidebar" }
                </SideBarButton>
                <WelcomeDiv>
                <WelcomeName>{[userdata]} {[userLastName]}</WelcomeName>
           
                <Img src={[userImage]} alt="" />
                </WelcomeDiv>
         
            <button onClick={()=> dispatch({type: 'SET_USERNAME', payload: "poop"})}>Dispatch Action</button>
            <button onClick={()=> dispatch({type: 'SET_RESTAURANTS', payload: ["Chilis", "Kelp", "Trattorias", "813Pho", "Wine Exchange"]})}>restaurants</button>
           
        </HeaderContainer>
       
    )
}
