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
      height: 100vh;
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
      padding-top: 2rem;
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
  ${({ theme }) => css`
    // Mobile
    @media screen and (min-width: 0) and (max-width: ${tablet}) {
      background: ${theme.colors.baseBg1};
      padding-bottom: 2rem;
    }
    // Tablet
    @media screen and (min-width: ${mobile}) and (max-width: ${tablet}) {
      width: 80vw;
      margin: 0 auto;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: 1fr;
      grid-column-gap: 5px;
      grid-row-gap: 0px;
    }
  `}
`;

export const ProfileBox = styled.div`
  margin: 0 auto;
  width:fit-content;
  cursor:pointer;
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
  width: 180px;
  height: 170px;
`;

export const ProfileName = styled.div`
    width:40vw;
    margin:0 auto;
    text-align:center;
    font-size: 1.25rem;
    font-weight: 600;
    padding-top: 1rem;

`;

export const DualDivs = styled.div`
  width: fit-content;
  display: flex;
`;

export const Icon = styled.img`
  -webkit-box-shadow: 2px 10px 39px -6px rgba(0, 0, 0, 0.56);
  -moz-box-shadow: 2px 10px 39px -6px rgba(0, 0, 0, 0.56);
  box-shadow: 2px 10px 39px -6px rgba(0, 0, 0, 0.56);
  width: 1.5rem;
`;

export const ContainerForm = styled.div`
  height: 50vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Form = styled.div`
  text-align: center;
  margin: 0 auto;
  width: 80vw;
`;

export const Buttons = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: fit-content;
    box-sizing: border-box;
    padding: 0.5rem 0.8rem;
    font-size: 1rem;
    margin: 1rem auto;
    border-radius: 0.5rem;
    font-weight: 600;
    color: ${theme.colors.baseBg1};
    background: ${theme.colors.logoColor};
  `}
`;

export const Input = styled.input`
  ${({ theme }) => css`
    font-size: 1rem;
    width: 100%;
    box-sizing: border-box;
    margin: 1rem auto;
    background: transparent;
    border: none;
    border-bottom: 1px solid white;
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
