import * as S from "./style";
import { useState } from "react";
import { LocalStorageHelper } from "helpers/LocalStorageHelper";
import { QueryClient, QueryClientProvider, useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { AuthService } from "services/AuthServices";
import { ErrorResponse } from "types/api-types/error";
import { Login as LoginData, LoginResponse } from "types/api-types/login";
import { User } from "types/api-types/user";
import { LocalStorageKeys } from "types/LocalStorageKeys";
import { RoutePath } from "types/routes";
import BoxLogin from "./components/BoxLogin";

const queryClient = new QueryClient()

export default function Login() {
  return (
    <QueryClientProvider client={queryClient}>
      <MainLogin />
    </QueryClientProvider>
  )
}

const MainLogin = () => {
    const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const mutation = useMutation(AuthService.login, {
    onSuccess: (data: LoginResponse & ErrorResponse) => {
      if (data.statusCode) {
        console.log(data)
        setErrorMessage(data.message);
        return;
      }
      if (data.token && data.user) {
        LocalStorageHelper.set<string>(LocalStorageKeys.TOKEN, data.token);
        LocalStorageHelper.set<User>(LocalStorageKeys.USER, data.user);
        navigate(RoutePath.HOME_USER);
      }
      setErrorMessage("Tente novamente!");
    },

    onError: () => {
      setErrorMessage("Ocorreu um erro durante a requisição");
    },
  });

  const handleSubmit = (data: LoginData) => {
    mutation.mutate(data);
    setErrorMessage("");
  };

  //
  return (
    <>
      <S.Container>
        <S.TextBg>SIER.co</S.TextBg>
        <S.TextBg2>SIER.co</S.TextBg2>
        <S.TextBg>SIER.co</S.TextBg>
        <S.TextBg2>SIER.co</S.TextBg2>
        <S.Form>
          <BoxLogin onSubmitData={handleSubmit} errorMessage={errorMessage} />
        </S.Form>
      </S.Container>
    </>
  );
};

