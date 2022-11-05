import styled, { css } from "styled-components";

const mobile: string = "768px";
const desktop: string = "1024px";
const tablet: string = "825px";

export const ContainerCarousel = styled.div`
  margin: 0 auto;
  padding: 0;
  // Mobile
  @media (min-width: 0) and (max-width: ${tablet}) {
    width: 100%;
  }
  // Tablet
  @media (min-width: ${mobile}) {
    width: 90%;
  }
  // Desktop
  @media (min-width: ${tablet}) {
    width: 94%;
  }
`;

export const Card = styled.div`
  ${({ theme }) => css`
    cursor: pointer;
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
    // Mobile
    @media (min-width: 0) and (max-width: ${tablet}) {
      width: 135px;
      height:200px;
      margin:0:
    
    }
    // Tablet
    @media (min-width: ${mobile}) {
      width: 135px;
      height:200px;
      margin:0:
    }
    // Desktop
    @media (min-width: ${tablet}) {
      width: 200px;
      height:265px;
      margin: 2rem 0 1rem 0;
    }
  `}
`;

export const Image = styled.img`
  width: 100%;
  height: 50%;
  margin: 0;
  border-radius: 1.2rem 1.2rem 0 0;
  background: #d9d9d9;
`;

export const Title = styled.div`
  font-weight: 600;
  margin: 0;
  // Mobile
  @media (min-width: 0) and (max-width: ${tablet}) {
    width: 100%;
    height: 40px;
    padding: 0 0.8rem 0 0.8rem;
    font-size: 0.65rem;
  }
  // Tablet
  @media (min-width: ${mobile}) {
    width: 100%;
    height: 40px;
    padding: 0 0.8rem 0 0.8rem;
    font-size: 0.65rem;
  }
  // Desktop
  @media (min-width: ${tablet}) {
  box-sizing: border-box;
  font-size: 0.85rem;
  padding: 0.25rem 1.25rem 0 1.25rem;
  }
`;

export const SubTitleContainer = styled.div`
  margin: 0;
  padding: 0rem 1.25rem 0 1.25rem;
  // Mobile
  @media (min-width: 0) and (max-width: ${tablet}) {
    padding: 0rem 0.8rem 0 0.8rem;
  }
`;

export const SubTitle = styled.h6`
  margin: 0;
  font-weight: 300;
  // Desktop
  @media (min-width: ${tablet}) {
   font-size:0.65rem;
  }
`;
export const Year = styled(SubTitle)`
`;

export const Stars = styled.div`
  padding: 0.5rem 1.25rem 1rem 1.25rem;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-column-gap: 0.8rem;
  margin: 0 auto;
  // Mobile
  @media (min-width: 0) and (max-width: ${tablet}) {
    padding: 0.5rem 0.8rem 0 0.8rem;
  }
`;

export const StarIcon = styled.img`
  // Mobile
  @media (min-width: 0) and (max-width: ${tablet}) {
    width: 0.65rem;
  }
  // Desktop
  @media (min-width: ${tablet}) {
    width: 1.25rem;
  }
`;
