import * as S from "./style";
import { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import OptionSpace from "./components/OptionSpace";
import { Link } from "react-router-dom";
import { Genrers, GenrerType } from "services/ServiceGenre";
import { AllGames, useGame, miniListGames } from "services/ServiceGames";
import { AllProfile } from "services/ServiceProfile";
import { Profile } from "types/api-types/profile";
import {miniUser} from "types/api-types/user";
import { AllUsers } from "services/ServiceUser";
import { Auth } from "helpers/Auth";

const Dashboard = (isAdmin: any) => {

  const [option, setOption] = useState("");
  const ThisOption = (state: string) => {
    setOption(state);
  };

  useEffect(() => {
    GenresRender();
    GamesRender();
    ProfilesRender();
    UsersRender();
  }, []);

    // GENRE STATE
    const [genre, setGenre] = useState<GenrerType[]>([{id: "",Name: "",},]);
  const GenresRender = async () => {
    const res = await Genrers.AllGenres();
    setGenre(res?.data);
  };

  // GAMES STATE
  const [games, setGames] = useState<miniListGames[]>([{ id: "", Title: "" }]);
  const GamesRender = async () => {
    const allGames = await AllGames.GamesAll();
    setGames(allGames?.data);
  };

  // PROFILES STATE
  const id = Auth.user().id;
  const [profile, setProfile] = useState<Profile[]>([{ Title: "", ImageUrl: "", UserId:"" }]);
  const ProfilesRender = async () => {
    const res = await AllProfile.ProfilesByUser(id);
    setProfile(res?.data.Profiles);
  };

  console.log(profile)

  // USERS STATE
  const [users, setUsers] = useState<miniUser[]>([{ id: "",Name: ""}]);
  const UsersRender = async () => {
    const allUsers = await AllUsers.UsersAll();
    setUsers(allUsers?.data);
  };


  if (isAdmin.role) {
    return (
      <S.Container>
        <Div>
          <Div3>
            <Div4>
              <Column>
                <Text onClick={() => ThisOption("Users")}>Usuários</Text>
              </Column>
              <Column>
                <Text onClick={() => ThisOption("Profiles")}>Perfis</Text>
              </Column>
              <Column>
                <Text onClick={() => ThisOption("Games")}>Games</Text>
              </Column>
              <Column>
                <Text onClick={() => ThisOption("Genres")}>Gêneros</Text>
              </Column>
            </Div4>
          </Div3>
        </Div>

        {(() => {
          switch (option) {
            case "Users":
              return <OptionSpace name={option} data={users} />;
            case "Profiles":
              return <OptionSpace name={option} data={profile} />;
            case "Games":
              return <OptionSpace name={option} data={games} />;
            case "Genres":
              return <OptionSpace name={option} data={genre} />;
            default:
              return null;
          }
        })()}
      </S.Container>
    );
  } else {
    return (
      <S.Container>
        <Div>
          <Div3>
            <Div4>
              <Column>
                <Text onClick={() => ThisOption("Profiles")}>Perfis</Text>
              </Column>
            </Div4>
          </Div3>
        </Div>

        {(() => {
          switch (option) {
            case "Profiles":
              return <OptionSpace name={option} data={profile} />;
            default:
              return null;
          }
        })()}
      </S.Container>
    );
  }
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
    display: none;
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
