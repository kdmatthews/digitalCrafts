import styled from 'styled-components';

export const MainDiv = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
`

export const SignUpDiv = styled.div`
    background-color: #3AA7A0;
    padding: 1.5rem;
    border: 2px solid #F34C50;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
`
export const Input = styled.input`
    border-top: none;
    border-left: none;
    border-right: none;
    border-color: #9F746B;
    border-width: 4px;
    margin-top: .5rem;
    background-color: #3AA7A0;
    width: 70%;
    font-size: 1rem;
    color: #F7C9C0;
    padding-top: 1rem;
    padding-left:8px;
    font-family: 'Pacifico', cursive;
   `
export const Header = styled.h1`
    color: #F7C9C0;
    font-size: 3rem;
    font-family: 'Pacifico', cursive;
`
export const Button = styled.button`
    background-color: #F34C50;
    width: 15rem;
    height: 2.5rem;
    margin-top: 1.5rem;
    font-size: 1.3rem;
    border: none;
    border-radius: 4px;
    color: #F7C9C0;
    font-family: 'Pacifico', cursive;
`
