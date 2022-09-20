import * as S from "./style";
import Navbar2 from "components/navbar2/Navbar";
import MainCarousel from "./components/carosel";
import Footer from "components/footer/footer";
import MenuHorizontal from "components/menuHorizontal/menuHorizontal";

const HomeUser = () => {

  return (
    <S.Container>
      <Navbar2/>
      <MenuHorizontal/>
      <S.Topic>Favoritos</S.Topic>
      <MainCarousel></MainCarousel>
      <S.Topic>Terror</S.Topic>
      <MainCarousel></MainCarousel>
      <S.Topic>Aventura</S.Topic>
      <MainCarousel></MainCarousel>
      <S.Topic>Ação</S.Topic>
      <MainCarousel></MainCarousel>
      <Footer></Footer>
     
     
    </S.Container>
  );
};

export default HomeUser;
