import { useState, useEffect } from "react";
import styled, { css, ThemeProvider, keyframes } from "styled-components";
import * as S from "./styleForm";
import { motion } from "framer-motion";
import UserForm from "./formTypes/users";
import GameForm from "./formTypes/games";
import GenreForm from "./formTypes/genres";
import ProfileForm from "./formTypes/profile";

interface ButtonProps {
  name: string;
  set: string;
  changeState: (params: any) => any;
}

const Form = ({ name, set, changeState }: ButtonProps) => {
  const [state, setState] = useState("");

  function Change() {
    changeState("exit");
  }

  let OptionHidden = {
    display: "none",
  };

  let OptionSee = {
    display: "block",
  };

  switch (name) {
    case "Users":
      return (
        <ThemeProvider theme={set === "show" ? OptionSee : OptionHidden}>
          <Container>
            <S.FormBox>
              <UserForm />
              <ExitBtn onClick={Change}>X</ExitBtn>
            </S.FormBox>
          </Container>
        </ThemeProvider>
      );
    case "Games":
      return (
        <ThemeProvider theme={set === "show" ? OptionSee : OptionHidden}>
          <Container>
            <S.FormBox>
              <GameForm />
              <ExitBtn onClick={Change}>X</ExitBtn>
            </S.FormBox>
          </Container>
        </ThemeProvider>
      );
    case "Profiles":
      return (
        <ThemeProvider theme={set === "show" ? OptionSee : OptionHidden}>
          <Container>
            <S.FormBox>
              <ProfileForm />
              <ExitBtn onClick={Change}>X</ExitBtn>
            </S.FormBox>
          </Container>
        </ThemeProvider>
      );
    case "Genres":
      return (
        <ThemeProvider theme={set === "show" ? OptionSee : OptionHidden}>
          <Container>
            <S.FormBox>
              <GenreForm />
              <ExitBtn onClick={Change}>X</ExitBtn>
            </S.FormBox>
          </Container>
        </ThemeProvider>
      );
    default:
      return <></>;
  }
};

export default Form;

const mobile: string = "480px";
const desktop: string = "1024px";
const tablet: string = "825px";

const FadeIn = keyframes`
	from {opacity:0}
  to {opacity:1;}

`;

const Container = styled.div`
  ${({ theme }) => css`
    width: 100vw;
    height: 100vh;
    padding: 0;
    margin: 0;
    display: ${(props) => props.theme.display || "none"};
    top: 0;
    left: 0;
    right: 0;
    backdrop-filter: blur(5px);
    transition: 1s;
    position: fixed;
    animation: 0.25s linear ${FadeIn};
    color: ${theme.colors.textColor};
    // Mobile
    @media screen and (min-width: 0) and (max-width: ${mobile}) {
      height: 100vh;
    }
    // Tablet
    @media screen and (min-width: ${mobile}) and (max-width: ${tablet}) {
      height: 100vh;
    }
  `}
`;

const ExitBtn = styled.h3`
  ${({ theme }) => css`
    right: 5rem;
    top: 0;
    position: absolute;
    height: fit-content;
    transition: 0.3s;
    width: fit-content;
    color: ${theme.colors.logoColor};
    cursor: pointer;
    &:hover {
      opacity: 0.5;
    }
    // Mobile
    @media screen and (min-width: 0) and (max-width: ${mobile}) {
      right: 2rem;
    }
  `}
`;
