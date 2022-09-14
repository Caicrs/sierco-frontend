import styled, { css, keyframes } from "styled-components";
import { Link } from "react-router-dom";

const FadeAnimation = keyframes`
	from {color: white; opacity:0.5}
  to {color: white; }

`;

const FadeAnimation2 = keyframes`
	from {opacity:0}
  to {opacity:1;}

`;


export const NavbarDiv = styled.div`
  ${({ theme }) => css`
    padding: 0;
    margin: 0 0 2rem 0;
    width: 100%;
    height: fit-content;
    display: flex;
    background: ${theme.colors.baseBg1};
  `}
`;

export const LogoText = styled.h1`
  ${({ theme }) => css`
    margin: 0;
    font-size: 2.5rem;
    width: fit-content;
    color: ${theme.colors.logoColor};
    padding: 1rem 0 1rem 5rem;
  `}
`;

export const ButtonsNav = styled.div`
  width: 100%;
  padding: 0 5rem 0 0;
  float: right;
  text-align: right;
`;

export const ButtonsNav2 = styled.div`
  width: 50%;
  display: flex;
  font-weight: 400;
  text-align: center;
  padding: 2.5rem 3rem 0 2rem;
`;

export const CreateBtn = styled.div`
  ${({ theme }) => css`
    margin: 2.5rem 0 0 2rem;
    color: white;
    font-size: 1rem;
    display: flex;
    float: right;
    cursor: pointer;
    transition: 0.3s;
  `}
`;

export const CreateBtnCenter = styled.div`
  color: white;
  margin: 0 1.5rem 0 1.5rem;
  cursor: pointer;
  animation: 0.5s linear ${FadeAnimation};
`;

export const CreateBtnCenterOpacity = styled.div`
  opacity: 0.5;
  color: white;
  cursor: pointer;
  margin: 0 1.5rem 0 1.5rem;
`;

export const Bar = styled.div`
  margin: 2.5rem 0 0 0;
  padding: 0 0 0 2rem;
  width: fit-content;
  float: right;
  opacity: 0.25;
`;

export const Bar2 = styled.div`
  margin: 0;
  width: fit-content;
  opacity: 0.25;
`;

export const NavbarLink = styled(Link)`
  color: white;
  font-size: x-large;
  font-family: Arial, Helvetica, sans-serif;
  text-decoration: none;
  margin: 10px;
  &:hover,
  &:focus {
    color: blue;
  }
  &:active {
    color: red;
  }
`;

export const Icon = styled.img`
  width: 20px;
  height: 20px;
  margin-left: 1rem;
  cursor: pointer;
  animation: 0.5s linear ${FadeAnimation2};
`;

export const Icon2 = styled(Icon)``;

export const OptionsContainer = styled.div`
  ${({ theme }) => css`
    width: 200px;
    height:fit-content;
    position: absolute;
    right: 4rem;
    top: 5.1rem;
    padding:0 1rem 1rem 1rem;
    color:black;
    background: ${theme.colors.baseBg2};
    opacity: ${(props) => props.theme.opacity || "0" };
    top: ${(props) => props.theme.top || "35px" };
    visibility: ${(props) => props.theme.visibility || "hidden"};
    z-index: 1;
    -webkit-transition: all .5s ease;
       -moz-transition: all .5s ease;
        -ms-transition: all .5s ease;
         -o-transition: all .5s ease;
            transition: all .5s ease;
  `};
`;

export const Line = styled.div`
${({ theme }) => css` 
width:100%;
margin:0 auto;
height:1px;
background: ${theme.colors.baseBg3};
`}
`;

export const List = styled.div`
${({ theme }) => css` 
width:100%;
height:fit-content;
text-align:right;
color: ${theme.colors.white} ;
padding: 1rem 0 1rem 0;
margin-right:1rem;
`};
`;


export const Button = styled.button`
${({ theme }) => css`   font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
  display: ${(props) => props.theme.display || "none"};
  background: ${(props) => props.theme.background || theme.colors.logoColor};
  /* Color the border and text with theme.main */
  color: ${(props) => props.theme.color || "red"};
  border: 2px solid ${(props) => props.theme.border || "red"};`}

`;






