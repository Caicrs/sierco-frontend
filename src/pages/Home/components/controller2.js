import React from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import ModelPath from "./controller_2.glb"

export function Model(props) {
  const { nodes, materials } = useGLTF(ModelPath);
  const myMesh = React.useRef();

  useFrame(({ clock }) => {
    const a = clock.getElapsedTime();
    myMesh.current.rotation.z = a - 0.3;
  });
  return (
    <group {...props} dispose={null} ref={myMesh} 
   
    rotation={[7.7, -3.1, 7]}
    >
   
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.A_base.geometry}
        material={nodes.A_base.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.A_top.geometry}
        material={materials["Material.003"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.B.geometry}
        material={nodes.B.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.B_base.geometry}
        material={nodes.B_base.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.B_top.geometry}
        material={materials["Material.003"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Battery_door.geometry}
        material={materials["Material.003"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Dpad.geometry}
        material={materials["Material.003"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Ending.geometry}
        material={nodes.Ending.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Front_panel.geometry}
        material={materials["Material.001"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Left.geometry}
        material={materials["Material.003"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Left_1.geometry}
        material={materials["Material.003"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Left_2.geometry}
        material={materials["Material.003"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Left_3.geometry}
        material={materials["Material.001"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Port.geometry}
        material={materials.Material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Port_internal.geometry}
        material={materials["Material.001"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Port_internal_1.geometry}
        material={materials.Material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Rear_panel.geometry}
        material={materials["Material.001"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Right.geometry}
        material={materials["Material.003"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Right_1.geometry}
        material={materials["Material.003"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Right_2.geometry}
        material={materials["Material.003"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Right_3.geometry}
        material={materials["Material.001"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Top_Part.geometry}
        material={materials["Material.003"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Top_Port.geometry}
        material={materials["Material.001"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Trigger_and_shoulder_button_marks.geometry}
        material={nodes.Trigger_and_shoulder_button_marks.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.X.geometry}
        material={nodes.X.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.X_top.geometry}
        material={materials["Material.003"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Xbase.geometry}
        material={nodes.Xbase.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Y.geometry}
        material={nodes.Y.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Y_base.geometry}
        material={nodes.Y_base.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Y_top.geometry}
        material={materials["Material.003"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube.geometry}
        material={materials.Material}
        position={[0, 1.57, 3.08]}
        rotation={[-0.1, 0, 0]}
        scale={[2.19, 0.87, 1.8]}
      />
    </group>
  );
}

useGLTF.preload(ModelPath);
