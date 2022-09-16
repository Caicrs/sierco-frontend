import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

const mobile: string = "768px";
const desktop: string = "1024px";
const tablet: string = "825px";

export const Box = styled.div`
  background: black;
  width: 100%;

  @media (max-width: 1000px) {
    padding: 70px 30px;
  }
`;
export const Box2 = styled.div`
  background: green;
  width: 100%;
padding: 6rem 2rem;
  @media (max-width: 1000px) {
    padding: 70px 30px;
  }
`;
