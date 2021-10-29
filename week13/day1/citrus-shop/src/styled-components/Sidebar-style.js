import styled from "styled-components";

export const SideBarDiv = styled.div`
    grid-area: sidebar;
    background-color: #BAC6AD;
    height: 100vh;
    width: 10rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    /* margin-top:0; */
    font-size: 1.5rem;
    position: relative;
    z-index: 2;
    
 
     @media (min-width: 600px) and (max-width: 1000px){
        width: 12rem;
        
}
    @media (min-width: 1001px) {
        width: 15rem;
        
    
    
 } 


    img{
        width: 2rem;
        height: 2rem;

        @media (min-width: 600px) and (max-width: 1000px){
        width: 3rem;
        height: 3rem;
}
    @media (min-width: 1001px) {
        width: 4rem;
        height: 4rem;
    
    
 }
    
    }

    a{
      text-decoration:none;
      color: #0F7C4F;
      font-family: 'Barlow Condensed', sans-serif;

      @media (min-width: 600px) and (max-width: 1000px){
       font-size: 2rem;
}
    @media (min-width: 1001px) {
       font-size: 3rem;
    
 }
    }

    
`
export const LinkDiv = styled.div`
    margin-top: 3rem;
   
`
