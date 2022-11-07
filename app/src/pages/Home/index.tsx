import * as S from "./style";
import Navbar from "components/navbar/Navbar";
import Session1 from "./components/session_1";
import Footer from "../../components/footer/footer";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { RoutePath } from "types/routes";

const Home = () => {
  const navigate = useNavigate()
  return (
    <S.Home>
      <motion.div 
      animate={{ opacity: [0,1],y:[-100,0]}}
      transition={{delay:1.5}}
      >
        <Navbar></Navbar>
        <Session1></Session1>
        <S.MobileButtons>
          <S.BtnMobile onClick={() => navigate(RoutePath.REGISTER)}>Criar Conta</S.BtnMobile>
          <S.H3>Ou</S.H3>
          <S.TextContainer>
            <S.Text to={"/login"}>
              Já possui uma conta ? <strong>Entrar</strong>
            </S.Text>
          </S.TextContainer>
        </S.MobileButtons>
        <Footer></Footer>
      </motion.div>
    </S.Home>
  );
};

export default Home;
