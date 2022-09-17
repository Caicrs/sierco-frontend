import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

const mobile: string = "768px";
const desktop: string = "1024px";
const tablet: string = "825px";

export const Home = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.baseBg1};
    color: ${theme.colors.textColor};
  `}
`;

export const BoxContent = styled.div`
  // Mobile X Tablet
  @media (min-width: 0) and (max-width: ${tablet}) {
    display: block;
    width: 82%;
    margin: 0 auto;
  }
  // Desktop
  @media (min-width: ${tablet}) {
    margin: 0 5rem 0 5rem;
    display: flex;
  }
`;

export const BoxLeft = styled.div`
  width: 100%;
  padding: 8rem 0 0 0;
  font-weight: bold;
  @media (max-width: ${tablet}) {
    padding-top: 6rem;
  }
  @media (max-width: ${mobile}) {
    padding-top: 2rem;
  }
`;

export const BoxRight = styled.div`
  width: 100%;
  // Mobile X Tablet
  @media (min-width: 0) and (max-width: ${tablet}) {
    height: 45vh;
  }
  // Desktop
  @media (min-width: ${tablet}) {
    height: 75vh;
      
  }
`;
export const H1 = styled.h1`
margin: 0;
  // Mobile X Tablet
  @media (min-width: 0) and (max-width: ${tablet}) {
    font-size: 1.5rem;
    text-align: center;
  }
  // Tablet
  @media (min-width:${mobile}){
    font-size: 2rem;
  }
  // Desktop
  @media (min-width: ${tablet}) {
    font-size: 2.5rem;
      
  }
`;

export const H5 = styled.h5`
  font-weight: 400;
  margin: 0.5rem 0 0 0;
  opacity: 0.25;
  @media (max-width: ${tablet}) {
    text-align: center;
  }
`;

export const Button = styled.div`
  ${({ theme }) => css`
    width: fit-content;
    margin: 6rem 0 0 0;
    padding: 1rem 2rem 1rem 2rem;
    background: ${theme.colors.logoColor};
    color: ${theme.colors.baseBg1};
    border-radius: 1rem;
    transition: 0.3s;
    cursor: pointer;
    &:hover {
      background: transparent;
      color: ${theme.colors.logoColor};
      border: 1px solid ${theme.colors.logoColor};
    }
  `}
  @media (max-width: ${tablet}) {
    display: none;
  }
`;

// MobileButtons Session

export const MobileButtons = styled.div`
  display: none;
  // Mobile X Tablet
  @media (max-width: ${mobile}) {
    display: block;
    width: 100%;
    padding: 3rem 0 0 0;
  }
  @media (min-width: ${mobile}) and (max-width:${tablet}) {
    padding: 5rem 0 0 0;
    display: block;
  }
`;

export const BtnMobile = styled(Button)`
  ${({ theme }) => css`
    display: block;
    margin: 0 auto;
    font-size: 1.25rem;
    font-weight: 600;
    background: transparent;
    border: 1px solid ${theme.colors.logoColor};
    color: ${theme.colors.logoColor};
    @media (min-width: ${mobile}) {
      width: 30%;
      text-align: center;
      padding: 1.25rem 2.5rem 1.25rem 2.5rem;
    }
  `}
`;

export const H3 = styled.h3`
  ${({ theme }) => css`
    text-align: center;
    padding: 1.5rem 0 1.5rem 0;
    font-weight:400;
    opacity: 0.5;
    color: ${theme.colors.logoColor};
  `}
`;

export const TextContainer = styled.div`
  width: 100%;
  text-align: center;
`;

export const Text = styled(Link)`
  ${({ theme }) => css`
    cursor: pointer;
    width: 100%;
    text-align: center;
    text-decoration: none;
    color: ${theme.colors.logoColor};
    font-size: 1.25rem;
  `}
`;
