import { useState} from "react";
import Carousel, { consts } from "react-elastic-carousel";
import * as S from "./style";
import "./styles.css";
import leftArrow from "./img/arrow/leftArrow.svg";
import rightArrow from "./img/arrow/rightArrow.svg";
import { ThemeProvider } from "styled-components";
import { motion } from "framer-motion";

function MenuHorizontal() {
  function myArrow({ type, onClick, isEdge }) {
    const pointer =
      type === consts.PREV ? (
        <S.Icon src={leftArrow} />
      ) : (
        <S.Icon src={rightArrow} />
      );
    return (
      <S.Button onClick={onClick} disabled={isEdge}>
        {pointer}
      </S.Button>
    );
  }

  const [state, dispatch] = useState("Home");


  let OptionVisible = {
    opacity: 1 ,

  };

  let OptionHidden = {
    opacity: 0.25 ,
  };
console.log(state)
  return (
    <S.Container>
      
      <Carousel
        renderArrow={myArrow}
        className="carousel"
        transitionMs={300}
        itemsToShow={2}
      >
        <ThemeProvider theme={state === "Home" ? OptionVisible : OptionHidden}>
          <S.MenuText onClick={() => dispatch("Home")}>Home</S.MenuText>  
        </ThemeProvider>
        <ThemeProvider theme={state === "Dashboard" ? OptionVisible : OptionHidden}>
          <S.MenuText onClick={() => dispatch("Dashboard")}>Dashboard</S.MenuText>
        </ThemeProvider>
        <ThemeProvider theme={state === "Favoritos" ? OptionVisible : OptionHidden}>
          <S.MenuText onClick={() => dispatch("Favoritos")}>Favoritos</S.MenuText>
        </ThemeProvider>
        <ThemeProvider theme={state === "Sair" ? OptionVisible : OptionHidden}>
          <S.MenuText onClick={() => dispatch("Sair")}>Sair</S.MenuText>
        </ThemeProvider>
      </Carousel>
    </S.Container>
  );
}
export default MenuHorizontal;
