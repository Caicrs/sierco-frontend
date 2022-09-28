import * as S from "./style";
import Navbar from "components/navbar/Navbar";
import Footer from "components/footer/footer";
import Form from "./test";

const GamesAdmin = () => {
  return (
    <S.Container>
      <Navbar />
      <Form/>
      <Footer/>
    </S.Container>
  );
};

export default GamesAdmin;
