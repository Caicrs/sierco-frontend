import * as S from "../style";
import { useEffect, useState, useCallback } from "react";
import MainCarousel from "./carosel";
import {AllGames,useGame} from "../../../services/ServiceGames"

const GameList = () => {
  const [games, setGames] = useState<useGame[]>([
    {
      id: "",
      Title: "",
      CoverImageUrl: "",
      Description: "",
      Year: 0,
      ImdbScore: 0,
      TrailerYoutubeUrl: "",
      GameplayYoutubeUrl: "",
    },
  ]);

    useEffect(() => {
    GamesRender()
  }, []);

  const GamesRender = async () => {
    const res = await AllGames.GamesAll();
    setGames(res?.data);
  };


  return (
    <>
      <S.Topic>Favoritos</S.Topic>
      <MainCarousel gamesProps={games}></MainCarousel>
      <S.Topic>Ação</S.Topic>
      <MainCarousel gamesProps={games}></MainCarousel>
      <S.Topic>Aventura</S.Topic>
      <MainCarousel gamesProps={games}></MainCarousel>
      <S.Topic>Terror</S.Topic>
      <MainCarousel gamesProps={games}></MainCarousel>
    </>
  );
};

export default GameList;
