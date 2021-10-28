import styled from "styled-components";

export const NavBarDiv = styled.div`
    grid-area: navbar;
    display: flex;
    justify-content: flex-start;
    background-color: #BAC6AD;
    height: 7vh;

   
    
`
export const Hamburger = styled.img`
    width: 3rem;
    height: 3rem;

    @media (min-width: 600px) and (max-width: 1000px){
        width: 4.5rem;
        height: 4.5rem;
}
    @media (min-width: 1001px) {
        width: 6rem;
        height: 6rem;
    
 }
`

export const Title = styled.h1`
    text-align: center;
    color: #0F7C4F;
    margin: .5rem;

    @media (min-width: 600px) and (max-width: 1000px){
     font-size: 3.5rem
}
    @media (min-width: 1001px) {
       font-size: 4.5rem
    
 }
`

export const SidebarButton = styled.button `
    background-color: #BAC6AD;
    border: none;
`
export const Orange = styled.img`
    width: 2.5rem;
    height: 2.5rem;
    margin-top: .3rem;

    @media (min-width: 600px) and (max-width: 1000px){
      margin-top: 1rem;
}
    @media (min-width: 1001px) {
        margin-top: 1rem;
        width: 4rem;
        height: 4rem;
    
 }
`