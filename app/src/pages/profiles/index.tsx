import * as S from "./style";
import * as D from "./styleDesktop";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { motion } from "framer-motion";
import back from "./img/back.svg";

const Profiles = () => {
  const [newProfile, setProfile] = useState<any>(0);
  const [input, setInput] = useState<any>([
    {
      Title: "",
      Image: "",
      UserId: "userID",
    },
  ]);

  function test() {
    alert("ok");
  }

  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 999px)" });

  // MOBILE VERSION
  if (isTabletOrMobile) {
    return (
      <S.Container>
        <motion.div
          animate={{ opacity: [0, 1], y: [-100, 0] }}
          transition={{ delay: 1 }}
        >
          <S.addButtonBox>
            <S.Button onClick={test}>+</S.Button>
          </S.addButtonBox>
          <S.Text>Escolha seu perfil</S.Text>

          <S.ProfileContainer>
            <S.ProfileBox>
              <S.ProfileImg src="https://avatarfiles.alphacoders.com/930/93048.png"></S.ProfileImg>
              <S.ProfileName>Joaozinho</S.ProfileName>
            </S.ProfileBox>
            <S.ProfileBox>
              <S.ProfileImg src="https://avatarfiles.alphacoders.com/930/93048.png"></S.ProfileImg>
              <S.ProfileName>Joaozinho</S.ProfileName>
            </S.ProfileBox>
            <S.ProfileBox>
              <S.ProfileImg src="https://avatarfiles.alphacoders.com/930/93048.png"></S.ProfileImg>
              <S.ProfileName>Joaozinho</S.ProfileName>
            </S.ProfileBox>
            <S.ProfileBox>
              <S.ProfileImg src="https://avatarfiles.alphacoders.com/930/93048.png"></S.ProfileImg>
              <S.ProfileName>Joaozinho</S.ProfileName>
            </S.ProfileBox>
            <S.ProfileBox>
              <S.ProfileImg src="https://avatarfiles.alphacoders.com/930/93048.png"></S.ProfileImg>
              <S.ProfileName>Joaozinho</S.ProfileName>
            </S.ProfileBox>
          </S.ProfileContainer>
        </motion.div>
      </S.Container>
    );
  }
  // DESKTOP VERSION
  else {
    return (
      <D.Container>
        <motion.div
          animate={{ opacity: [0, 1], y: [-100, 0] }}
          transition={{ delay: 1 }}
        >
          <D.SubContainer>
            <D.Text>Escolha seu perfil</D.Text>
            <D.DualDivs>
              {newProfile == 0 ? (
                <>
                  <D.Buttons onClick={() => setProfile(1)}>+</D.Buttons>
                  <D.ProfileContainer>
                    <D.ProfileBox>
                      <D.ProfileImg src="https://avatarfiles.alphacoders.com/930/93048.png"></D.ProfileImg>
                      <D.ProfileName>Joaozinho</D.ProfileName>
                    </D.ProfileBox>
                  </D.ProfileContainer>
                </>
              ) : (
                <>
                  <D.Form>
                    <D.ProfileBox>
                      <D.Input
                        onChange={({ target }) =>
                          setInput((prevState: any) => ({
                            ...prevState,
                            Title: target.value,
                          }))
                        }
                        type="text"
                        placeholder="Title"
                      ></D.Input>
                      <D.Input
                        onChange={({ target }) =>
                          setInput((prevState: any) => ({
                            ...prevState,
                            Image: target.value,
                          }))
                        }
                        type="text"
                        placeholder="Image"
                      ></D.Input>
                    </D.ProfileBox>
                    <D.DualButtons>
                      <D.Buttons onClick={() => setProfile(0)}>Voltar</D.Buttons>
                      <D.Buttons
                        onClick={() => console.log(input.Title, input.Image)}
                      >
                        Confirmar
                      </D.Buttons>
                    </D.DualButtons>
                  </D.Form>
                </>
              )}
            </D.DualDivs>
          </D.SubContainer>
        </motion.div>
      </D.Container>
    );
  }
};

export default Profiles;
