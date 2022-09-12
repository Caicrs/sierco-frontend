import * as S from "./style";
import Navbar2 from "components/navbar2/Navbar";
import starIcon from "./Img/Star.svg";
import starHalfIcon from "./Img/Star-half.svg";
import starLowIcon from "./Img/Star-low.svg";
import { useState, useEffect } from "react";

const HomeUser = () => {
  return (
    <S.Container>
      <Navbar2></Navbar2>
      <S.Topic>Favoritos</S.Topic>
      <S.HorizontalList>
        <S.Card>
          <S.Image src="https://cdn.clickwallpapers.net/images/clickwallpapers-game-resident-evil-4-classic-1920x1080-img7.jpg"></S.Image>
          <S.Title>Resident Evil 4</S.Title>
          <S.SubTitleContainer>
            <S.SubTitle>Terror / Ação</S.SubTitle>
            <S.Year>2010</S.Year>
          </S.SubTitleContainer>
          <S.Stars>
            <S.StarIcon src={starIcon}/>
            <S.StarIcon src={starIcon}/>
            <S.StarIcon src={starIcon}/>
            <S.StarIcon src={starHalfIcon}/>
            <S.StarIcon src={starLowIcon}/>
          </S.Stars>
        </S.Card>
        <S.Card>
          <S.Image src="https://cdn.clickwallpapers.net/images/clickwallpapers-game-resident-evil-4-classic-1920x1080-img7.jpg"></S.Image>
          <S.Title>Resident Evil 4</S.Title>
          <S.SubTitleContainer>
            <S.SubTitle>Terror / Ação</S.SubTitle>
            <S.Year>2010</S.Year>
          </S.SubTitleContainer>
          <S.Stars>
            <S.StarIcon src={starIcon}/>
            <S.StarIcon src={starIcon}/>
            <S.StarIcon src={starIcon}/>
            <S.StarIcon src={starHalfIcon}/>
            <S.StarIcon src={starLowIcon}/>
          </S.Stars>
        </S.Card>
        <S.Card>
          <S.Image src="https://cdn.clickwallpapers.net/images/clickwallpapers-game-resident-evil-4-classic-1920x1080-img7.jpg"></S.Image>
          <S.Title>Resident Evil 4</S.Title>
          <S.SubTitleContainer>
            <S.SubTitle>Terror / Ação</S.SubTitle>
            <S.Year>2010</S.Year>
          </S.SubTitleContainer>
          <S.Stars>
            <S.StarIcon src={starIcon}/>
            <S.StarIcon src={starIcon}/>
            <S.StarIcon src={starIcon}/>
            <S.StarIcon src={starHalfIcon}/>
            <S.StarIcon src={starLowIcon}/>
          </S.Stars>
        </S.Card>
        <S.Card>
          <S.Image src="https://cdn.clickwallpapers.net/images/clickwallpapers-game-resident-evil-4-classic-1920x1080-img7.jpg"></S.Image>
          <S.Title>Resident Evil 4</S.Title>
          <S.SubTitleContainer>
            <S.SubTitle>Terror / Ação</S.SubTitle>
            <S.Year>2010</S.Year>
          </S.SubTitleContainer>
          <S.Stars>
            <S.StarIcon src={starIcon}/>
            <S.StarIcon src={starIcon}/>
            <S.StarIcon src={starIcon}/>
            <S.StarIcon src={starHalfIcon}/>
            <S.StarIcon src={starLowIcon}/>
          </S.Stars>
        </S.Card>
        <S.Card>
          <S.Image src="https://cdn.clickwallpapers.net/images/clickwallpapers-game-resident-evil-4-classic-1920x1080-img7.jpg"></S.Image>
          <S.Title>Resident Evil 4</S.Title>
          <S.SubTitleContainer>
            <S.SubTitle>Terror / Ação</S.SubTitle>
            <S.Year>2010</S.Year>
          </S.SubTitleContainer>
          <S.Stars>
            <S.StarIcon src={starIcon}/>
            <S.StarIcon src={starIcon}/>
            <S.StarIcon src={starIcon}/>
            <S.StarIcon src={starHalfIcon}/>
            <S.StarIcon src={starLowIcon}/>
          </S.Stars>
        </S.Card>
      </S.HorizontalList>
    </S.Container>
  );
};

export default HomeUser;
