import styled, { css } from "styled-components";

const tablet: string = "825px";

export const Container = styled.div`
  ${({ theme }) => css`
    width: 100vw;
    height: 100vh;
    background-color: ${theme.colors.baseBg1};
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  `}
`;

export const SubContainer = styled.div`
  width: fit-content;
  height:50vh;
`;

export const DualDivs = styled.div`
  width: fit-content;
  display: flex;
`;


export const Text = styled.div`
  ${({ theme }) => css`
    font-weight: 600;
    color: ${theme.colors.logoColor};
    font-size: 1.5rem;
    text-align: center;
    padding-bottom: 1.5rem;
  `}
`;


export const Buttons = styled.div`
  ${({ theme }) => css`
    width: fit-content;
    height: fit-content;
    padding: 0.5rem 0.8rem;
    font-size: 1rem;
    margin:0 auto;
    border-radius: 0.5rem;
    font-weight: 600;
    color: ${theme.colors.baseBg1};
    background: ${theme.colors.logoColor}
  `}
`;

export const ButtonImg = styled.img`
  ${({ theme }) => css`
    width: fit-content;
    height: fit-content;
    padding: 0.5rem 0.8rem;
    font-size: 1.25rem;
    border-radius: 0.5rem;
    font-weight: 600;
    color: ${theme.colors.baseBg1};
    background: ${theme.colors.logoColor}
  `}
`;

export const ProfileContainer = styled.div`
  margin: 0 auto;
  width: fit-content;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 5px;
  grid-row-gap: 0px;
`;

export const ProfileBox = styled.div`
  margin: 0 1rem;
  text-align: center;
`;

export const ProfileImg = styled.img`
  border-radius: 1rem;
  -webkit-box-shadow: 2px 10px 39px -6px rgba(0, 0, 0, 0.56);
  -moz-box-shadow: 2px 10px 39px -6px rgba(0, 0, 0, 0.56);
  box-shadow: 2px 10px 39px -6px rgba(0, 0, 0, 0.56);
  width: 100px;
  height: 90px;
`;

export const ProfileName = styled.div`
  font-size: 1rem;
  font-weight: 600;
  padding-top: 1rem;
`;

export const Form = styled.div`
text-align:center;
`;

export const Input = styled.input`
  ${({ theme }) => css`
    font-size: 1rem;
    width:100%;
    margin: 1rem auto;
    background:transparent;
    border: none;
    border-bottom:1px solid white;
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

export const DualButtons = styled.div`
display: grid;
grid-template-columns: repeat(2, 1fr);
width:100%;
margin:1rem auto;
`;