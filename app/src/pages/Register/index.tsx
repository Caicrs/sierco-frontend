import * as S from "./style";
import eye1 from "../Login/img/eye-open.svg";
import eye2 from "../Login/img/eye-hidden.svg";
import { useState } from "react";

const Register = () => {
  const [eyeicon, setEyeicon] = useState(eye2);
  const [level, setLevel] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpf, setCpf] = useState("");

  function Register2(){
    alert(name + email + password + cpf);
  }

  return (
    <S.Container>
      <S.TextBg>SIER.co</S.TextBg>
      <S.TextBg2>SIER.co</S.TextBg2>
      <S.Form>
        <S.FormBox>
          <S.Logo>SIER.co</S.Logo>

          <S.LevelBlock>
            <S.Circle theme={{ background: "#FAE634" }}>
              <S.CircleNumber>1</S.CircleNumber>
            </S.Circle>
            {level === 0 ? <S.Line></S.Line> : <S.YellowLine></S.YellowLine>}

            {level === 0 ? (
              <S.WhiteCircle>
                <S.CircleNumber>2</S.CircleNumber>
              </S.WhiteCircle>
            ) : (
              <S.Circle theme={{ background: "#FAE634" }}>
                <S.CircleNumber>2</S.CircleNumber>
              </S.Circle>
            )}
          </S.LevelBlock>

          <S.InputContainer>
            {level === 0 ? (
              <S.Input
              value={name}
                placeholder="Insira seu nome"
                onChange={(event) => setName(event.target.value)}
              ></S.Input>
            ) : (
              <S.Input
              value={cpf}
              placeholder="Insira seu cpf"
              onChange={(event) => setCpf(event.target.value)}
            ></S.Input>
            )}
          
          </S.InputContainer>
          
          <S.InputContainer>
            {level === 0 ? (
              <S.Input
                value={email}
                placeholder="Insira seu email"
                onChange={(event) => setEmail(event.target.value)}
              ></S.Input>
            ) : (
              <S.InputPass
                value={password}
                placeholder="Insira uma senha"
                onChange={(event) => setPassword(event.target.value)}
                type={eyeicon === eye2 ? "password" : "text"}
              ></S.InputPass>
            )}
            {level === 0 ? (
              ""
            ) : (
              <S.Eye>
                <S.Icon
                  src={eyeicon}
                  onClick={() => setEyeicon(eyeicon === eye2 ? eye1 : eye2)}
                ></S.Icon>
              </S.Eye>
            )}
          </S.InputContainer>

          {/* FALTA CONFIGURAR MELHOR O "VOLTAR" E "PŔOXIMO" + INTERATIVIDADE E SMOOTH TRANSITION COM AS BOLINHAS DE LEVEL REGISTER */}
          {level === 0 ? (
            <S.Btns>
              <S.SubBtns>
                <S.NextBtn onClick={() => name === "" || email === "" ? alert("preencha os campos") : setLevel(1) }>Próximo</S.NextBtn>
              </S.SubBtns>
            </S.Btns>
          ) : (
            <S.Btns>
              <S.SubBtns>
                <S.Buttons onClick={() => setLevel(0)}>Voltar</S.Buttons>
              </S.SubBtns>
              <S.SubBtns>
                <S.NextBtn onClick={Register2}>Finalizar</S.NextBtn>
              </S.SubBtns>
            </S.Btns>
          )}
        </S.FormBox>
      </S.Form>
    </S.Container>
  );
};

export default Register;
