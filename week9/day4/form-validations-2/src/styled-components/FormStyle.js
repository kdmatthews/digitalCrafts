import styled from 'styled-components';

export const FooterDiv = styled.div`
    background-color: white;
    grid-area: formcontainer;
    /* height: 100vh;
    width: 75vw;
    display: flex;
    flex-direction: column; */
    padding: 2rem;
    
    


`
export const MainDiv = styled.div`
     height: 100vh;
  display: grid;
  grid-template-areas:
    "header header header header"
    "sidebar formcontainer formcontainer formcontainer"
    "sidebar formcontainer formcontainer formcontainer"
    "sidebar footer footer footer";
  grid-template-rows: auto;
  
 

`

export const Input = styled.input`
    border-top: none;
    border-right: none;
    border-left: none;
    width: 20rem;
    margin-top: 1.2rem;

`
export const InputDiv = styled.div`
    display: flex;
    flex-direction: column;
`
export const Forgotpassword = styled.p`
    margin-left: 5rem;
    font-size: .8rem;
`
export const RegisterButton = styled.button`
    width: 10rem;
    height: 2.5rem;
    background-color: #313E61;
    border: none;
    border-radius: 4px;
    color: white;
`
export const SignInButton = styled.button`
    width: 10rem;
    height: 2.5rem;
    background-color: #81ABBC;
    border: none;
    border-radius: 4px;
    color: white;
`