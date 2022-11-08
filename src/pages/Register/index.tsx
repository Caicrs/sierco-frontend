import * as S from "./style";
import eye1 from "../Login/img/eye-open.svg";
import eye2 from "../Login/img/eye-hidden.svg";
import { useState } from "react";
import Footer from "../../components/footer/footer";
import Login from "../Login/index";
import { LocalStorageHelper } from "helpers/LocalStorageHelper";
import { AuthService } from "services/AuthServices";
import { ErrorResponse } from "types/api-types/error";
import { Register, RegisterResponse } from "types/api-types/register";
import { Login as LoginData, LoginResponse } from "types/api-types/login";
import { User } from "types/api-types/user";
import { LocalStorageKeys } from "types/LocalStorageKeys";
import { RoutePath } from "types/routes";
import { useNavigate } from "react-router-dom";
import { AllUsers } from "services/ServiceUser";
import { validEmail, validPassword } from "./regex.js";
import {
  QueryClient,
  QueryClientProvider,
  useMutation,
} from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function RegisterPage() {
  return (
    <QueryClientProvider client={queryClient}>
      <MainPage />
    </QueryClientProvider>
  );
}

const MainPage = () => {
  const [eyeicon, setEyeicon] = useState(eye2);
  const [level, setLevel] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpf, setCpf] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [errorEmailMessage, setErrorEmailMessage] = useState("");

  const navigate = useNavigate();

  const mutation = useMutation(AuthService.login, {
    onSuccess: (data: LoginResponse & ErrorResponse) => {
      if (data.statusCode) {
        console.log(data);
        setErrorMessage(data.message);
      }
      if (data.token && data.user) {
        LocalStorageHelper.set<string>(LocalStorageKeys.TOKEN, data.token);
        LocalStorageHelper.set<User>(LocalStorageKeys.USER, data.user);
        console.log(data.token)
        console.log(data.user)
        console.log(data)
        setTimeout(() => navigate(RoutePath.PROFILES), 1000 * 5);
      }
      setErrorMessage("Tente novamente!");
      setTimeout(() => setErrorMessage(""), 1000 * 5);
    },

    onError: () => {
      setErrorMessage(
        "A senha precisa ter mais de 8 digitos e algum digito especial"
      );
      setTimeout(() => setErrorMessage(""), 1000 * 5);
    },
  });

  function registerSubmit() {
    const mydata = {
      Email: email,
      Password: password,
      confirmPassword: password,
      Name: name,
      Cpf: cpf,
      IsAdmin: false,
    };

    const validate = () => {
      if (!validEmail.test(mydata.Email)) {
        setErrorEmailMessage("Insira um email valido");
        setTimeout(() => setErrorEmailMessage(""), 1000 * 5);
      }
      else if (!validPassword.test(mydata.Password)) {
        setErrorMessage(
          "Insira uma senha com 8 digitos com simbolos maiusculos,minusculos e números"
        );
        setTimeout(() => setErrorMessage(""), 1000 * 5);
      } else {
        AllUsers.CreateUser(mydata);
        const myLogin = { Email: mydata.Email, Password: mydata.Password };
        setTimeout(() => mutation.mutate(myLogin), 1000 * 5);
      }
    };
    validate();
  }

  const handleSubmit = (data: LoginData) => {
    console.log(data)
    mutation.mutate(data);
    setErrorMessage("");
  };

  return (
    <>
      <S.Container>
        {errorMessage !== "" ? <S.Toast>{errorMessage}</S.Toast> : null}
        {errorEmailMessage !== "" ? (
          <S.Toast2>{errorEmailMessage}</S.Toast2>
        ) : null}
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
                  <S.NextBtn
                    onClick={() =>
                      name === "" || email === ""
                        ? alert("preencha os campos")
                        : setLevel(1)
                    }
                  >
                    Próximo
                  </S.NextBtn>
                </S.SubBtns>
              </S.Btns>
            ) : (
              <S.Btns>
                <S.SubBtns>
                  <S.Buttons onClick={() => setLevel(0)}>Voltar</S.Buttons>
                </S.SubBtns>
                <S.SubBtns>
                  <S.NextBtn onClick={registerSubmit}>Finalizar</S.NextBtn>
                </S.SubBtns>
              </S.Btns>
            )}
          </S.FormBox>
        </S.Form>
      </S.Container>
      <Footer></Footer>
    </>
  );
};
