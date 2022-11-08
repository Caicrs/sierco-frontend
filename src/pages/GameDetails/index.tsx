import Footer from "components/footer/footer";
import MenuHorizontal from "components/menuHorizontal/menuHorizontal";
import Navbar2 from "components/navbar2/Navbar";
import { Auth } from "helpers/Auth";
import Dashboard from "pages/Dashboard";
import MobileDashboard from "pages/Dashboard/components/formTypes/mobileDashboard/mobileDashboard";
import GameList from "pages/Home_User/components/GameList ";
import { useEffect, useState, useRef } from "react";
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { useMediaQuery } from "react-responsive";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { AllGames, useGame } from "services/ServiceGames";
import * as S from "./style";
import * as D from "./styleDesktop";
import starIcon from "../Home_User/Img/Star.svg";
import starHalfIcon from "../Home_User/Img/Star-half.svg";
import starLowIcon from "../Home_User//Img/Star-low.svg";
import { ThemeProvider } from "styled-components";
import Loader from "pages/profiles/components/loader";
import { AllProfileGames } from "../../services/ServiceProfileGames";
import { AllProfile } from "services/ServiceProfile";

const queryClient = new QueryClient();

const MainHomeUserMobile = () => {
  // "state" for change between home and dashboard when click the button on navbar.
  const [state, setState] = useState(0);
  const [option, setOption] = useState("Home");
  /* " changeState " its a function inside of Navbar.tsx bringing for us the number 0 and 1 ( depending of button that your click) from " HomeState" and " Dashboard " function.
  and " currentState" its a variable for catch the value changed on the functions " HomeState" or " Dashboard ", for finish, " setState" inside "changeState" works changing the "state" for us.*/
  // "page" its a simple prop to pass the "state" for navbar component, used on navbar to create the change between " home " and " dashboard " button.

  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });

  // log out logic

  if (option === "Logout") {
    Auth.logout();
  }

  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    GameIdRender();
    ProfileRender();
  }, []);

  // GAME BY ID STATE
  const [game, setGame] = useState<any>([]);

  const GameIdRender = async () => {
    const res = await AllGames.GameById(params.id);
    setGame(res?.data);
  };

  // Profile STATE
  const [profile, setProfile] = useState<any>([]);

  const ProfileRender = async () => {
    const res = await AllProfile.ProfileById(Auth.profile());
    setProfile(res?.data.ProfileGames);
  };

  let OneStar = {
    gridTemplateColumns: "repeat(1, 1fr)",
  };
  let TwoStar = {
    gridTemplateColumns: "repeat(2, 1fr)",
  };
  let ThreeStar = {
    gridTemplateColumns: "repeat(3, 1fr)",
  };
  let FourStar = {
    gridTemplateColumns: "repeat(4, 1fr)",
  };
  let FiveStar = {
    gridTemplateColumns: "repeat(5, 1fr)",
  };

  const StarsLogic = ({ ...props }: any) => {
    switch (props.number) {
      case 1:
        return (
          <ThemeProvider theme={OneStar}>
            <S.StarsBox>
              <S.StarIcon src={starIcon}></S.StarIcon>
            </S.StarsBox>
          </ThemeProvider>
        );
      case 2:
        return (
          <ThemeProvider theme={TwoStar}>
            <S.StarsBox>
              <S.StarIcon src={starIcon}></S.StarIcon>
              <S.StarIcon src={starIcon}></S.StarIcon>
            </S.StarsBox>
          </ThemeProvider>
        );
      case 3:
        return (
          <ThemeProvider theme={ThreeStar}>
            <S.StarsBox>
              <S.StarIcon src={starIcon}></S.StarIcon>
              <S.StarIcon src={starIcon}></S.StarIcon>
              <S.StarIcon src={starIcon}></S.StarIcon>
            </S.StarsBox>
          </ThemeProvider>
        );
      case 4:
        return (
          <ThemeProvider theme={FourStar}>
            <S.StarsBox>
              <S.StarIcon src={starIcon}></S.StarIcon>
              <S.StarIcon src={starIcon}></S.StarIcon>
              <S.StarIcon src={starIcon}></S.StarIcon>
              <S.StarIcon src={starIcon}></S.StarIcon>
            </S.StarsBox>
          </ThemeProvider>
        );
      case 5:
        return (
          <ThemeProvider theme={FiveStar}>
            <S.StarsBox>
              <S.StarIcon src={starIcon}></S.StarIcon>
              <S.StarIcon src={starIcon}></S.StarIcon>
              <S.StarIcon src={starIcon}></S.StarIcon>
              <S.StarIcon src={starIcon}></S.StarIcon>
              <S.StarIcon src={starIcon}></S.StarIcon>
            </S.StarsBox>
          </ThemeProvider>
        );
      default:
        return (
          <ThemeProvider theme={OneStar}>
            <S.StarsBox>
              <S.StarIcon src={starIcon}></S.StarIcon>
              <S.StarIcon src={starIcon}></S.StarIcon>
            </S.StarsBox>
          </ThemeProvider>
        );
    }
  };

  // Catch the admin role boolean
  const isAdmin = Auth.isAdmin();

  function Favorite(id: string) {
    const data = { Profile: Auth.profile(), Games: id };
    console.log(data);
    AllProfileGames.CreateProfileGames(data);
    refValue.current = true;
    setTimeout(() => navigate(0), 1000 * 1);
  }

  function RemoveFavorite(id: string) {
    profile.map((data: any) => {
      if (data.GamesId === id) {
        AllProfileGames.DeleteProfileGames(data.id);
        refValue.current = false;
        setTimeout(() => navigate(0), 1000 * 1);
      }
    });
  }

  const refValue = React.useRef(false);

  profile?.map((data: any) => {
    if (data.GamesId === game.id) {
      refValue.current = true;
    }
  });

  if (isAdmin.IsAdmin) {
    return (
      <S.Container>
        <Navbar2
          username={isAdmin.Name}
          changeState={(currentState) => setState(currentState)}
          page={state}
        />
        <S.ImgBox>
          <S.Img src={game.CoverImageUrl}></S.Img>
        </S.ImgBox>
        <S.Title>{game.Title}</S.Title>
        {game.GamesGeneros?.map((genre: any) => (
          <S.Genre>{genre.Generos.Name}</S.Genre>
        ))}

        <StarsLogic number={game.ImdbScore} />
        <S.BtnBox>
          <S.BtnMobile
            onClick={() =>
              refValue.current ? RemoveFavorite(game.id) : Favorite(game.id)
            }
          >
            {refValue.current ? "Remover" : "+ Favoritar"}
          </S.BtnMobile>
        </S.BtnBox>
        <S.Line></S.Line>
        <S.Description>{game.Description}</S.Description>
        <S.Line></S.Line>
        <S.Text>Trailer</S.Text>
        <S.Iframe>
          <iframe
            width={"100%"}
            src={`${game.TrailerYouTubeUrl}`}
            title=""
            frameBorder={0}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </S.Iframe>
        <S.Line></S.Line>
        <S.Text>Gameplay</S.Text>
        <S.Iframe>
          <iframe
            width={"100%"}
            src={`${game.GameplayYouTubeUrl}`}
            title=""
            frameBorder={0}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </S.Iframe>
        <Footer></Footer>
      </S.Container>
    );
  } else {
    return (
      <S.Container>
        <Navbar2
          username={isAdmin.Name}
          changeState={(currentState) => setState(currentState)}
          page={state}
        />

        <S.ImgBox>
          <S.Img src={game.CoverImageUrl}></S.Img>
        </S.ImgBox>
        <S.Title>{game.Title}</S.Title>
        <S.DualText>
          {game.GamesGeneros?.map((genre: any) => (
            <S.Genre>{genre.Generos.Name}</S.Genre>
          ))}
        </S.DualText>
        <StarsLogic number={game.ImdbScore} />
        <S.BtnBox>
          <S.BtnMobile
            onClick={() =>
              refValue.current ? RemoveFavorite(game.id) : Favorite(game.id)
            }
          >
            {refValue.current ? "Remover" : "+ Favoritar"}
          </S.BtnMobile>
        </S.BtnBox>

        <S.Line></S.Line>
        <S.Description>{game.Description}</S.Description>
        <S.Line></S.Line>
        <S.Text>Trailer</S.Text>
        <S.Iframe>
          <iframe
            width={"100%"}
            src={`${game.TrailerYouTubeUrl}`}
            title=""
            frameBorder={0}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </S.Iframe>

        <S.Line></S.Line>
        <S.Text>Gameplay</S.Text>
        <S.Iframe>
          <iframe
            width={"100%"}
            src={`${game.GameplayYouTubeUrl}`}
            title=""
            frameBorder={0}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </S.Iframe>

        <Footer></Footer>
      </S.Container>
    );
  }
};

