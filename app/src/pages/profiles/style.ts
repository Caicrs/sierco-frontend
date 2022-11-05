import styled, { css } from "styled-components";

const mobile: string = "480px";
const desktop: string = "1024px";
const tablet: string = "825px";

export const Container = styled.div`
  ${({ theme }) => css`
    width: 100vw;

    background-color: ${theme.colors.baseBg1};

    // Mobile
    @media screen and (min-width: 0) and (max-width: ${tablet}) {
      background: ${theme.colors.baseBg1};
      height: 100%;
    }

    // Tablet
    @media screen and (min-width: ${mobile}) and (max-width: ${tablet}) {
      height: 100vh;
    }
  `}
`;

export const addButtonBox = styled.div`
  ${({ theme }) => css`
    // Mobile
    @media screen and (min-width: 0) and (max-width: ${tablet}) {
      width: 85vw;
      margin: 0 auto;
      padding-top: 1rem;
      color: ${theme.colors.logoColor};
    }
  `}
`;

export const Button = styled.div`
  ${({ theme }) => css`
    font-weight: 600;
    color: ${theme.colors.logoColor};
    // Mobile
    @media screen and (min-width: 0) and (max-width: ${tablet}) {
      font-size: 3rem;
    }
  `}
`;

export const Text = styled.div`
  ${({ theme }) => css`
    font-weight: 600;
    color: ${theme.colors.logoColor};

    // Mobile
    @media screen and (min-width: 0) and (max-width: ${tablet}) {
      font-size: 1.5rem;
      text-align: center;
      padding-top: 3rem;
    }
  `}
`;

export const ProfileContainer = styled.div`
  // Mobile
  @media screen and (min-width: 0) and (max-width: ${tablet}) {
  }
  // Tablet
  @media screen and (min-width: ${mobile}) and (max-width: ${tablet}) {
    width:80vw;
    margin:0 auto;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr;
    grid-column-gap: 5px;
    grid-row-gap: 0px;
  }
`;

export const ProfileBox = styled.div`
  margin: 0 auto;
  // Mobile
  @media screen and (min-width: 0) and (max-width: ${tablet}) {
    text-align: center;
    padding-top: 3rem;
  }
  // Tablet
  @media screen and (min-width: ${mobile}) and (max-width: ${tablet}) {
  }
`;

export const ProfileImg = styled.img`
  border-radius: 1rem;
  -webkit-box-shadow: 2px 10px 39px -6px rgba(0, 0, 0, 0.56);
  -moz-box-shadow: 2px 10px 39px -6px rgba(0, 0, 0, 0.56);
  box-shadow: 2px 10px 39px -6px rgba(0, 0, 0, 0.56);
  // Mobile
  @media screen and (min-width: 0) and (max-width: ${tablet}) {
    width: 180px;
    height: 170px;
    background: green;
  }
`;

export const ProfileName = styled.div`
  // Mobile
  @media screen and (min-width: 0) and (max-width: ${tablet}) {
    font-size: 1.25rem;
    font-weight: 600;
    padding-top: 1rem;
  }
`;
