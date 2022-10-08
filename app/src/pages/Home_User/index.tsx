import * as S from "./style";
import Navbar2 from "components/navbar2/Navbar";
import Footer from "components/footer/footer";
import MenuHorizontal from "components/menuHorizontal/menuHorizontal";
import GameList from "./components/GameList ";
import { SetStateAction, useState } from "react";
import Dashboard from "pages/Dashboard";
import ProfileForm from "pages/Dashboard/components/formTypes/profile";
import UserForm from "pages/Dashboard/components/formTypes/users";
import GameForm from "pages/Dashboard/components/formTypes/games";
import GenreForm from "pages/Dashboard/components/formTypes/genres";
import MobileDashboard from "pages/Dashboard/components/formTypes/mobileDashboard/mobileDashboard";
import { useMediaQuery } from "react-responsive";

const HomeUser = () => {
  // "state" for change between home and dashboard when click the button on navbar.
  const [state, setState] = useState(0);
  const [option, setOption] = useState("Home");
  /* " changeState " its a function inside of Navbar.tsx bringing for us the number 0 and 1 ( depending of button that your click) from " HomeState" and " Dashboard " function.
and " currentState" its a variable for catch the value changed on the functions " HomeState" or " Dashboard ", for finish, " setState" inside "changeState" works changing the "state" for us.*/
  // "page" its a simple prop to pass the "state" for navbar component, used on navbar to create the change between " home " and " dashboard " button.

  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  const isBigScreen = useMediaQuery({ query: "(min-width: 1824px)" });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  if (isTabletOrMobile) {
    return (
      <S.Container>
        <Navbar2
          username={"userName"}
          changeState={(currentState) => setState(currentState)}
          page={state}
        />
        <MenuHorizontal
          menuState={(optionState: SetStateAction<string>) =>
            setOption(optionState)
          }
          option={option}
        />

        {(() => {
          switch (option) {
            case "Home":
              return <GameList />;
            case "Profiles":
              return <MobileDashboard myOption={option} />;
            case "Games":
              return <MobileDashboard myOption={option} />;
            case "Genres":
              return <MobileDashboard myOption={option} />;
            case "Users":
              return <MobileDashboard myOption={option} />;
            case "Exit":
              return <h2>log out</h2>;
            default:
              return null;
          }
        })()}

        <Footer></Footer>
      </S.Container>
    );
  } else {
    return (
      <S.Container>
        <Navbar2
          username={"userName"}
          changeState={(currentState) => setState(currentState)}
          page={state}
        />

        {isDesktopOrLaptop && state === 0 ? <GameList /> : <Dashboard />}

        <Footer></Footer>
      </S.Container>
    );
  }
};

export default HomeUser;
