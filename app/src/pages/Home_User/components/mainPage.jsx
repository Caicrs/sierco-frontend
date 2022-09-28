import * as S from "../style";
import MainCarousel from "../components/carosel";

const MainPage = () => {
    return(
        <>
        <S.Topic>Favoritos</S.Topic>
        <MainCarousel></MainCarousel>
        <S.Topic>Terror</S.Topic>
        <MainCarousel></MainCarousel>
        <S.Topic>Aventura</S.Topic>
        <MainCarousel></MainCarousel>
        <S.Topic>Ação</S.Topic>
        <MainCarousel></MainCarousel>
        </>
        
    )
}

export default MainPage;