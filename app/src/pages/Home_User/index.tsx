import * as S from "./style";
import Navbar2 from "components/navbar2/Navbar";
import Footer from "components/footer/footer";
import MenuHorizontal from "components/menuHorizontal/menuHorizontal";
import GameList  from "./components/GameList ";
import { useState } from "react";
import Dashboard from "pages/Dashboard";

const HomeUser = () => {
  // "state" for change between home and dashboard when click the button on navbar.
  const [state,setState] = useState(0);
/* " changeState " its a function inside of Navbar.tsx bringing for us the number 0 and 1 ( depending of button that your click) from " HomeState" and " Dashboard " function.
and " currentState" its a variable for catch the value changed on the functions " HomeState" or " Dashboard ", for finish, " setState" inside "changeState" works changing the "state" for us.*/
// "page" its a simple prop to pass the "state" for navbar component, used on navbar to create the change between " home " and " dashboard " button. 
  return (
    <S.Container>
      <Navbar2 username={"userName"} changeState={currentState => setState(currentState)} page={state}/>
      <MenuHorizontal />
      {state === 0 ? (<GameList/>) : <Dashboard/>}
      <Footer></Footer>
    </S.Container>
  );
};

export default HomeUser;
