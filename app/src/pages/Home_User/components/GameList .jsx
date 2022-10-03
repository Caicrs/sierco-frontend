import * as S from "../style";
import { useEffect, useState, useCallback } from "react";
import MainCarousel from "./carosel";
import api from "../../../api/gamestock";

const GameList = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    const fetchGames = async () => {
      api
        .get("/games")
        .then(function (response) {
          // handle success
          setGames(response.data)
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .then(function () {
          // always executed
        });
    };
    fetchGames();
  }, []);

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
