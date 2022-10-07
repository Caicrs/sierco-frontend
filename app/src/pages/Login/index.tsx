import * as S from "./style";
import eye1 from "./img/eye-open.svg";
import eye2 from "./img/eye-hidden.svg";
import { useState } from "react";
import bg from "./img/login-bg.svg";
import Footer from "components/footer/footer";

interface Data {}

const Login = () => {
  const [eyeicon, setEyeicon] = useState(eye2);
  const [data, setData] = useState({ email: "", password: "" });

  const emailData = (e: { target: { value: string; }; }) => {
    setData({email: e.target.value,password:data.password})
  }

  const passwordData = (e: { target: { value: any; }; }) => {
    setData({password: e.target.value,email:data.email})
  }


  function Send() {
    if(data.email === '' || data.email.length <= 10){
      alert('Digite um email válido')
    }
    console.log(data);
  }
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
                <S.Input
                  onChange={emailData}
                  placeholder="Email"
                ></S.Input>
              </S.InputContainer>
              <S.InputContainer>
                <S.InputPass
                  onChange={passwordData}
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

            <S.Btn_Entrar onClick={Send}>Entrar</S.Btn_Entrar>
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
