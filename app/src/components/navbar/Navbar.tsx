import * as S from "./style";

const Navbar = () => {
  return (
    <S.NavbarDiv>
      <S.LogoText>SIER.co</S.LogoText>
      <S.ButtonsNav>
        <S.NavbarLink to="/login" >
        <S.CreateBtn>Entrar</S.CreateBtn>
        </S.NavbarLink>
        <S.Bar>|</S.Bar>
        <S.NavbarLink to="/register" >
          {" "}
          <S.CreateBtn>Criar Conta</S.CreateBtn>
        </S.NavbarLink>
      </S.ButtonsNav>
    </S.NavbarDiv>
  );
};
export default Navbar;
