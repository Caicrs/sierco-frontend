import * as S from "./style";
import arrowdown from "./img/arrow-down.svg";
import arrowup from "./img/arrow-up.svg";
import { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";

const Navbar2 = () => {
  const name = "Admin";
  const [level, setLevel] = useState(0);
  const [arrow, setArrow] = useState(0);

  let OptionVisible = {
    opacity: 1 ,
    visibility: "visible",
    top: "5.1rem",
  };

  let OptionHidden = {
    opacity: 0 ,
    visibility: "hidden",
    top: "4rem",
  };

  function Change() {
    if (arrow === 0) {
      setArrow(1);
    } else {
      setArrow(0);
    }
  }

  return (
    <S.NavbarDiv>
      <S.ButtonsNav>
        <S.LogoText>SIER.co</S.LogoText>
      </S.ButtonsNav>

      <S.ButtonsNav2>
        {level === 0 ? (
          <S.CreateBtnCenter>Home</S.CreateBtnCenter>
        ) : (
          <S.CreateBtnCenterOpacity onClick={() => setLevel(0)}>
            Home
          </S.CreateBtnCenterOpacity>
        )}
        <S.Bar2>|</S.Bar2>
        {level === 0 ? (
          <S.CreateBtnCenterOpacity
            className="active"
            onClick={() => setLevel(1)}
          >
            Dashboard
          </S.CreateBtnCenterOpacity>
        ) : (
          <S.CreateBtnCenter>Dashboard</S.CreateBtnCenter>
        )}
      </S.ButtonsNav2>
      <S.ButtonsNav>
        <S.CreateBtn>
          Olá, {name}{" "}
          {arrow === 0 ? (
            <S.Icon onClick={() => Change()} src={arrowdown}></S.Icon>
          ) : (
            <S.Icon2 onClick={() => Change()} src={arrowup}></S.Icon2>
          )}
        </S.CreateBtn>
        <ThemeProvider theme={arrow === 0 ? OptionHidden : OptionVisible}>
          <S.OptionsContainer>
            <S.List>Trocar Perfil</S.List>
            <S.Line></S.Line>
            <S.List>Sair</S.List>
            <S.Line></S.Line>
          </S.OptionsContainer>
        </ThemeProvider>
      </S.ButtonsNav>
    </S.NavbarDiv>
  );
};
export default Navbar2;
