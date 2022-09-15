import styled, { css } from "styled-components";

export const ContainerCarousel = styled.div`
  margin: 0 auto;
  padding: 0;
  width: 94%;

  @media (max-width: 768px) {
    // For largest of Container in mobile devices
    width: 100%;
  }
`;

export const Card = styled.div`
  ${({ theme }) => css`
    width: 200px;
    height: 100%;
    cursor: pointer;
    margin: 2rem 0 1rem 0;
    background: rgb(120, 120, 120);
    background: linear-gradient(
      180deg,
      rgba(120, 120, 120, 0.19323200471594892) 0%,
      rgba(38, 38, 38, 1) 100%
    );
    transition: 0.3s;
    border-radius: 1.2rem;
    :hover {
      -webkit-box-shadow: 0px 0px 24px 5px rgba(0, 0, 0, 0.38);
      box-shadow: 0px 0px 24px 5px rgba(0, 0, 0, 0.38);
    }
  `}
`;

export const Image = styled.img`
  width: 100%;
  height: 50%;
  border-radius: 1.2rem 1.2rem 0 0;
  background: #d9d9d9;
`;

export const Title = styled.h5`
  font-weight: 400;
  margin: 0;
  padding: 1rem 1.25rem 0 1.25rem;
`;

export const SubTitleContainer = styled.div`
  margin: 0;
  padding: 1rem 1.25rem 0 1.25rem;
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: 1fr;
  grid-column-gap: 25px;
  grid-row-gap: 0px;
`;

export const SubTitle = styled.h6`
  margin: 0;
  font-weight: 300;
`;
export const Year = styled(SubTitle)`
  text-align: right;
`;

export const Stars = styled.div`
  padding: 1.5rem 1.25rem 1rem 1.25rem;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-column-gap: 0.8rem;
  margin: 0 auto;
`;

export const StarIcon = styled.img`
  width: 1.25rem;
`;
