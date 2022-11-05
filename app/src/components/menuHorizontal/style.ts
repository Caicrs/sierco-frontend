import styled, { css, keyframes } from "styled-components";
import { Link } from "react-router-dom";

const mobile: string = "768px";
const desktop: string = "1024px";
const tablet: string = "825px";

export const Container = styled.div`
padding:0 0 2rem 0;
 // Mobile X Tablet
 @media (min-width: 0) and (max-width: ${tablet}) {
    width: 95%;
    margin:0 auto;
}
  // Tablet
  @media (min-width: ${mobile}) {
    width: 50%;
    margin:0 auto;
}
    // Desktop
    @media (min-width: ${tablet}) {
     display:none;
    }

`;

export const MenuText = styled.div`
font-weight:100;
padding:0.4rem 0.5rem 0 0.5rem ;
opacity: ${(props) => props.theme.opacity || "1"};
cursor: pointer;
transition:0.3s;
`;

export const Icon = styled.img`
width:31px;
height: 31px;
margin:0;
background:transparent;
`;

export const Button = styled.button`
height:fit-content;
background:transparent;
border:none;
`;
