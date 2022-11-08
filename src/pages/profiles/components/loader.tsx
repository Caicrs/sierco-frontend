import styled, { keyframes } from "styled-components";
import load1 from "../img/load-1.svg";
import load2 from "../img/load-2.svg";

const Loader = () => {
  return (
    <LoadContainer>
      <ComponentsBox>
        <Container>
          <SubContainer>
            <img src={load1}></img>
          </SubContainer>
          <Img src={load2}></Img>
        </Container>
        <Text>Loading...</Text>
      </ComponentsBox>
    </LoadContainer>
  );
};

const tablet: string = "825px";
const mobile: string = "768px";

const ComponentsBox = styled.div`
  position: relative;
  top: 0;
  left: 0;
  boxsizing: border-box;
  @media screen and (min-width: 0) and (max-width: ${tablet}) {
    padding-bottom:7rem;
  }
`;

const LoadContainer = styled.div`
  height: 75vh;
  @media screen and (min-width: 0) and (max-width: ${tablet}) {
    height: 60vh;
  }
  @media screen and (min-width: 0) and (max-width: ${tablet}) {
    height: 70vh;
  }
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const SubContainer = styled.div`
  width: 100%;
  position: absolute;
`;

const Container = styled.div`
  width: 100%;
  text-align: center;
`;

const Text = styled.div`
  padding-top: 0.5rem;
  text-align: center;
`;

const Loop = keyframes`  
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const Img = styled.img`
  position: "absolute";
  top: 0;
  left: 0;
  animation: ${Loop} 1s linear infinite;
`;

export default Loader;
