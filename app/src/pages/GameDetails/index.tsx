import Footer from "components/footer/footer";
import MenuHorizontal from "components/menuHorizontal/menuHorizontal";
import Navbar2 from "components/navbar2/Navbar";
import { Auth } from "helpers/Auth";
import Dashboard from "pages/Dashboard";
import MobileDashboard from "pages/Dashboard/components/formTypes/mobileDashboard/mobileDashboard";
import GameList from "pages/Home_User/components/GameList ";
import { SetStateAction, useEffect, useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { useMediaQuery } from "react-responsive";
import { useParams } from "react-router-dom";
import { AllGames, useGame } from "services/ServiceGames";
import * as S from "./style";
import starIcon from "../Home_User/Img/Star.svg";
import starHalfIcon from "../Home_User/Img/Star-half.svg";
import starLowIcon from "../Home_User//Img/Star-low.svg";
import { ThemeProvider } from "styled-components";

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

  useEffect(() => {
    GameIdRender();
  }, []);

  // GAME BY ID STATE
  const [game, setGame] = useState<any>([]);

  const GameIdRender = async () => {
    const res = await AllGames.GameById(params.id);
    setGame(res?.data);
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

  if (isAdmin.IsAdmin) {
    return (
      <S.Container>
        <Navbar2
          username={isAdmin.Name}
          changeState={(currentState) => setState(currentState)}
          page={state}
        />
        <S.Iframe></S.Iframe>
        <S.Title>{game.Title}</S.Title>

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

        <StarsLogic number={game.ImdbScore} />
        <S.BtnBox>
          <S.BtnMobile>+ Adicionar</S.BtnMobile>
        </S.BtnBox>

        <S.Line></S.Line>
        <S.Description>{game.Description}</S.Description>
        <S.Line></S.Line>
        <S.Text>Trailer</S.Text>
        <S.Iframe>
          <iframe
            width={"100%"}
            src={`${game.TrailerYouTubeUrl}`}
            title="Trailer de anúncio oficial do Battlefield 2042 (com 2WEI)"
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
            title="Trailer de anúncio oficial do Battlefield 2042 (com 2WEI)"
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

  const isDesktopOrLaptop = useMediaQuery({ query: "(min-width: 999px)" });

  // log out logic

  if (option === "Exit") {
    console.log("exit");
    Auth.logout();
  }

  // Catch the admin role boolean
  const isAdmin = Auth.isAdmin();

  return (
    <S.Container>
      <Navbar2
        username={isAdmin.Name}
        changeState={(currentState) => setState(currentState)}
        page={state}
      />

      {isDesktopOrLaptop && state === 0 ? (
        <GameList />
      ) : (
        <Dashboard role={isAdmin.IsAdmin} />
      )}

      <Footer></Footer>
    </S.Container>
  );
};

const GameDetails = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 999px)" });

  return (
    <QueryClientProvider client={queryClient}>
      {isTabletOrMobile ? <MainHomeUserMobile /> : <MainHomeUserDesktop />}
    </QueryClientProvider>
  );
};

export default GameDetails;
