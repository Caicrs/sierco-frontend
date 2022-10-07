import * as S from "../styleForm";

const ProfileForm = () => {
  return (
    <>
      <S.InputGroup>
        <S.InputContainer>
          <S.Input placeholder="Username"></S.Input>
        </S.InputContainer>
        <S.InputContainer>
          <S.InputPass placeholder="Image URL"></S.InputPass>
        </S.InputContainer>
      </S.InputGroup>
      <S.Btn_Entrar>Enviar</S.Btn_Entrar>
    </>
  );
};

export default ProfileForm;
