import { useState } from "react";
import * as S from "../styleForm";
import { Genrers } from "services/ServiceGenre";
import { useNavigate } from "react-router-dom";


const GenreEditForm = ({data}:any) => {
  const navigate = useNavigate()
  const [genre, setGenre] = useState<any>({
    Name: ""
  });

  function CreateGenre() {
    Genrers.CreateGenrer(genre);
    setTimeout(() => navigate(0), 2000);
  };



  function EditGenre(id:string,data:string) {
    var newData = {id:id,Name:data}
    console.log(newData);
    Genrers.EditGenrer(id,newData);
    setTimeout(() => navigate(0), 6000);
  };

  



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
    <S.Btn_Entrar onClick={() => EditGenre(data.id,genre.Name)}>Editar</S.Btn_Entrar>
    </>
  
  );
};

export default GenreEditForm;
