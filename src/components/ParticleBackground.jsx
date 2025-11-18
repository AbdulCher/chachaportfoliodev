import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

function Particles() {
  const pointsRef = useRef();

  const { geometry, material } = useMemo(() => {
    const particleCount = 1000; // plus visible
    const positions = new Float32Array(particleCount * 3);

    // Plus large pour occuper l’espace
    for (let i = 0; i < particleCount * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 40; 
    }

    const geom = new THREE.BufferGeometry();
    geom.setAttribute("position", new THREE.BufferAttribute(positions, 3));

    const mat = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.35,
      transparent: true,
      opacity: 0.8,
    });

    return { geometry: geom, material: mat };
  }, []);

  // Animation !
  useFrame(() => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += 0.0007;
      pointsRef.current.rotation.x += 0.0004;
    }
  });

  return <points ref={pointsRef} geometry={geometry} material={material} />;
}

export default function ParticleBackground() {
  return (
    <Canvas
  className="fixed inset-0 -z-10"
  camera={{ position: [0, 0, 18], fov: 75 }}
  style={{ background: "black" }}
>
      <Particles />
    </Canvas>
  );
}
