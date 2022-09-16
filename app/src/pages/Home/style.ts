import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

const mobile: string = "768px";
const desktop: string = "1024px";
const tablet: string = "825px";

export const Home = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.baseBg1};
    overflow-x:hidden;
    color: ${theme.colors.textColor};
  `}
`;

export const HomeContent = styled.main`
  ${() => css`
    width: calc(100% - 450px);
    padding: 20px;
    overflow: auto;
    height: 100vh;
    box-sizing: border-box;
  `}
`;

export const HomeHeaderDetails = styled.div`
  ${() => css`
    display: flex;
    justify-content: space-between;
  `}
`;

export const HomeHeaderDetailsLogo = styled.h1`
  ${({ theme }) => css`
    ${theme.mixins.logoStyle};
    text-transform: uppercase;
    margin: 0;
  `}
`;

export const HomeHeaderDetailsDate = styled.p`
  ${() => css`
    text-transform: capitalize;
  `}
`;

export const HomeHeaderDetailsSearch = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: 10px;
    ${theme.mixins.input()};
    padding-top: 0;
    padding-bottom: 0;
    padding-right: 0;
    input {
      background: transparent;
      border: none;
      height: 100%;
      color: ${theme.colors.textColor};
    }
  `}
`;

export const HomeProductTitle = styled.h2`
  ${({ theme }) => css`
    margin: 0;
    border-bottom: 1px solid ${theme.colors.baseLine};
    ${theme.mixins.bodyStyle()};
    color: ${theme.colors.primaryColor};
    padding-bottom: 10px;
    b {
      position: relative;
      &::after {
        content: "";
        position: absolute;
        left: 0;
        bottom: -13px;
        width: 100%;
        height: 4px;
        background-color: ${theme.colors.primaryColor};
        border-radius: 5rem;
      }
    }
  `}
`;

export const HomeProductList = styled.div`
  ${() => css`
    margin-top: 25px;
    padding-bottom: 25px;
  `}
`;

export const HomeProductListGap = styled.div`
  ${({ theme }) => css`
    width: 200px;
  `}
`;

export const BoxContent = styled.div`
  margin: 0 5rem 0 5rem;
  display: flex;
  @media (max-width: ${tablet}) {
    display: block;
    width: 82%;
    margin: 0 auto;
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
  height: 75vh;
  width: 100%;
  @media (max-width: ${tablet}) {
    height: 45vh;
  }
`;
export const H1 = styled.h1`
  font-size: 2.5rem;
  margin: 0;
  @media (max-width: ${desktop}) and (min-width: ${mobile}) {
    text-align: center;
  }
  @media (max-width: ${mobile}) {
    font-size: 1.5rem;
    text-align: center;
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
  @media (max-width: ${tablet}) {
    display: block;
    width: 100%;
    padding: 5rem 0 0 0;
  }
  @media (max-width: ${desktop}) and (min-width: ${mobile}) {
    padding-top: 8rem;
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
    padding:1rem 0 1rem 0 ;
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