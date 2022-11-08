import * as S from "./style";
import Navbar2 from "components/navbar2/Navbar";
import Footer from "components/footer/footer";
import MenuHorizontal from "components/menuHorizontal/menuHorizontal";
import GameList from "./components/GameList ";
import { SetStateAction, useState } from "react";
import Dashboard from "pages/Dashboard";
import ProfileForm from "pages/Dashboard/components/formTypes/profile";
import UserForm from "pages/Dashboard/components/formTypes/users";
import GameForm from "pages/Dashboard/components/formTypes/gamesEdit";
import GenreForm from "pages/Dashboard/components/formTypes/genres";
import MobileDashboard from "pages/Dashboard/components/formTypes/mobileDashboard/mobileDashboard";
import { useMediaQuery } from "react-responsive";
import { LocalStorageHelper } from "helpers/LocalStorageHelper";
import { useNavigate } from "react-router-dom";
import { AuthService } from "services/AuthServices";
import { ErrorResponse } from "types/api-types/error";
import { LoginResponse } from "types/api-types/login";
import { User } from "types/api-types/user";
import { LocalStorageKeys } from "types/LocalStorageKeys";
import { RoutePath } from "types/routes";
import { Auth } from "helpers/Auth";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function HomeUser() {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 999px)" });
  return (
    <QueryClientProvider client={queryClient}>
      {isTabletOrMobile ? <MainHomeUserMobile /> : <MainHomeUserDesktop />}
    </QueryClientProvider>
  );
}

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

  // Catch the admin role boolean
  const isAdmin = Auth.isAdmin();

  if (isAdmin.IsAdmin) {
    return (
      <S.Container>
        <Navbar2
          username={"userName"}
          changeState={(currentState) => setState(currentState)}
          page={state}
        />
        <MenuHorizontal
        role={isAdmin.IsAdmin}
          menuState={(optionState: SetStateAction<any>) =>
            setOption(optionState)
          }
          option={option}
        />
        {(() => {
          switch (option) {
            case "Home":
              return <GameList />;
            case "Profiles":
              return <MobileDashboard role={isAdmin.IsAdmin} myOption={option} />;
            case "Games":
              return <MobileDashboard role={isAdmin.IsAdmin} myOption={option} />;
            case "Genres":
              return <MobileDashboard role={isAdmin.IsAdmin} myOption={option} />;
            case "Users":
              return <MobileDashboard role={isAdmin.IsAdmin} myOption={option} />;
            case "Exit":
              return <h2>Log out</h2>;
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
          username={isAdmin.Name}
          changeState={(currentState) => setState(currentState)}
          page={state}
        />
        <MenuHorizontal
        role={isAdmin.IsAdmin}
          menuState={(optionState: SetStateAction<any>) =>
            setOption(optionState)
          }
          option={option}
        />
        {(() => {
          switch (option) {
            case "Home":
              return <GameList />;
            case "Profiles":
              return <MobileDashboard role={isAdmin.IsAdmin} myOption={option} />;
            case "Logout":
              return <MobileDashboard  myOption={"Home"} />;
            default:
              return null;
          }
        })()}

        <Footer></Footer>
      </S.Container>
    )
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
