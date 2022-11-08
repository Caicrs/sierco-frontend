import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AllGames } from "services/ServiceGames"
import * as S from "../styleForm";



const EditGameForm = ({data}:any) => {



  const navigate = useNavigate()
  const [game, setGame] = useState<any>({
    Title: "",
    CoverImageUrl: "",
    Description: "",
    Year: 0,
    ImdbScore: 0,
    TrailerYouTubeUrl: "",
    GameplayYouTubeUrl: "",
  });

  function EditGames(id:string) {
    console.log(id)
    console.log(game)
    AllGames.EditGame(id, game);
    setTimeout(() => navigate(0), 2000);
  }

  return (
    <>
      <S.InputGroup>
      <S.InputContainer>
        <S.Input 
        placeholder="Title"
        onChange={({ target }) =>
                      setGame((prevState: any) => ({
                        ...prevState,
                        Title: target.value,
                      }))
                      }>
        </S.Input>
      </S.InputContainer>
      <S.InputContainer>
        <S.InputPass         
          placeholder="Image Url"
          onChange={({ target }) =>
                        setGame((prevState: any) => ({
                          ...prevState,
                          CoverImageUrl: target.value,
                        }))
                        }>
         </S.InputPass>
      </S.InputContainer>
      <S.InputContainer>
        <S.InputPass
         placeholder="Description"
         onChange={({ target }) =>
                       setGame((prevState: any) => ({
                         ...prevState,
                         Description: target.value,
                       }))
                       }>
         </S.InputPass>
      </S.InputContainer>
      <S.InputContainer>
        <S.InputPass
        type="number"
                 placeholder="Year"
                 onChange={({ target }) =>
                               setGame((prevState: any) => ({
                                 ...prevState,
                                 Year: parseInt(target.value),
                               }))
                               }>
         </S.InputPass>
      </S.InputContainer>
      <S.InputContainer>
        <S.InputPass
        type="number"
                 placeholder="Imdb Score"
                 onChange={({ target }) =>
                               setGame((prevState: any) => ({
                                 ...prevState,
                                 ImdbScore: parseInt(target.value),
                               }))
                               }>
        
        </S.InputPass>
      </S.InputContainer>
      <S.InputContainer>
        <S.InputPass
                  placeholder="Trailer Youtube Url"
                  onChange={({ target }) =>
                                setGame((prevState: any) => ({
                                  ...prevState,
                                  TrailerYouTubeUrl: target.value,
                                }))
                                }>
        </S.InputPass>
      </S.InputContainer>
      <S.InputContainer>
        <S.InputPass 
                 placeholder="Gameplay Youtube Url"
                 onChange={({ target }) =>
                               setGame((prevState: any) => ({
                                 ...prevState,
                                 GameplayYouTubeUrl: target.value,
                               }))
                               }>
        </S.InputPass>
      </S.InputContainer>
    </S.InputGroup>
    <S.Btn_Entrar onClick={() => EditGames(data.id)}>Enviar</S.Btn_Entrar>
    </>
  
  );
};

export default EditGameForm;