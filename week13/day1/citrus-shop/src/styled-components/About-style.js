import styled from "styled-components";

export const MainDiv = styled.div`
    position:absolute;
    margin-top: 3.59rem;
    width: 100vw;

    @media (min-width: 600px) and (max-width: 1000px){
      margin-top: 6rem;
}
    @media (min-width: 1001px) {
        margin-top: 8rem;
    
 }
` 

export const FormDiv = styled.div`
    background-color: #F49728;
`

export const AboutDiv = styled.div`
    border: lightgray 1px solid;
    margin: 1rem;
`

export const AboutHeader = styled.h1`
    color: #0F7C4F;
    margin: 1rem;
    text-align: center;
`
export const AboutParagraph = styled.p`
    color: #0F7C4F;
    margin: 1rem;
    font-size: 1.3rem;
    
`
