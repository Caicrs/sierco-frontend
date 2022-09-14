import styled, { css } from "styled-components";

export const Container = styled.section`
  ${({ theme }) => css`
    background-color: ${theme.colors.baseBg1};
    color: ${theme.colors.textColor};
  `}
`;

export const Topic = styled.div`
  ${({ theme }) => css`
    width: 88.5%;
    padding: 1.5rem 0 0 0;
    margin: 0 auto;
    color: ${theme.colors.textColor};
    font-size: 1.5rem;
    font-weight: bold;
  `}
`;

export const HorizontalList = styled.div`
  ${({ theme }) => css`
    width: 88.5%;
    height: 299px;
    margin: 2rem auto;
    /*
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: 1fr;
    grid-column-gap: 25px;
    grid-row-gap: 0px;
    */
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
