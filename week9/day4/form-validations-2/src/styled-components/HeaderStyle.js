import styled from 'styled-components';




export const HeaderContainer = styled.div `
   
    height: 7rem;
    width: 100vw;
    grid-area: header;
  display: flex;
  flex-direction: row;
    background-color: #FBD2C9;

`
export const Img = styled.img`
    border-radius: 70px;
    padding: .5rem;
  
` 

export const WelcomeDiv = styled.div`
    /* display: grid;
    grid-template-columns: 1fr 1fr; */
    display: flex;
    padding-left: 50%;
  
    
`
export const WelcomeTitle = styled.h2`
   
    font-size: 1.5rem;
    font-family: 'Itim', cursive;
  
`
export const WelcomeName = styled.h3`
  
    font-size: 1.5rem;
    color: #313E61;
    font-family: 'Itim', cursive;
    padding: 1rem;
    
    
`
export const SideBarButton = styled.button`
background-color: #774A62;
border: none;
width: 5rem;
color: white;
font-family: 'Itim', cursive;
`