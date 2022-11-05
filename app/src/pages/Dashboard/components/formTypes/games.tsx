import * as S from "../styleForm";

const GameForm = () => {
  return (
    <>
      <S.InputGroup>
      <S.InputContainer>
        <S.Input placeholder="Title"></S.Input>
      </S.InputContainer>
      <S.InputContainer>
        <S.InputPass placeholder="Image URL"></S.InputPass>
      </S.InputContainer>
      <S.InputContainer>
        <S.InputPass placeholder="Description"></S.InputPass>
      </S.InputContainer>
      <S.InputContainer>
        <S.InputPass placeholder="Year"></S.InputPass>
      </S.InputContainer>
      <S.InputContainer>
        <S.InputPass placeholder="IMDB"></S.InputPass>
      </S.InputContainer>
      <S.InputContainer>
        <S.InputPass placeholder="Trailer URL"></S.InputPass>
      </S.InputContainer>
      <S.InputContainer>
        <S.InputPass placeholder="Gameplay URL"></S.InputPass>
      </S.InputContainer>
    </S.InputGroup>
    <S.Btn_Entrar>Enviar</S.Btn_Entrar>
    </>
  
  );
};

export default GameForm;