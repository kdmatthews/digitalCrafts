import styled from "styled-components";

export const ShopDiv = styled.div`

 display: grid;
 grid-template-columns: 1fr;
 width: 99vw;
position: absolute;
margin-top: 4.7rem;
font-family: 'Barlow Condensed', sans-serif;
 
 

 @media (min-width: 680px) and (max-width: 1050px){
     grid-template-columns: 1fr 1fr;
    
 }
 @media (min-width: 1051px) {
    grid-template-columns: 1fr 1fr 1fr;

 }

`

export const Image = styled.img`
    width: 20rem;
    margin-top: 1rem;
    align-self: center;
    margin-left: .6rem;
    margin-right: .6rem;
    height: 15rem;
    width: 22rem;
   
`

export const ItemDiv = styled.div`
    display: flex;
    /* justify-content: center;
    align-items: center; */
    border: 1px #c8cbc8 solid;
    flex-direction: column;
    margin: .5rem;
    padding-bottom: 1rem;
    
`
export const Button = styled.div`
    color: #0F7C4F;
    background-color: #BAC6AD;
    font-size: 1.1rem;
    padding: .3rem;
    border-radius: 4px;
    margin: .5rem;
    align-self: center;

    :active{
        background-color: orange;
        transform: translateY(4px);
    }
`
export const Price = styled.h3`
    color: #0F7C4F;
    margin-top: .5rem;
    margin-left: 1rem;
    margin-bottom: 0;
`
export const PlantName = styled.h2`
    color: black;
    font-size: 1.5rem;
    margin-top: 0;
    margin-left: 1rem;
    margin-bottom: 0;
`