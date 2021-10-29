import styled from "styled-components";

export const NavBarDiv = styled.div`
    grid-area: navbar;
    display: flex;
    justify-content: flex-start;
    background-color: #BAC6AD;
    height: 70px;
    width: 100vw;
  


   
    
`
export const Hamburger = styled.img`
    width: 3rem;
    height: 3rem;

    @media (min-width: 600px) {
        width: 4.5rem;
        height: 4.5rem;
}
   
`

export const Title = styled.h1`
    text-align: center;
    color: #0F7C4F;
    margin: 1rem;
    font-size: 2rem;

    @media (max-width: 325px) {
    font-size: 1.5rem;

 }
    @media (min-width: 600px){
     font-size: 3.5rem;
     margin: .6rem;
}
    /* @media (min-width: 1001px) {
       font-size: 4.5rem
    
 } */
`

export const SidebarButton = styled.button `
    background-color: #BAC6AD;
    border: none;
   

   
`
export const Orange = styled.img`
    width: 2.5rem;
    height: 2.5rem;
    margin-top: .8rem;

    @media (max-width: 325px) {
    width: 2rem;
    height: 2rem;

 }
    @media (min-width: 600px) {
      margin-top: 1rem;
}
    
`