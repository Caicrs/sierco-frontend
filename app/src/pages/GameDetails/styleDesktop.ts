import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

const mobile: string = "480px";
const desktop: string = "1024px";
const tablet: string = "825px";

export const Container = styled.div`
  ${({ theme }) => css`
    width: 100vw;
    background-color: ${theme.colors.baseBg1};
  `}
`;

export const FirstBox = styled.div`
  width: 89%;
  margin: 0 auto;
  display: flex;
`;

export const ImgBox = styled.div`
  margin: 0 auto;
  width: fit-content;
  line-height: 0;
`;

export const Img = styled.img`
  margin: 0 auto;
  width: 100%;
  border-radius: 1rem;
  border-radius: 1rem;
  -webkit-box-shadow: 2px 10px 39px -6px rgba(0, 0, 0, 0.56);
  -moz-box-shadow: 2px 10px 39px -6px rgba(0, 0, 0, 0.56);
  box-shadow: 2px 10px 39px -6px rgba(0, 0, 0, 0.56);
`;

export const Left = styled.div`
  width: 100%;
  padding: 0 1.5rem 0 0;
`;

export const Right = styled.div`
  width: 100%;
  padding: 0 1.5rem;
  height: 100%;
`;

export const Title = styled.div`
  ${({ theme }) => css`
    font-size: 1.5rem;
    padding-top: 1.5rem;
    color: ${theme.colors.textColor};
  `}
`;

export const DualText = styled.div`
  display: flex;
  width: 100%;
`;

export const Genre = styled.div`
  width: fit-content;
  display: flex;
  padding:0 2rem 0 1rem;
  border-left: 1px solid white;
  
`;

export const Year = styled.div`
  width: 100%;
  text-align: right;
`;

export const BtnBox = styled.div`
  width: fit-content;
  height: 100%;
  padding: 1rem 0;
`;

export const Button = styled.div`
  ${({ theme }) => css`
    padding: 0.5rem 2.5rem;
    background: ${theme.colors.logoColor};
    color: ${theme.colors.baseBg1};
    border-radius: 0.5rem;
    transition: 0.3s;
    cursor: pointer;
    &:hover {
      background: transparent;
      color: ${theme.colors.logoColor};
      border: 1px solid ${theme.colors.logoColor};
    }
  `}
`;

export const BtnMobile = styled(Button)`
  ${({ theme }) => css`
    text-align: center;
    font-size: 0.95rem;
    font-weight: 400;
    background: ${theme.colors.logoColor};
    color: ${theme.colors.baseBg1};
  `}
`;

export const Line = styled.div`
  margin: 1rem auto;
  opacity: 0.25;
  width: 89%;
  height: 0.2px;
  background: white;
`;

export const DetailsBox = styled.div`
  ${({ theme }) => css`
    width: 88%;
    margin: 0 auto;
    box-sizing: border-box;
  `}
`;

export const Details = styled(Title)`
  ${({ theme }) => css`
    color: ${theme.colors.logoColor};
  `}
`;

export const DetailsText = styled.div`
  font-weight: 400;
  font-size: 0.65rem;
  padding-top: 1rem;
  height: 100px;
`;

export const Iframe = styled.iframe`
  width: 100%;
  height: 500px;
  padding-top: 2rem;
`;

export const If = styled.div`
  background: white;
`;
