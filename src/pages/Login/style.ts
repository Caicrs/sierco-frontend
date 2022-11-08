import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

const mobile: string = "480px";
const desktop: string = "1024px";
const tablet: string = "825px";

export const Global = styled.div`
width:100%;
height:fit-content;
`;

export const Container = styled.div`
  ${({ theme }) => css`
    width: 100vw;
    height: 100vh;
    background-color: ${theme.colors.baseBg1};
    color: ${theme.colors.textColor};
    // Mobile
    @media screen and (min-width: 0) and (max-width: ${mobile}) {
      background: ${theme.colors.baseBg1};
      height: 100vh;
    }
    // Tablet
    @media screen and (min-width: ${mobile}) and (max-width: ${tablet}) {
      background: ${theme.colors.baseBg1};
      height: 100vh;
    }
  `}
`;

export const TextBg = styled.h1`
  ${({ theme }) => css`
    font-size: 22rem;
    width: 100%;
    opacity:0.5;
    text-align: center;
    position: fixed;
    background: #fae634;
    background: linear-gradient(to right, #fae634 10%, rgb(43, 43, 42) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin: -2rem 0;
       // Mobile
  @media screen and (min-width: 0) and (max-width: ${mobile}) {
    transform: rotate(-45deg);
    opacity:0.25;
  }
  // Tablet
  @media screen and (min-width: ${mobile}) and (max-width: ${tablet}) {
    transform: rotate(-45deg);
    opacity:0.25;
    margin: 5% 20% 0 0 ;
    font-size: 28rem;
  }
  `}
`;
export const TextBg2 = styled.h1`
  ${({ theme }) => css`
    font-size: 22rem;
    width: 100%;
    opacity:0.5;
    text-align: center;
    position: fixed;
    background: #fae634;
    background: linear-gradient(to right, #fae634 10%, rgb(43, 43, 42) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin: 18rem 0;
    transform: rotate(180deg);
      // Mobile
  @media screen and (min-width: 0) and (max-width: ${mobile}) {
    transform: rotate(135deg);
    opacity:0.5;
  }
  // Tablet
  @media screen and (min-width: ${mobile}) and (max-width: ${tablet}) {
    transform: rotate(135deg);
    opacity:0.5;
    margin: 60% 0 0 10%;
    font-size: 28rem;
  }
  `}
`;

export const Form = styled.div`
  // Mobile
  @media screen and (min-width: 0) and (max-width: ${mobile}) {
    width: 100vw;
    height: 100vh;
    position: relative;
    background: rgb(43, 43, 42,0.25);
    backdrop-filter: blur(5px);
  }
  // Tablet
  @media screen and (min-width: ${mobile}) and (max-width: ${tablet}) {
    width: 100vw;
    height: 100vh;
    position: relative;
    background: rgb(43, 43, 42,0.25);
    backdrop-filter: blur(5px);
  }
  // Desktop
  @media screen and (min-width: ${tablet}) {
    height: 450px;
    width: 100%;
    margin: 0 auto;
    position: absolute;
    top: 12%;

  }
`;

export const FormBox = styled.div`
  ${({ theme }) => css`
    width: 100%;
    background: transparent;
    // Mobile
    @media screen and (min-width: 0) and (max-width: ${mobile}) {
    }
    // Tablet
    @media screen and (min-width: ${mobile}) and (max-width: ${tablet}) {
      width: 100%;
      height: fit-content;
    }
    // Desktop
    @media screen and (min-width: ${tablet}) {
      height: 450px;
      width: 18rem;
      border-radius: 1rem;
      background: ${theme.colors.baseBg1};
      margin: 0 auto;
      background: rgb(43, 43, 42,0.65);
    backdrop-filter: blur(5px);
    }
  `}
`;

export const Logo = styled.h1`
  ${({ theme }) => css`
    padding: 2.5rem 0 0 0;
    width: 100%;
    text-align: center;
    font-size: 2.25rem;
    margin: 0;
    color: ${theme.colors.logoColor};
    @media (max-width: ${tablet}) and (min-width: 0) {
      padding: 5rem 0 0 0;
    }
  `}
`;

export const InputGroup = styled.div`
  ${({ theme }) => css`
    // Mobile
    @media screen and (min-width: 0) and (max-width: ${mobile}) {
      width: 80%;
      margin: 8rem auto;
    }
    // Tablet
    @media screen and (min-width: ${mobile}) and (max-width: ${tablet}) {
      width: 80%;
      margin: 25% auto 0 auto;
    }
    // Desktop
    @media screen and (min-width: ${tablet}) {
      margin: 0 auto;
    }
  `}
`;

export const InputContainer = styled.div`
  ${({ theme }) => css`
    width: 70%;
    display: flex;
    height: 2.5rem;
    margin: 2rem auto auto auto;
    border: none;
    border-bottom: 2px solid ${theme.colors.logoColor};
    @media (max-width: ${mobile}) and (min-width: 0) {
      width: 100%;
    }
  `}
`;

export const Input = styled.input`
  ${({ theme }) => css`
    width: 98.5%;
    height: 100%;
    font-size: 0.9rem;
    margin: 0;
    border: none;
    background-color: transparent;
    color: white;
    box-shadow: 0px 0px 0px rgba(255, 255, 255, 0.1);
    text-shadow: 0px 0px 12px rgba(255, 255, 255, 0.1);
    ::placeholder {
      color: white;
      font-weight: 300;
      opacity: 0.5;
      font-size: 0.9rem;
      @media (max-width: ${tablet}) and (min-width: 0) {
        font-size: 1rem;
      }
    }
    &:focus {
      outline: none;
    }
  `}
`;

export const InputPass = styled.input`
  ${({ theme }) => css`
    width: 98.5%;
    height: 100%;
    font-size: 0.9rem;
    margin: 0;
    border: none;
    background-color: transparent;
    color: white;
    box-shadow: 0px 0px 0px rgba(255, 255, 255, 0.1);
    text-shadow: 0px 0px 12px rgba(255, 255, 255, 0.1);
    ::placeholder {
      color: white;
      font-weight: 300;
      opacity: 0.5;
      font-size: 0.9rem;
    }
    &:focus {
      outline: none;
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
  margin-top: 0.6rem;
`;

export const Btn_Entrar = styled.div`
  ${({ theme }) => css`
    width: 70%;
    font-size: 1rem;
    color: ${theme.colors.baseBg1};
    font-weight: 700;
    padding: 0.5rem 0 0.5rem 0;
    background: ${theme.colors.logoColor};
    text-align: center;
    margin: 5rem auto 0 auto;
    cursor: pointer;
    border: 1px solid transparent;
    border-radius: 0.5rem;
    transition: 0.3s;
    &:hover {
      color: ${theme.colors.logoColor};
      background: transparent;
      border: 1px solid ${theme.colors.logoColor};
    }
    // Mobile
    @media screen and (min-width: 0) and (max-width: ${mobile}) {
      width: 50%;
    }
    // Tablet
    @media screen and (min-width: ${mobile}) and (max-width: ${tablet}) {
      width: 50%;
    }
    // Desktop
    @media screen and (min-width: ${tablet}) {
      font-size: 0.8rem;
    }
  `}
`;

export const SmallText = styled.div`
  ${({ theme }) => css`
    width: 100%;
    text-align: center;
    font-size: 0.8rem;
    font-weight: 300;
    // Mobile
    @media screen and (min-width: 0) and (max-width: ${mobile}) {
      padding: 10% 0 5% 0;
    }
    // Tablet
    @media screen and (min-width: ${mobile}) and (max-width: ${tablet}) {
      padding: 5% 0 3% 0;
    }
    // Desktop
    @media screen and (min-width: ${tablet}) {
      padding-top: 1.5rem;
    }
  `}
`;

export const Link_Create = styled(Link)`
  text-decoration: none;
  color: white;
`;
