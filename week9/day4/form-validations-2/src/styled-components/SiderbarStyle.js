import styled from 'styled-components';
import {Link} from "react-router-dom";

export const SideBarDiv = styled.div`
  grid-area: sidebar;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  height: 100vh;
  background-color: #774A62;
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


export const StyledLinks = styled(Link)`
  text-align: center;
  width: 100%;
  height: 2rem;
  color: white;
  font-size: 1.2rem;
  padding-top: 1.3rem;
  padding-bottom: 1.3rem;
  font-family: 'Itim', cursive;
  
  text-decoration: none;
  &:hover {
    background-color: #FBD2C9;
    
  }
`;
  
