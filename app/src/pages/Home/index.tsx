import * as S from "./style";
import Navbar from "components/navbar/Navbar";
import Session1 from "./components/session_1";
import Footer from "../../components/footer/footer";

const Home = () => {
  return (
    <S.Home>
      <Navbar></Navbar>
      <Session1></Session1>
      <S.MobileButtons>
        <S.BtnMobile>Criar Conta</S.BtnMobile>
        <S.H3>Ou</S.H3>
        <S.TextContainer>
          <S.Text to={"/login"}>
            Já possui uma conta ? <strong>Entrar</strong>
          </S.Text>
        </S.TextContainer>
      </S.MobileButtons>
      <Footer></Footer>
    </S.Home>
  );
};

export default Home;
