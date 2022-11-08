import { useState } from "react";
import * as S from "../styleForm";
import { Genrers } from "services/ServiceGenre";
import { useNavigate } from "react-router-dom";


const GenreForm = () => {
  const navigate = useNavigate()
  const [genre, setGenre] = useState<any>({
    Name: ""
  });

  function CreateGenre() {
    Genrers.CreateGenrer(genre);
    setTimeout(() => navigate(0), 2000);
  };

  /*
  function EditGenre() {
    console.log(genre);
    Genrers.EditGenrer(genre);
    setTimeout(() => navigate(0), 2000);
  };
  */
  



  return (
    <>
      <S.InputGroup>
      <S.InputContainer>
        <S.Input
        placeholder="Insira o nome do gênero"
        onChange={({ target }) =>
                      setGenre(() => ({
                        
                        Name: target.value,
                      }))
                      }
        ></S.Input>
      </S.InputContainer>
    </S.InputGroup>
    <S.Btn_Entrar onClick={() => CreateGenre()}>Enviar</S.Btn_Entrar>
    </>
  
  );
};

export default GenreForm;
