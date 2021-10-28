import styled from "styled-components";

export const SideBarDiv = styled.div`
    /* grid-area: sidebar; */
    background-color: #75E6DA;
    height: 100vh;
    width: 10rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top:0;
    font-size: 1.5rem;
    position: relative;
    z-index: 2;

    img{
        width: 2rem;
        height: 2rem;
    
    }

    a{
      text-decoration:none;
      color: black;
    }

    
`
export const LinkDiv = styled.div`
    margin: 1rem;
`
