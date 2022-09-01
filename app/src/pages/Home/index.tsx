import * as S from "./style";
import Navbar from "components/navbar/Navbar";
import Session1 from "./components/session_1";

const Home = () => {
  return (
    <S.Home>
      <Navbar></Navbar>
      <Session1></Session1>
    </S.Home>
  );
};

export default Home;
