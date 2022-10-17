import * as S from "../style";
import eye1 from "../img/eye-open.svg";
import eye2 from "../img/eye-hidden.svg";
import { HTMLAttributes, useState } from "react";

type BoxLoginType = HTMLAttributes<HTMLDivElement>;

export type BoxLoginProps = {
  onSubmitData: (data: { Email: string; Password: string }) => void;
  errorMessage: string;
} & BoxLoginType;

const BoxLogin = ({ onSubmitData, errorMessage }: BoxLoginProps) => {
  const [eyeicon, setEyeicon] = useState(eye2);
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const handleSubmit = (): void => {
    const data = { Email, Password };
    onSubmitData(data);
  };

  return (
    <S.FormBox>
      <S.Logo>SIER.co</S.Logo>
      <S.InputGroup>
        <S.InputContainer>
          <S.Input
            onChange={({ target }) => setEmail(target.value)}
            type="text"
            placeholder="Email"
          ></S.Input>
        </S.InputContainer>
        <S.InputContainer>
          <S.InputPass
            onChange={({ target }) => setPassword(target.value)}
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

      <S.Btn_Entrar onClick={handleSubmit}>Entrar</S.Btn_Entrar>
      <S.SmallText>
        Não tem uma conta ?{" "}
        <S.Link_Create to="/register">
          <strong>Criar conta</strong>
        </S.Link_Create>
      </S.SmallText>
    </S.FormBox>
  );
};

export default BoxLogin;
