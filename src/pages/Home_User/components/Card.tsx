import * as S from "./style";
import {Link} from "react-router-dom"
import starIcon from "../Img/Star.svg";
import starHalfIcon from "../Img/Star-half.svg";
import starLowIcon from "../Img/Star-low.svg";
import api from "api/gamestock";



const Card = ({props}:any) => {

  return (
    <>
    <Link to={`game/${props.id}`}>
    <S.Card key={props.id} >
      <S.Image draggable={false} src={props.CoverImageUrl}></S.Image>
      <S.Title>{props.Title}</S.Title>
      <S.SubTitleContainer>
        <S.SubTitle>Terror / Aventura</S.SubTitle>
        <S.Year>{props.Year}</S.Year>
      </S.SubTitleContainer>
      <S.Stars>
        <S.StarIcon src={starIcon} />
        <S.StarIcon src={starIcon} />
        <S.StarIcon src={starIcon} />
        <S.StarIcon src={starHalfIcon} />
        <S.StarIcon src={starLowIcon} />
      </S.Stars>
    </S.Card>
    </Link>
    </>
  );
};

export default Card;
