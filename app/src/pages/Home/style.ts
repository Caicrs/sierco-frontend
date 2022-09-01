import styled, { css } from "styled-components";


export const Home = styled.section`
  ${({ theme }) => css`
    background-color: ${theme.colors.baseBg1};
    min-width: 100vw;
    min-height: 100vh;
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
`;

export const BoxLeft = styled.div`
  width: 100%;
  padding: 8rem 0 0 0;

  font-weight: bold;
`;

export const BoxRight = styled.div`
  height: 75vh;
  width: 100%;

`;
export const H1 = styled.h1`
  font-size: 3rem;
  margin: 0;
`;

export const H5 = styled.h5`
  font-weight: 400;
  margin: 0.5rem 0 0 0;
  opacity: 0.25;
`;

export const Button = styled.div`
  ${({ theme }) => css`
  width: fit-content;
  margin: 6rem 0 0 0 ;
    padding: 1rem 2rem 1rem 2rem;
    background: ${theme.colors.logoColor};
    color: ${theme.colors.baseBg1};
    border-radius:1rem ;
    transition:0.3s;
    cursor:pointer;
    &:hover{
      background: transparent;
      color: ${theme.colors.logoColor};
      border: 1px solid ${theme.colors.logoColor};
    }
  `}
`;


