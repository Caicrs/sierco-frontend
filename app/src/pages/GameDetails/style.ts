import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

const mobile: string = "480px";
const desktop: string = "1024px";
const tablet: string = "825px";

export const Global = styled.div`
  width: 100%;
  height: fit-content;
`;

export const Container = styled.div`
  ${({ theme }) => css`
    width: 100vw;
    background-color: ${theme.colors.baseBg1};
    color: ${theme.colors.textColor};
    // Mobile
    @media screen and (min-width: 0) and (max-width: ${mobile}) {
      background: ${theme.colors.baseBg1};
    }
    // Tablet
    @media screen and (min-width: ${mobile}) and (max-width: ${tablet}) {
      background: ${theme.colors.baseBg1};
      height: 100vh;
    }
  `}
`;

export const Title = styled.div`
  ${({ theme }) => css`
    width: 80vw;
    font-size: 1.15rem;
    color: ${theme.colors.textColor};
    // Mobile
    @media screen and (min-width: 0) and (max-width: ${mobile}) {
      text-align: center;
      margin: 1rem auto 0 auto;
    }
    // Tablet
    @media screen and (min-width: ${mobile}) and (max-width: ${tablet}) {
      background: ${theme.colors.baseBg1};
      height: 100vh;
    }
  `}
`;

export const Genre = styled.div`
  width: fit-content;
  display: flex;
  padding:1rem 2rem ;
  opacity: 0.5;
`;

export const DualText = styled.div`
  display: flex;
  width: fit-content;
  margin:0 auto;
`;

export const Description = styled.div`
  ${({ theme }) => css`
    width: 80vw;

    color: ${theme.colors.textColor};
    // Mobile
    @media screen and (min-width: 0) and (max-width: ${mobile}) {
      text-align: center;
      margin: 0 auto;
    }
    // Tablet
    @media screen and (min-width: ${mobile}) and (max-width: ${tablet}) {
      background: ${theme.colors.baseBg1};
      height: 100vh;
    }
  `}
`;

export const StarsBox = styled.div`
  ${({ theme }) => css`
    width: fit-content;
    color: ${theme.colors.textColor};
    display: grid;
    grid-template-columns: ${(props) =>
      props.theme.gridTemplateColumns || "repeat(1, 1fr)"};
      grid-column-gap: 1rem;
    display: ${(props) => props.theme.opacity || "0"};
    padding: 1rem 0;
    // Mobile
    @media screen and (min-width: 0) and (max-width: ${mobile}) {
      text-align: center;
      margin: 0 auto 1rem auto;
    }
    // Tablet
    @media screen and (min-width: ${mobile}) and (max-width: ${tablet}) {
      background: ${theme.colors.baseBg1};
      text-align: center;
      margin: 0 auto;
    }
  `}
`;

export const Stars = styled.div``;

export const StarIcon = styled.img`
  margin: 0 auto;
  // Mobile
  @media (min-width: 0) and (max-width: ${tablet}) {
    width: 1.25rem;
  }
  // Desktop
  @media (min-width: ${tablet}) {
    width: 1.25rem;
  }
`;

export const ImgBox = styled.div`
  margin: 0 auto;
  width: fit-content;
  // Mobile
  @media (min-width: 0) and (max-width: ${tablet}) {
    width: 80vw;
  }
  // Desktop
  @media (min-width: ${tablet}) {
    width: 1.25rem;
  }
`;

export const Img = styled.img`
  margin: 0 auto;
  width: 300px;
  // Mobile
  @media (min-width: 0) and (max-width: ${tablet}) {
    width: 100%;
  }
  // Desktop
  @media (min-width: ${tablet}) {
  }
`;

export const Line = styled.div`
  margin: 1rem auto;
  opacity: 0.25;
  // Mobile
  @media (min-width: 0) and (max-width: ${tablet}) {
    width: 80vw;
    height: 0.2px;
    background: white;
  }
  // Desktop
  @media (min-width: ${tablet}) {
  }
`;

export const Text = styled.div`
  @media (min-width: 0) and (max-width: ${tablet}) {
    width: 80vw;
    margin: 1rem auto;
    font-weight: bold;
    font-size: 1.25rem;
  }
`;

export const Iframe = styled.div`
  margin: 0 auto;
  padding-bottom: 2rem;
  // Mobile
  @media (min-width: 0) and (max-width: ${tablet}) {
    width: 80vw;
  }
  // Desktop
  @media (min-width: ${tablet}) {
    width: 1.25rem;
  }
`;

export const Button = styled.div`
  ${({ theme }) => css`

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
`;

export const BtnBox = styled.div`
width:80vw;
margin:0 auto;
`;

export const BtnMobile = styled(Button)`
  ${({ theme }) => css`
    display: block;
    text-align: center;
    font-size: 1rem;
    font-weight: 600;
    background: transparent;
    border: 1px solid ${theme.colors.logoColor};
    color: ${theme.colors.logoColor};
    @media (min-width: ${mobile}) {
      
      padding: 1.25rem 2.5rem 1.25rem 2.5rem;
    }
  `}
`;
