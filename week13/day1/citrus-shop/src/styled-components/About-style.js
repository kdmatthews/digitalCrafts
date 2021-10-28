import styled from "styled-components";

export const MainDiv = styled.div`
    position:absolute;
    margin-top: 3.59rem;
    width: 100vw;

    @media (min-width: 600px) and (max-width: 1000px){
      margin-top: 4.59rem;
}
    @media (min-width: 1001px) {
        margin-top: 6.1rem;
    
 }
` 

export const FormDiv = styled.div`
    background-color: #F49728;
    display: flex;
    flex-direction: column;
    padding: 2rem;
    margin: .5rem;
`

export const AboutDiv = styled.div`
    border: lightgray 1px solid;
    margin: 1rem;
`

export const AboutHeader = styled.h1`
    color: #0F7C4F;
    margin: 1rem;
    text-align: center;

    @media (min-width: 600px) and (max-width: 1000px){
        font-size:2.7rem;
}
    @media (min-width: 1001px) {
        font-size: 3.5rem;
    
 }
`
export const AboutParagraph = styled.p`
    color: #0F7C4F;
    margin: 1rem;
    font-size: 1.3rem;
    @media (min-width: 600px) and (max-width: 1000px){
        font-size:2rem;
}
    @media (min-width: 1001px) {
        font-size: 2.6rem;
    
 }
    
`
export const ContactHeader = styled.h1`
    color: #0F7C4F;
    text-align: center;
    margin-top: 0;
    margin-bottom: 1rem;
    @media (min-width: 600px) and (max-width: 1000px){
        font-size:2.7rem;
}
    @media (min-width: 1001px) {
        font-size: 3.5rem;
    
 }
`
export const FormInput = styled.input`
    margin-bottom: .5rem;
    height: 1.5rem;
    @media (min-width: 600px) and (max-width: 1000px){
        font-size:1.5rem;
        height: 2rem;
}
    @media (min-width: 1001px) {
        font-size: 2.2rem;
        height: 3rem;
    
 }
`
export const FormTextArea = styled.textarea`
    margin-bottom: .5rem;
    @media (min-width: 600px) and (max-width: 1000px){
        font-size:1.5rem;
}
    @media (min-width: 1001px) {
        font-size: 2.2rem;
    
 }
`
export const FormButton = styled.button`
    background-color:#BAC6AD;
    border-radius: 4px;
    border: none;
    color: #0F7C4F;
    height: 2rem;
    width: 14rem;
    margin-left: 12%;
    margin-top: .4rem;
    font-size: 1rem;

    @media (min-width: 600px) and (max-width: 1000px){
        font-size:2rem;
        height: 2.5rem;
        width: 33rem;
}
    @media (min-width: 1001px) {
        font-size: 3rem;
        height: 4rem;
        width: 45rem;
    
 }
`
