import * as S from "./style";
import arrowdown from "./img/arrow-down.svg";
import arrowup from "./img/arrow-up.svg";
import { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { Auth } from "helpers/Auth";

interface ButtonProps {
  username:  string;
  changeState: (params: any) => any;
  page: number;
}

const Navbar2 = ({username,changeState,page}: ButtonProps) => {

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

  function HomeState (){
    changeState(0)
  }
  function Dashboard (){
    changeState(1)
  }

  function Logout(){
    Auth.logout()
  }

  return (
    <S.NavbarDiv>
      <S.LogoNav>
        <S.LogoText>SIER.co</S.LogoText>
      </S.LogoNav>

      <S.ButtonsNav2>
        {page === 0 ? (
          <S.CreateBtnCenter>Home</S.CreateBtnCenter>
        ) : (
          <S.CreateBtnCenterOpacity onClick={HomeState}>
            Home
          </S.CreateBtnCenterOpacity>
        )}
        <S.Bar2>|</S.Bar2>
        {page === 0 ? (
          <S.CreateBtnCenterOpacity
            className="active"
            onClick={Dashboard}
          >
            Dashboard
          </S.CreateBtnCenterOpacity>
        ) : (
          <S.CreateBtnCenter>Dashboard</S.CreateBtnCenter>
        )}
      </S.ButtonsNav2>
     
      <S.ButtonsNav>
        <S.CreateBtn>
          Olá, {username}{" "}
          {arrow === 0 ? (
            <S.Icon onClick={() => Change()} src={arrowdown}></S.Icon>
          ) : (
            <S.Icon2 onClick={() => Change()} src={arrowup}></S.Icon2>
          )}
        </S.CreateBtn>
        <ThemeProvider theme={arrow === 0 ? OptionHidden : OptionVisible}>
          <S.OptionsContainer>
            <S.List onClick={Logout}>Sair</S.List>
            <S.Line></S.Line>
          </S.OptionsContainer>
        </ThemeProvider>
      </S.ButtonsNav>
    </S.NavbarDiv>
  );
};
export default Navbar2;
