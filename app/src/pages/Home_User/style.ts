import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

export const Container = styled.section`
  ${({ theme }) => css`
    background-color: ${theme.colors.baseBg1};
    min-width: 100vw;
    min-height: 100vh;
    overflow-x: none;
    color: ${theme.colors.textColor};
  `}
`;