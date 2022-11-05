import * as S from "../styleForm";

const UserForm = () => {
  return (
    <>
      <S.InputGroup>
      <S.InputContainer>
        <S.Input placeholder="Name"></S.Input>
      </S.InputContainer>
      <S.InputContainer>
        <S.InputPass placeholder="Password"></S.InputPass>
      </S.InputContainer>
      <S.InputContainer>
        <S.InputPass placeholder="Email"></S.InputPass>
      </S.InputContainer>
      <S.InputContainer>
        <S.InputPass placeholder="Cpf"></S.InputPass>
      </S.InputContainer>
      <S.InputContainer>
        <S.InputPass placeholder="Admin | true or false"></S.InputPass>
      </S.InputContainer>
    </S.InputGroup>
    <S.Btn_Entrar>Enviar</S.Btn_Entrar>
    </>
  
  );
};

export default UserForm;
