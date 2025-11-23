// src/components/SpinningCube.jsx
// import React from "react";
// import { Canvas } from "@react-three/fiber";
// import { OrbitControls, Environment } from "@react-three/drei";
// import { motion } from "framer-motion";

// export default function SpinningCube({ size = 160 }) {
//   // taille en px pour wrapper Tailwind (w-40 = 160px)
//   return (
//     <div style={{ width: size, height: size }} className="mx-auto">
//       <Canvas camera={{ position: [3, 2, 4], fov: 45 }}>
//         {/* Light environment */}
//         <ambientLight intensity={0.3} />
//         <directionalLight position={[5, 5, 5]} intensity={1.2} />
//         <pointLight position={[-5, -5, -5]} intensity={0.6} />

//         {/* Environment (HDR-like simple) */}
//         <Environment preset="studio" />

//         {/* Motion-enabled mesh (use motion from framer-motion, it works with R3F elements) */}
//         <motion.mesh
//           // framer-motion accepts rotate as array or props; here we animate rotateY infinitely
//           animate={{ rotation: [0, Math.PI * 2, 0] }}
//           transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
//           position={[1, 1, 1]}
//         >
//           <boxGeometry args={[1.4, 1.4, 1.4]} />
//           <meshStandardMaterial
//             color={"#60a5fa"} // bleu doux
//             metalness={0.6}
//             roughness={0.15}
//             envMapIntensity={1}
//           />
//         </motion.mesh>

//         {/* Controls (disabled zoom for stability) */}
//         <OrbitControls enableZoom={false} enablePan={false} />
//       </Canvas>
//     </div>
//   );
// }

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
      <meshStandardMaterial color="#fb8500" />
    </mesh>
  );
}

export default function SpinningCube() {
  return (
    <div style={{ width: "100%", height: "230px" }}>
      <Canvas camera={{ position: [3, 3, 3] }}>
        <ambientLight intensity={0.9} />
        <pointLight position={[10, 10, 10]} />

        <RotatingCube />

        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
}
