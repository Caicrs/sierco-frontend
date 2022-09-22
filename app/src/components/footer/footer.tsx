import { Link } from "react-router-dom";
import * as S from "./style";
import "./styles.css";
import React from 'react'


const Footer = () => {
  return (

            <S.Wrapper>
            <S.Row>
                <S.Column>
                    <S.Link href="#">About</S.Link>
                    <S.Link href="#">Contact</S.Link>
                </S.Column>
               
                <S.Column>
                    <S.Link href="#">Linkedin</S.Link>
                    <S.Link href="#">Email</S.Link>
                    <S.Link href="#">Instagram</S.Link>
                    <S.Link href="#">Behance</S.Link>
                </S.Column>
            </S.Row>
            </S.Wrapper>
   
  );
};

export default Footer;

/*
<footer id="dark-theme" class='bottom-0 left-0 flex flex-col w-full gap-8 px-8 py-16 md:gap-12'>
  <div class='grid grid-cols-2 gap-8 2xsm:grid-cols-2 md:grid-cols-4 '>
    <div class='flex flex-col gap-6'>
      <ul class='flex flex-col gap-6 '>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </div>
    <div class='flex flex-col gap-6'>
      <ul class='flex flex-col gap-6 '>
        <li>Linkedin</li>
        <li>Email</li>
        <li>Instagram</li>
        <li>Behance</li>
      </ul>
    </div>
  </div>
  <div class='w-full h-px m-auto bg-gradient-to-r from-transparent via-gray-400 to-transparent'></div>

  <div class='flex flex-col items-center'>
    <div>
      Copyright © 2022 Caic Rocha. All rights reserved.
    </div>
   
  </div>
</footer>
*/
