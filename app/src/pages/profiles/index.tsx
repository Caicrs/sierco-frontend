import * as S from "./style";
import * as D from "./styleDesktop";
import {  useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import back from "./img/back.svg";
import add from "./img/add.svg";
import { AllProfile, useProfile } from "services/ServiceProfile";
import { Auth } from "helpers/Auth";
import { useNavigate } from "react-router-dom";
import Loader from "./components/loader";
import { motion } from "framer-motion";
import { LocalStorageKeys } from "types/LocalStorageKeys";
import { LocalStorageHelper } from "helpers/LocalStorageHelper";
import { RoutePath } from "types/routes";

const Profiles = () => {
  const id = Auth.user().id;
  const [isLoading, setIsLoading] = useState(true);
  const [profiles, setProfilesData] = useState<useProfile[]>([
    {
      id: "",
      Title: "",
      ImageUrl: "",
    },
  ]);

  useEffect(() => {
    const ProfilesRender = async () => {
      const res = await AllProfile.ProfilesByUser(id);
      setProfilesData(res?.data.Profiles);
    };
    ProfilesRender();
    setTimeout(() => setIsLoading(false), 2000)
    
  }, []);

  const Loading = () => {

    return (
        <Loader/>
    );
  };

  return <>{isLoading ? <Loading /> : <MainProfiles data={profiles} />}</>;
};

export default Profiles;

const MainProfiles = ({ ...profiles }: any) => {
  const navigate = useNavigate();
  const [newProfile, setProfile] = useState<any>(0);
  const [input, setInput] = useState<any>({
    Title: "",
    ImageUrl: "",
    UserId: Auth.user().id,
  });

  function CreateFunc() {
    console.log(input);
    AllProfile.CreateProfile(input);
    setTimeout(() => navigate(0), 2000);
  }

  function chooseProfile(id:string) {
      LocalStorageHelper.set<string>(LocalStorageKeys.PROFILE, id);
      navigate(RoutePath.HOME_USER)
      console.log(id) 
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
          {newProfile == 0 ? (
            <>
              <S.addButtonBox>
                <S.Icon onClick={() => setProfile(1)} src={add} />
              </S.addButtonBox>
              <S.Text>Escolha seu perfil</S.Text>

              <S.ProfileContainer>
                {profiles.data.map((data: any) => (
                  <S.ProfileBox onClick={() => chooseProfile(data.id)} key={data.id}>
                    <S.ProfileImg src={`${data.ImageUrl}`}></S.ProfileImg>
                    <S.ProfileName>{data.Title}</S.ProfileName>
                  </S.ProfileBox>
                  
                ))}
              </S.ProfileContainer>
            </>
          ) : (
            <>
              <S.addButtonBox>
                <S.Icon onClick={() => setProfile(0)} src={back} />
              </S.addButtonBox>

              <S.ContainerForm>
                <S.Form>
                  <S.Input
                    onChange={({ target }) =>
                      setInput((prevState: any) => ({
                        ...prevState,
                        Title: target.value,
                      }))
                    }
                    type="text"
                    placeholder="Title"
                  ></S.Input>
                  <S.Input
                    onChange={({ target }) =>
                      setInput((prevState: any) => ({
                        ...prevState,
                        ImageUrl: target.value,
                      }))
                    }
                    type="text"
                    placeholder="Image"
                  ></S.Input>

                  <S.Buttons onClick={() => CreateFunc()}>Confirmar</S.Buttons>
                </S.Form>
              </S.ContainerForm>
            </>
          )}
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
                    {profiles.data.map((data: any) => (
                      <D.ProfileBox onClick={() => chooseProfile(data.id)} key={data.id}>
                        <D.ProfileImg src={`${data.ImageUrl}`}></D.ProfileImg>
                        <D.ProfileName>{data.Title}</D.ProfileName>
                      </D.ProfileBox>
                    ))}
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
                            ImageUrl: target.value,
                          }))
                        }
                        type="text"
                        placeholder="Image"
                      ></D.Input>
                    </D.ProfileBox>
                    <D.DualButtons>
                      <D.Buttons onClick={() => setProfile(0)}>
                        Voltar
                      </D.Buttons>
                      <D.Buttons onClick={() => CreateFunc()}>
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
