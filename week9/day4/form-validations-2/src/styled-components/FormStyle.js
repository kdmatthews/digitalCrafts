import styled from 'styled-components';

export const FormDiv = styled.div`
    background-color: #81ABBC;
    grid-area: formcontainer;
    padding: 2rem;
    width: 15rem;
    border-radius: 5px;
    margin-top: 6rem;
    margin-left: 20%;
    
    
    
    


`
export const MainDiv = styled.div`
     /* height: 100vh; */
  display: grid;
  grid-template-areas:
    "header header header header"
    "sidebar formcontainer formcontainer formcontainer"
    "sidebar formcontainer formcontainer formcontainer"
    "sidebar footer footer footer";
  grid-template-rows: auto;
  height: 100vh;
  width: 100vw;
  
 

`

export const Input = styled.input`
    /* border-top: none;
    border-right: none;
    border-left: none; */
    border-radius: 15px;
    border: none;
    height: 2rem;
    width: 14rem;
    margin-top: 1rem;
    padding-left: 1rem;
    font-family: 'Itim', cursive;
    
   

`
export const InputDiv = styled.div`
    /* display: flex;
    flex-direction: column; */
    
`
export const Forgotpassword = styled.p`
    margin-left: 3.8rem;
    font-size: .6rem;
    color: grey;
    font-family: 'Itim', cursive;
`
export const LoginHeader = styled.h1`
    color: white;
    font-size: 1.3rem;
    margin-bottom: 0;
    margin-left: 18%;
    font-family: 'Itim', cursive;

`
 
export const SignInButton = styled.button`
    width: 15rem;
    height: 2rem;
    background-image: linear-gradient(to right, #774A62 , #FBD2C9);
    border: none;
    border-radius: 15px;
    color: white;
    margin-top: 1.5rem;
    font-size: 1.5rem;
    
`
export const SignUp = styled.p`
    color: white;
    font-size: .8rem;
    margin-top: 6rem;
    margin-bottom: 0;
    margin-left: 30%;
    font-family: 'Itim', cursive;
`
export const RememberMe = styled.label`
    color: grey;
    margin-top: 1rem;
    font-family: 'Itim', cursive;
`