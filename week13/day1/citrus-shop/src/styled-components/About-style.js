import styled from "styled-components";

export const MainDiv = styled.div`
    position:absolute;
    margin-top: 4.4rem;
    width: 100vw;

` 
export const ImageHeader = styled.div`
    background-image: url("https://images.unsplash.com/photo-1590004829017-f30ef3c5faf1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTJ8fGNpdHJ1c3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60");
    background-repeat: no-repeat;
    background-size: cover;
    height: 13rem;
    
  

    @media (min-width: 600px){
      height: 20rem;
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
    
    
    margin-top: .4rem;
    align-self: center;
    

    @media (min-width: 600px) and (max-width: 1000px){
        font-size:2rem;
        height: 3rem;
}
    @media (min-width: 1001px) {
        font-size: 3rem;
        height: 4rem;
    
 }

 
`
