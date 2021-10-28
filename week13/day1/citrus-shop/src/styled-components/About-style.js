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
`
export const AboutParagraph = styled.p`
    color: #0F7C4F;
    margin: 1rem;
    font-size: 1.3rem;
    
`
export const ContactHeader = styled.h1`
    color: #0F7C4F;
    text-align: center;
    margin-top: 0;
`
export const FormInput = styled.input`
    margin-bottom: .5rem;
`
export const FormTextArea = styled.textarea`
    margin-bottom: .5rem;
`
export const FormButton = styled.button`
    background-color:#BAC6AD;
    border-radius: 4px;
    border: none;
    color: #0F7C4F;
    height: 2rem;
    width: 14rem;
    margin-left: 10%;
    font-size: 1rem;
`
