import * as S from "../style";
import { Canvas } from "@react-three/fiber";
import Scene3D from "./joystick_scene";
import { OrbitControls } from "@react-three/drei";
import { Link } from "react-router-dom";

const Session1 = () => {
  return (
    <S.BoxContent>
      <S.BoxLeft>
        <S.H1>
          Crie sua conta <br></br>e jogue com os amigos
        </S.H1>
        <S.H5>{"( periodo de teste com validade de 1 mês )"}</S.H5>
        <Link to="/login" style={{ textDecoration: 'none' }}><S.Button>Criar Conta</S.Button></Link>
       
      </S.BoxLeft>

      <S.BoxRight>
        <Canvas camera={{ position: [5, 8, 14], fov: 65 }}>
          {/* AXIS HELPER | <primitive object={new THREE.AxesHelper(10)} />*/}
          <pointLight position={[5, 10, 10]} intensity={0.5}  />
          <pointLight position={[10, -10, -5]} />
          <ambientLight intensity={0.5} />
          <Scene3D />
          <OrbitControls />
        </Canvas>
      </S.BoxRight>
    </S.BoxContent>
  );
};

export default Session1;
