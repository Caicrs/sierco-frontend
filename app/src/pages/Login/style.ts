import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

export const Container = styled.section`
  ${({ theme }) => css`
    background-color:red;
    width: 100%;
    height: 100%;
    overflow-x: none;
    color: ${theme.colors.textColor};
  `}
`;
export const TextBg = styled.h1`
  ${({ theme }) => css`
    font-size: 22rem;
    width: 100%;
    text-align: center;
    position: absolute;
    background: #fae634;
    background: linear-gradient(to right, #fae634 10%, white 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin: -2rem 0;
  `}
`;
export const TextBg2 = styled.h1`
  ${({ theme }) => css`
    font-size: 22rem;
    width: 100%;
    text-align: center;
    position: fixed;
    background: #fae634;
    background: linear-gradient(to right, #fae634 10%, white 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin: 18rem 0 0 0;

    transform: rotate(180deg);
  `}
`;

export const Form = styled.div`
  width: 100%;
  height: 450px;
  position: absolute;
  top: 5rem;
`;

export const FormBox = styled.div`
  ${({ theme }) => css`
    width: 22rem;
    height: 100%;
    border-radius: 3rem;
    background: ${theme.colors.baseBg1};
    margin: 0 auto;
  `}
`;

export const Logo = styled.h1`
  ${({ theme }) => css`
    padding: 2.5rem 0 0 0;
    width: 100%;
    text-align: center;
    font-size: 2rem;
    margin: 0;
    color: ${theme.colors.logoColor};
  `}
`;

export const InputContainer = styled.div`
  ${({ theme }) => css`
    width: 70%;
    display:flex;
    height: 2.5rem;
    margin: 2rem auto auto auto;
    border:none;
    border-bottom: 2px solid ${theme.colors.logoColor};  
  `}
`;

export const Input = styled.input`
  ${({ theme }) => css`
    width: 98.5%;
    height: 100%;
    font-size: 16px;
    margin: 0;
    border:none; 
    background-color: transparent;
    color: white;
    box-shadow: 0px 0px 0px rgba(255, 255, 255, 0.1);
    text-shadow: 0px 0px 12px rgba(255, 255, 255, 0.1);
    ::placeholder {
      color: white;
      font-weight: 300;
      opacity: 0.5;
      font-size:0.9rem;
    }
    &:focus{
      outline:none;
    }
  `}
`;

export const InputPass = styled.input`
  ${({ theme }) => css`
    width: 98.5%;
    height: 100%;
    font-size: 16px;
    margin: 0;
    border:none;
    background-color: transparent;
    color: white;
    box-shadow: 0px 0px 0px rgba(255, 255, 255, 0.1);
    text-shadow: 0px 0px 12px rgba(255, 255, 255, 0.1);
    ::placeholder {
      color: white;
      font-weight: 300;
      opacity: 0.5;
      font-size:0.9rem;
    }
    &:focus{
      outline:none;
    }
  `}
`;

export const Eye = styled.div`
width: 2rem;
height: 100%;
`;

export const Icon = styled.img`
width: 25px;
height: 25px;
opacity: 0.5;
margin-top: 0.60rem;
`;

export const Btn_Entrar = styled.div`
  ${({ theme }) => css`
    width: 70%;
    font-size:1rem;
    color: ${theme.colors.baseBg1};
    font-weight:700;
    padding: 0.5rem 0 0.5rem 0;
    background: ${theme.colors.logoColor};
    text-align: center;
    margin: 5rem auto 0 auto;
    cursor:pointer;
    border: 1px solid transparent;
    border-radius: 0.5rem;
    transition:0.3s;
    &:hover{
      color: ${theme.colors.logoColor};
      background: transparent;
      border: 1px solid ${theme.colors.logoColor};
    }
  `}
`;

export const SmallText = styled.div`
  ${({ theme }) => css`
    width: 100%;
text-align:center;
font-size:0.8rem;
font-weight:300;
margin-top: 1.5rem;
  `}
`;

export const Link_Create = styled(Link)`
text-decoration: none;
color:white;`;



