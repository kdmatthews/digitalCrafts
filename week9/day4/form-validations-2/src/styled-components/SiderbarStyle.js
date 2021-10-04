import styled from 'styled-components';
import {Link} from "react-router-dom";

export const SideBarDiv = styled.div`
    background-color: #774A62;
    height: 100vh;
    width: 15rem; 
    display: flex;
    flex-direction: column;
    align-items:center; 
    grid-area: sidebar;



`
export const Img = styled.img`
    border-radius: 70px;
    display: grid;
    grid-row: span 2;
` 

export const WelcomeDiv = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin: 1rem;

    
`
export const WelcomeTitle = styled.h2`
    margin-top: 2.5rem;
    font-size: 1.5rem;
    padding-left: 1rem;
    margin-bottom: 0;
`
export const WelcomeName = styled.h3`
    margin-bottom: 1.5rem;
    font-size: 1rem;
    padding-left: .5rem;
    margin-top: 0;
`
export const StyledLinks = styled(Link)`
    text-align: center;
  width: 100%;
  height: 2rem;
  color: #efebe0;
  font-size: 1.2rem;
  padding-top: 1.3rem;
  padding-bottom: 1.3rem;
  text-decoration: none;
  &:hover {
    background-color: hsl(213, 14%, 35%);
  }
    
`
export const LinkDiv = styled.div`
    display: flex;
  flex-direction: column;
  align-items: center;
  grid-area: sidebar;
  width: 100%;
  background-color: hsl(213, 14%, 30%);
  transition: left 0.5s ease 0s;
  animation-name: fadeInUp;
  min-width: 200px;
  max-width: 230px;
  animation-duration: 0.5s;
  animation-fill-mode: both;
  @keyframes fadeInUp {
    from {
      opacity: 0;
      padding: 0;
      margin: 0;
      max-height: 0;
      transform: translate(100, 510px);
    }
    to {
      opacity: 1;
    }
  }
`;
