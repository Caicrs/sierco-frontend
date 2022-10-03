import Carousel from "react-elastic-carousel";
import * as S from "./style";
import "./styles.css";
import starIcon from "../Img/Star.svg";
import starHalfIcon from "../Img/Star-half.svg";
import starLowIcon from "../Img/Star-low.svg";

const breakPoints = [
  { width: 1, itemsToShow: 2 },
  { width: 550, itemsToShow: 4 },
  { width: 768, itemsToShow: 4 },
  { width: 1200, itemsToShow: 5 },
];

function MainCarousel({ ...props }) {
  return (
    <>
      <S.ContainerCarousel>
        <Carousel
          className="container"
          outerSpacing={-10}
          transitionMs={300}
          showArrows={false}
          breakPoints={breakPoints}
        >
          {props.gamesProps.map((game) => (
            <S.Card key={game.id}>
              <S.Image draggable={false} src={game.CoverImageUrl}></S.Image>
              <S.Title>{game.Title}</S.Title>
              <S.SubTitleContainer>
                <S.SubTitle>Terror / Aventura</S.SubTitle>
                <S.Year>{game.Year}</S.Year>
              </S.SubTitleContainer>
              <S.Stars>
                <S.StarIcon src={starIcon} />
                <S.StarIcon src={starIcon} />
                <S.StarIcon src={starIcon} />
                <S.StarIcon src={starHalfIcon} />
                <S.StarIcon src={starLowIcon} />
              </S.Stars>
            </S.Card>
          ))}
        </Carousel>
      </S.ContainerCarousel>
    </>
  );
}

export default MainCarousel;
