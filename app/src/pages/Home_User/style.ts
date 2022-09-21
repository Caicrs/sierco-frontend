import styled, { css } from "styled-components";

const mobile: string = "768px";
const desktop: string = "1024px";
const tablet: string = "825px";

export const Container = styled.section`
  ${({ theme }) => css`
    background-color: ${theme.colors.baseBg1};
    color: ${theme.colors.textColor};
  `}
`;

export const Topic = styled.div`
  ${({ theme }) => css`
    margin: 0 auto;
    width: 88.5%;
    color: ${theme.colors.textColor};
    font-size: 1.25rem;
    font-weight: bold;
     // Mobile 
 @media (min-width: 0) and (max-width: ${tablet}) {
padding: 0 0 1.25rem 0 ;
}
  // Tablet
  @media (min-width: ${mobile}) {
  width: fit-content;
  margin:0 0 0 4rem;
}
    // Desktop
    @media (min-width: ${tablet}) {
    padding: 1.5rem 0 0 0;
    font-size: 1.5rem;
    }
  `}
`;

export const HorizontalList = styled.div`
  ${({ theme }) => css`
    width: 88.5%;
    height: 299px;
    margin: 2rem auto;
  `}
`;

export const Card = styled.div`
  ${({ theme }) => css`
    width: 230px;
    height: 100%;

    background: rgb(120, 120, 120);
    background: linear-gradient(
      180deg,
      rgba(120, 120, 120, 0.19323200471594892) 0%,
      rgba(38, 38, 38, 1) 100%
    );
    border-radius: 1.2rem;
  `}
`;
