import Carousel from "react-elastic-carousel";
import * as S from "./style";
import api from "api/gamestock";
import "./styles.css";
import starIcon from "../Img/Star.svg";
import starHalfIcon from "../Img/Star-half.svg";
import starLowIcon from "../Img/Star-low.svg";
import  Card  from "./Card";

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
            <Card key={game.id} props={game}></Card>
          ))}
        </Carousel>
      </S.ContainerCarousel>
    </>
  );
}

export default MainCarousel;
