import styled, { css } from "styled-components";

const mobile: string = "768px";
const desktop: string = "1024px";
const tablet: string = "825px";

export const Container = styled.section`
  ${({ theme }) => css`
  height:100vh ;
    background-color: ${theme.colors.baseBg1};
    color: ${theme.colors.textColor};
  `}
`;