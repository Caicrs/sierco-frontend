import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

const mobile: string = "768px";
const desktop: string = "1024px";
const tablet: string = "825px";

export const FooterContainer = styled.div`
  ${({ theme }) => css`
  margin:5rem 0 0 0;
width:100vw;

    background: red;
  `}
`;

export const Content = styled.div`
background:green;
`;
