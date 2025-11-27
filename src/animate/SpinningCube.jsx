// SpinningCube.jsx
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { OrbitControls } from "@react-three/drei";

function RotatingCube() {
  const meshRef = useRef();

  useFrame(() => {
    meshRef.current.rotation.y += 0.05; // vitesse de rotation
    meshRef.current.rotation.x += 0.009; // optionnel : rotation 3D
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color="#ece5dd" />
    </mesh>
  );
}

export default function SpinningCube() {
  return (
    <div style={{ width: "100%", height: "200px" }}>
      <Canvas camera={{ position: [3, 3, 3] }}>
        <ambientLight intensity={0.9} />
        <pointLight position={[10, 10, 10]} />

        <RotatingCube />

        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
}
