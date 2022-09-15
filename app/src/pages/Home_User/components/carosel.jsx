import Carousel from "react-elastic-carousel";
import * as S from "./style";
import "./styles.css";
import starIcon from "../Img/Star.svg";
import starHalfIcon from "../Img/Star-half.svg";
import starLowIcon from "../Img/Star-low.svg";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 5 },
];

const data = [1, 2, 3, 4, 5, 6, 7, 8];

function MainCarousel() {
  return (
    <>
      <S.ContainerCarousel>
        <Carousel transitionMs={10} showArrows={false} breakPoints={breakPoints}>
          {data.map((i) => (
            <S.Card key={i}>
              <S.Image draggable={false} src="https://cdn.clickwallpapers.net/images/clickwallpapers-game-resident-evil-4-classic-1920x1080-img7.jpg"></S.Image>
              <S.Title>#{i}| Resident Evil 4</S.Title>
              <S.SubTitleContainer>
                <S.SubTitle>Terror / Ação</S.SubTitle>
                <S.Year>2010</S.Year>
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
