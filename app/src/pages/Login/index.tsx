import * as S from "./style";
import eye1 from "./img/eye-open.svg";
import eye2 from "./img/eye-hidden.svg";
import { useState } from "react";
import bg from "./img/login-bg.svg";
import Footer from "components/footer/footer";

const Login = () => {
  const [eyeicon, setEyeicon] = useState(eye2);

  //
  return (
    <>
      <S.Container>
      <S.TextBg>SIER.co</S.TextBg>
        <S.TextBg2>SIER.co</S.TextBg2>
        <S.TextBg>SIER.co</S.TextBg>
        <S.TextBg2>SIER.co</S.TextBg2>
        <S.Form>
          <S.FormBox>
            <S.Logo>SIER.co</S.Logo>
            <S.InputGroup>
              <S.InputContainer>
                <S.Input placeholder="Email"></S.Input>
              </S.InputContainer>
              <S.InputContainer>
                <S.InputPass
                  placeholder="Senha"
                  type={eyeicon === eye2 ? "password" : "text"}
                ></S.InputPass>
                <S.Eye>
                  <S.Icon
                    src={eyeicon}
                    onClick={() => setEyeicon(eyeicon === eye2 ? eye1 : eye2)}
                  ></S.Icon>
                </S.Eye>
              </S.InputContainer>
            </S.InputGroup>

            <S.Btn_Entrar>Entrar</S.Btn_Entrar>
            <S.SmallText>
              Não tem uma conta ?{" "}
              <S.Link_Create to="/register">
                <strong>Criar conta</strong>
              </S.Link_Create>
            </S.SmallText>
          </S.FormBox>
        </S.Form>
      </S.Container>
      <Footer></Footer>
    </>
  );
};

export default Login;
