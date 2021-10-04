import styled from 'styled-components';

export const SideBarDiv = styled.div`
    background-color: #774A62;
    height: 100vh;
    width: 25vw; 
    /* display: flex;
    flex-direction: column;
    align-items:center;  */
    grid-area: sidebar;



`
export const Img = styled.img`
    border-radius: 70px;
    display: grid;
    grid-row: span 2;
` 

export const WelcomeDiv = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin: 1rem;

    
`
export const WelcomeTitle = styled.h2`
    margin-top: 2.5rem;
    font-size: 1.5rem;
    padding-left: 1rem;
    margin-bottom: 0;
`
export const WelcomeName = styled.h3`
    margin-bottom: 1.5rem;
    font-size: 1rem;
    padding-left: .5rem;
    margin-top: 0;
`