const MainHomeUserDesktop = () => {
  // "state" for change between home and dashboard when click the button on navbar.
  const [state, setState] = useState(0);
  const [option, setOption] = useState("Home");
  /* " changeState " its a function inside of Navbar.tsx bringing for us the number 0 and 1 ( depending of button that your click) from " HomeState" and " Dashboard " function.
 and " currentState" its a variable for catch the value changed on the functions " HomeState" or " Dashboard ", for finish, " setState" inside "changeState" works changing the "state" for us.*/
  // "page" its a simple prop to pass the "state" for navbar component, used on navbar to create the change between " home " and " dashboard " button.

  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });

  // log out logic

  if (option === "Logout") {
    Auth.logout();
  }

  const params = useParams();
  const navigate = useNavigate();
  const [stateFav, setStateFav] = useState<boolean>(false);
  // GAME BY ID STATE
  const [game, setGame] = useState<any>([]);

  useEffect(() => {
    const GameIdRender = async () => {
      const res = await AllGames.GameById(params.id);
      setGame(res?.data);
    };
    GameIdRender();
    ProfileRender();
  }, []);

  // Profile STATE
  const [profile, setProfile] = useState<any>([]);

  const ProfileRender = async () => {
    const res = await AllProfile.ProfileById(Auth.profile());
    setProfile(res?.data.ProfileGames);
  };

  let OneStar = {
    gridTemplateColumns: "repeat(1, 1fr)",
  };
  let TwoStar = {
    gridTemplateColumns: "repeat(2, 1fr)",
  };
  let ThreeStar = {
    gridTemplateColumns: "repeat(3, 1fr)",
  };
  let FourStar = {
    gridTemplateColumns: "repeat(4, 1fr)",
  };
  let FiveStar = {
    gridTemplateColumns: "repeat(5, 1fr)",
  };

  const StarsLogic = ({ ...props }: any) => {
    switch (props.number) {
      case 1:
        return (
          <ThemeProvider theme={OneStar}>
            <S.StarsBox>
              <S.StarIcon src={starIcon}></S.StarIcon>
            </S.StarsBox>
          </ThemeProvider>
        );
      case 2:
        return (
          <ThemeProvider theme={TwoStar}>
            <S.StarsBox>
              <S.StarIcon src={starIcon}></S.StarIcon>
              <S.StarIcon src={starIcon}></S.StarIcon>
            </S.StarsBox>
          </ThemeProvider>
        );
      case 3:
        return (
          <ThemeProvider theme={ThreeStar}>
            <S.StarsBox>
              <S.StarIcon src={starIcon}></S.StarIcon>
              <S.StarIcon src={starIcon}></S.StarIcon>
              <S.StarIcon src={starIcon}></S.StarIcon>
            </S.StarsBox>
          </ThemeProvider>
        );
      case 4:
        return (
          <ThemeProvider theme={FourStar}>
            <S.StarsBox>
              <S.StarIcon src={starIcon}></S.StarIcon>
              <S.StarIcon src={starIcon}></S.StarIcon>
              <S.StarIcon src={starIcon}></S.StarIcon>
              <S.StarIcon src={starIcon}></S.StarIcon>
            </S.StarsBox>
          </ThemeProvider>
        );
      case 5:
        return (
          <ThemeProvider theme={FiveStar}>
            <S.StarsBox>
              <S.StarIcon src={starIcon}></S.StarIcon>
              <S.StarIcon src={starIcon}></S.StarIcon>
              <S.StarIcon src={starIcon}></S.StarIcon>
              <S.StarIcon src={starIcon}></S.StarIcon>
              <S.StarIcon src={starIcon}></S.StarIcon>
            </S.StarsBox>
          </ThemeProvider>
        );
      default:
        return (
          <ThemeProvider theme={OneStar}>
            <S.StarsBox>
              <S.StarIcon src={starIcon}></S.StarIcon>
              <S.StarIcon src={starIcon}></S.StarIcon>
            </S.StarsBox>
          </ThemeProvider>
        );
    }
  };

  function Favorite(id: string) {
    const data = { Profile: Auth.profile(), Games: id };
    console.log(data);
    AllProfileGames.CreateProfileGames(data);
    refValue.current = true;
    setTimeout(() => navigate(0), 1000 * 1);
  }

  function RemoveFavorite(id: string) {
    profile.map((data: any) => {
      if (data.GamesId === id) {
        AllProfileGames.DeleteProfileGames(data.id);
        refValue.current = false;
        setTimeout(() => navigate(0), 1000 * 1);
      }
    });
  }

  const refValue = React.useRef(false);

  profile?.map((data: any) => {
    if (data.GamesId === game.id) {
      refValue.current = true;
    }
  });

  // Catch the admin role boolean
  const isAdmin = Auth.isAdmin();
  if (isAdmin.IsAdmin) {
    return (
      <D.Container>
        <Navbar2
          username={isAdmin.Name}
          changeState={(currentState) => setState(currentState)}
          page={state}
        />

        <D.FirstBox>
          <D.Left>
            <D.ImgBox>
              <D.Img src={game.CoverImageUrl}></D.Img>
            </D.ImgBox>
          </D.Left>
          <D.Right>
            <D.Title>{game.Title}</D.Title>
            <D.DetailsText>{game.Description}</D.DetailsText>
            <StarsLogic number={game.ImdbScore} />
            <D.DualText>
              {game ||
                game.GamesGeneros.map((genre: any) => (
                  <D.Genre>{genre.Generos.Name}</D.Genre>
                ))}
              <D.Year>{game.Year}</D.Year>
            </D.DualText>
            <D.BtnBox>
              <D.BtnMobile
                onClick={() =>
                  refValue.current ? RemoveFavorite(game.id) : Favorite(game.id)
                }
              >
                {refValue.current ? "Remover" : "+ Favoritar"}
              </D.BtnMobile>
            </D.BtnBox>
          </D.Right>
        </D.FirstBox>
        <D.Line></D.Line>
        <D.DetailsBox>
          <D.Details>Official Trailer</D.Details>
          <D.Iframe
            width={"100%"}
            height={"100%"}
            src={`${game.TrailerYouTubeUrl}`}
            title=""
            frameBorder={0}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></D.Iframe>
        </D.DetailsBox>
        <D.Line></D.Line>
        <D.DetailsBox>
          <D.Details>Gameplay</D.Details>
          <D.Iframe
            width={"100%"}
            height={"100%"}
            src={`${game.GameplayYouTubeUrl}`}
            title=""
            frameBorder={0}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></D.Iframe>
        </D.DetailsBox>
      </D.Container>
    );
  } else {
    return (
      <D.Container>
        <Navbar2
          username={isAdmin.Name}
          changeState={(currentState) => setState(currentState)}
          page={state}
        />

        <D.FirstBox>
          <D.Left>
            <D.ImgBox>
              <D.Img src={game.CoverImageUrl}></D.Img>
            </D.ImgBox>
          </D.Left>
          <D.Right>
            <D.Title>{game.Title}</D.Title>
            <D.DetailsText>{game.Description}</D.DetailsText>
            <StarsLogic number={game.ImdbScore} />
            <D.DualText>
              {game.GamesGeneros?.map((genre: any) => (
                <D.Genre>{genre.Generos.Name}</D.Genre>
              ))}
              <D.Year>{game.Year}</D.Year>
            </D.DualText>
            <D.BtnBox>
              <D.BtnMobile
                onClick={() =>
                  refValue.current ? RemoveFavorite(game.id) : Favorite(game.id)
                }
              >
                {refValue.current ? "Remover" : "+ Favoritar"}
              </D.BtnMobile>
            </D.BtnBox>
          </D.Right>
        </D.FirstBox>
        <D.Line></D.Line>
        <D.DetailsBox>
          <D.Details>Official Trailer</D.Details>
          <D.Iframe
            width={"100%"}
            height={"100%"}
            src={`${game.TrailerYouTubeUrl}`}
            title=""
            frameBorder={0}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></D.Iframe>
        </D.DetailsBox>
        <D.Line></D.Line>
        <D.DetailsBox>
          <D.Details>Gameplay</D.Details>
          <D.Iframe
            width={"100%"}
            height={"100%"}
            src={`${game.GameplayYouTubeUrl}`}
            title=""
            frameBorder={0}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></D.Iframe>
        </D.DetailsBox>
      </D.Container>
    );
  }
};

const GameDetails = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 999px)" });
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setIsLoading(false), 2000);
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <QueryClientProvider client={queryClient}>
          {isTabletOrMobile ? <MainHomeUserMobile /> : <MainHomeUserDesktop />}
        </QueryClientProvider>
      )}
    </>
  );
};

export default React.memo(GameDetails);
