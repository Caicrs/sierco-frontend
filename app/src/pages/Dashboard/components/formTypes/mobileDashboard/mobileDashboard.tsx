import * as S from "../../../style";
import { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import OptionSpace from "../../OptionSpace";
import { Link } from "react-router-dom";
import {Genrers,GenrerType} from "services/ServiceGenre"

interface Mobile {
    myOption:string;
}

const MobileDashboard = ({myOption}:Mobile) => {
  const [option, setOption] = useState("");
  
  const [genre, setGenre] = useState<GenrerType[]>([
    {
      id:"",
      Name:""
    }
  ])

  useEffect(() => {
    GenresRender()
  }, []);

  const GenresRender = async () => {
    const res = await Genrers.AllGenres();
    setGenre(res?.data);
  };


  const ThisOption = (state: string) => {
    setOption(state);
  };

  const data = [
    { Nome: "Todos usuarios aqui" },
    { Nome: "Guilherme Vieira" },
    { Nome: "Fernando de Souza" },
    { Nome: "Armando santos" },
    { Nome: "Pierre Vigacci" },
  ];

  const profilesdata = [
    { Nome: "Eu" },
    { Nome: "Guilherminho" },
    { Nome: "El maradona" },
    { Nome: "Relampago marquinhos" },
    { Nome: "Mais rapido de totti itali" },
  ];

  const gamedata = [
    { Nome: "todos os jogos da api" },
  ];

  return (
    <S.Container>

      {(() => {
        switch (myOption) {
          case "Users":
            return <OptionSpace name={myOption} data={data} />;
          case "Profiles":
            return <OptionSpace name={myOption} data={profilesdata} />;
          case "Games":
            return <OptionSpace name={myOption} data={gamedata} />;
          case "Genres":
            return <OptionSpace name={myOption} data={gamedata} />;
          default:
            return null;
        }
      })()}
    </S.Container>
  );
};

export default MobileDashboard;

const mobile: string = "768px";
const desktop: string = "1024px";
const tablet: string = "825px";

const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 50px 5rem 50px 1rem;
  @media (max-width: 999px) {
    padding: 0 2rem 1rem 2rem;
    display:none;
    background: red;
  }
  // DESKTOP
  @media (min-width: ${mobile}) {
    padding: 50px 5rem 50px 5rem;
  }
`;

const Div2 = styled.div`
  max-width: 1253px;
  color: rgba(255, 255, 255, 1);
  font-size: 24px;
  letter-spacing: 0%;
  text-align: left;
  font-family: "Sora", sans-serif;
`;

const Div3 = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100%;
  align-self: stretch;
  width: 100vw;

`;

const Div4 = styled.div`
  box-sizing: border-box;
  display: grid;
  width: 100%;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 5rem;
  padding: 0 1rem 0 1rem;
  @media (max-width: 999px) {
    display: block;
    padding: 0;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  width: 100%;
`;

const Text = styled.div`
  ${({ theme }) => css`
    display: flex;
    background-color: ${theme.colors.baseBg2};
    flex-direction: column;
    position: relative;
    margin-top: 20px;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 10px;
    padding-right: 10px;
    text-align: center;
    border-radius: 0.25rem;
    color: white;
    transition: 0.3s;
    cursor: pointer;
    :hover {
      -webkit-box-shadow: 0px 0px 12px 3px rgba(0, 0, 0, 0.38);
      box-shadow: 0px 0px 12px 3px rgba(0, 0, 0, 0.38);
    }
    @media (max-width: 999px) {
      box-sizing: border-box;
    }
  `}
`;

const TextLink = styled(Link)`
  text-decoration: none;
  color: white;
`;
