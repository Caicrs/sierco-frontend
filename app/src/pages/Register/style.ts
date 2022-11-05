import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

const mobile: string = "480px";
const desktop: string = "1024px";
const tablet: string = "825px";

export const Container = styled.section`
  ${({ theme }) => css`
    background-color: ${theme.colors.baseBg1};
    min-width: 100vw;
    min-height: 100vh;
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

export const InputContainer = styled.div`
  ${({ theme }) => css`
    width: 70%;
    display: flex;
    height: 2.5rem;
    margin: 1.5rem auto auto auto;
    border: none;
    border-bottom: 2px solid ${theme.colors.logoColor};
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
    }
     // Tablet
  @media screen and (min-width: ${mobile}) and (max-width: ${tablet}) {
    ::placeholder {
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
    }
        // Tablet
  @media screen and (min-width: ${mobile}) and (max-width: ${tablet}) {
    ::placeholder {
      font-size: 1rem;
    }
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

export const Btns = styled.div`
  ${({ theme }) => css`
    width: 70%;
    height: fit-content;
    font-weight: 700;
    display: flex;
    text-align: center;
    padding: 3rem 0 0 0;
    margin: 3rem auto 0 auto;
    border: 1px solid transparent;
    border-radius: 1rem;
    transition: 0.3s;
    // Mobile
    @media screen and (min-width: 0) and (max-width: ${mobile}) {
      margin: 15% auto 0 auto;
      padding: 0;
    }
    // Tablet
    @media screen and (min-width: ${mobile}) and (max-width: ${tablet}) {
      height: fit-content;
       margin: 15% auto 0 auto;
      padding: 0;
    }
  `}
`;

export const SubBtns = styled.div`
  ${({ theme }) => css`
    width: 100%;
  `}
`;

export const Buttons = styled.h5`
  ${({ theme }) => css`
    cursor: pointer;
    color: ${theme.colors.logoColor};
    width: fit-content;
    font-size: 0.8rem;
    margin: 0;
  `}
`;

export const NextBtn = styled(Buttons)`
  float: right;
`;

export const SmallText = styled.div`
  ${({ theme }) => css`
    width: 100%;
    text-align: center;
    font-size: 0.8rem;
    font-weight: 300;
    margin-top: 1.5rem;
  `}
`;

export const Link_Create = styled(Link)`
  text-decoration: none;
  color: white;
`;

export const LevelBlock = styled.div`
  display: flex;
  width: fit-content;
  margin: 1.25rem auto;
  // Mobile
  @media screen and (min-width: 0) and (max-width: ${mobile}) {
    margin: 4rem auto 2rem auto;
  }
  // Tablet
  @media screen and (min-width: ${mobile}) and (max-width: ${tablet}) {
    margin: 15% auto 5% auto;
  }
`;

export const Circle = styled.div`
  ${({ theme }) => css`
    background: ${(props) => props.theme.background};
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 100%;
    transition: 1s;
  `}
`;

export const WhiteCircle = styled(Circle)`
  ${({ theme }) => css`
    background: white;
    transition: 1s;
  `}
`;

export const CircleNumber = styled.h1`
  ${({ theme }) => css`
    margin: 0;
    font-size: 1rem;
    color: ${(props) => props.theme.color};
    padding: 0.65rem;
    color: ${theme.colors.baseBg1};
    text-align: center;
  `}
`;

export const Line = styled.div`
  ${({ theme }) => css`
    border-bottom: 4px solid;
    border-color: ${theme.colors.textColor};
    width: 70px;
    height: 2px;
    padding: 1rem 0 0 0;
    transition: 1s;
  `}
`;

export const YellowLine = styled(Line)`
  ${({ theme }) => css`
    border-color: ${theme.colors.logoColor};
    transition: 1s;
  `}
`;
