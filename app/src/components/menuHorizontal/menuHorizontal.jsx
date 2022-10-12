import { useState } from "react";
import Carousel, { consts } from "react-elastic-carousel";
import * as S from "./style";
import "./styles.css";
import leftArrow from "./img/arrow/leftArrow.svg";
import rightArrow from "./img/arrow/rightArrow.svg";
import { ThemeProvider } from "styled-components";
import { motion } from "framer-motion";

function MenuHorizontal({ option, menuState,role }) {
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

  function Change(response) {
    switch (response) {
      case "Home":
        return menuState("Home");
      case "Profiles":
        return menuState("Profiles");
      case "Games":
        return menuState("Games");
      case "Genres":
        return menuState("Genres");
        case "Users":
        return menuState("Users");
        case "Logout":
        return menuState("Logout");
      default:
        return "Home";
    }
  }

  let OptionVisible = {
    opacity: 1,
  };

  let OptionHidden = {
    opacity: 0.25,
  };

  if(role){
    return (
      <S.Container>
        <Carousel
          renderArrow={myArrow}
          className="carousel"
          transitionMs={300}
          itemsToShow={2}
        >
          <ThemeProvider theme={option === "Home" ? OptionVisible : OptionHidden}>
            <S.MenuText onClick={() => Change("Home")}>Home</S.MenuText>
          </ThemeProvider>
          <ThemeProvider
            theme={option === "Profiles" ? OptionVisible : OptionHidden}
          >
            <S.MenuText onClick={() => Change("Profiles")}>Profiles</S.MenuText>
          </ThemeProvider>
          <ThemeProvider
            theme={option === "Genres" ? OptionVisible : OptionHidden}
          >
            <S.MenuText onClick={() => Change("Genres")}>Genres</S.MenuText>
          </ThemeProvider>
          <ThemeProvider
            theme={option === "Games" ? OptionVisible : OptionHidden}
          >
            <S.MenuText onClick={() => Change("Games")}>Games</S.MenuText>
          </ThemeProvider>
           <ThemeProvider
            theme={option === "Users" ? OptionVisible : OptionHidden}
          >
            <S.MenuText onClick={() => Change("Users")}>Users</S.MenuText>
          </ThemeProvider>
          <ThemeProvider theme={option === "Logout" ? OptionVisible : OptionHidden}>
            <S.MenuText onClick={() => Change("Logout")}>Logout</S.MenuText>
          </ThemeProvider>
        </Carousel>
      </S.Container>
    );
  }
else{
  return (
    <S.Container>
      <Carousel
        renderArrow={myArrow}
        className="carousel"
        transitionMs={300}
        itemsToShow={2}
      >
        <ThemeProvider theme={option === "Home" ? OptionVisible : OptionHidden}>
          <S.MenuText onClick={() => Change("Home")}>Home</S.MenuText>
        </ThemeProvider>
        <ThemeProvider
          theme={option === "Profiles" ? OptionVisible : OptionHidden}
        >
          <S.MenuText onClick={() => Change("Profiles")}>Profiles</S.MenuText>
        </ThemeProvider>
        <ThemeProvider theme={option === "Logout" ? OptionVisible : OptionHidden}>
          <S.MenuText onClick={() => Change("Logout")}>Logout</S.MenuText>
        </ThemeProvider>
      </Carousel>
    </S.Container>
  );
}
  
}
export default MenuHorizontal;
