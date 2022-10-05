import * as S from "./style";
import { useState } from "react";
import styled, { css } from "styled-components";
import OptionSpace from "./components/OptionSpace";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [option, setOption] = useState("");
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

  const genredata = [
    { Nome: "todos generos da api" },
    { Nome: "Guilherme Vieira" },
    { Nome: "Fernando de Souza" },
    { Nome: "Armando santos" },
    { Nome: "Pierre Vigacci" },
  ];
  return (
    <S.Container>
      <Div>
        <Div3>
          <Div4 >
            <Column >
              <Text onClick={() => ThisOption("user")}>Usuários</Text>
            </Column>
            <Column>
              <Text onClick={() => ThisOption("profile")}>Perfis</Text>
            </Column>
            <Column >
              <Text onClick={() => ThisOption("game")}>Games</Text>
            </Column>
            <Column >
              <Text onClick={() => ThisOption("genre")}>Gêneros</Text>
            </Column>
          </Div4>
        </Div3>
      </Div>

      {(() => {
        switch (option) {
          case "user":
            return <OptionSpace name={option} data={data} />;
          case "profile":
            return <OptionSpace name={option} data={profilesdata} />;
          case "game":
            return <OptionSpace name={option} data={gamedata} />;
          case "genre":
            return <OptionSpace name={option} data={genredata} />;
          default:
            return null;
        }
      })()}
    </S.Container>
  );
};

export default Dashboard;

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
