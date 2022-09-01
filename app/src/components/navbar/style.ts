import styled, { css } from "styled-components";
import {Link} from "react-router-dom";

export const NavbarDiv = styled.div`
  ${({ theme }) => css`
    padding: 0;
    margin: 0;
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

export const CreateBtn = styled.div`
  ${({ theme }) => css`
    margin: 2.5rem 0 0 2rem;
    opacity: 0.5;
    color: white;
    font-size:1rem;
    width: fit-content;
    float: right;
    transition: 0.3s;
    cursor: pointer;
    &:hover {
      color: ${theme.colors.logoColor};
      opacity: 1;
    }
  `}
`;

export const Bar = styled.div`
  margin: 2.5rem 0 0 0;
  padding: 0 0 0 2rem;
  width: fit-content;
  float: right;
  opacity: 0.25;
`;

export const NavbarLink = styled(Link)`
color:white;

font-size: x-large;
font-family: Arial, Helvetica, sans-serif;
text-decoration: none;
margin: 10px;
&:hover,
&:focus{
   color: blue;
}
&:active{
   color: red;
};`