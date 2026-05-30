// src/components/three/FloatingCoinsBackground.tsx

"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Text, Float } from "@react-three/drei";
import { useMemo, useRef } from "react";
import * as THREE from "three";

function FloatingCoin({ position }: { position: [number, number, number] }) {
  const ref = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (!ref.current) return;

    ref.current.rotation.y += delta * 0.3;
  });

  return (
    <Float speed={1} rotationIntensity={0.2} floatIntensity={1}>
      <group ref={ref} position={position}>
        <mesh>
          <cylinderGeometry args={[1, 1, 0.18, 64]} />
          <meshPhysicalMaterial
            color="#FFD700"
            metalness={1}
            roughness={0.05}
            clearcoat={1}
            reflectivity={1}
          />
        </mesh>

        <Text
          position={[0, 0.11, 0]}
          fontSize={0.7}
          color="#ffffff"
          anchorX="center"
          anchorY="middle"
        >
          $
        </Text>

        <Text
          rotation={[0, Math.PI, 0]}
          position={[0, -0.11, 0]}
          fontSize={0.7}
          color="#ffffff"
          anchorX="center"
          anchorY="middle"
        >
          $
        </Text>
      </group>
    </Float>
  );
}

function Scene() {
  const coins = useMemo(() => {
    return Array.from({ length: 12 }, () => ({
      position: [
        // eslint-disable-next-line react-hooks/purity
        (Math.random() - 0.5) * 25,
        // eslint-disable-next-line react-hooks/purity
        (Math.random() - 0.5) * 15,
        // eslint-disable-next-line react-hooks/purity
        (Math.random() - 0.5) * 10,
      ] as [number, number, number],
    }));
  }, []);

  return (
    <>
      <ambientLight intensity={1.5} />

      <pointLight position={[10, 10, 10]} intensity={200} />

      <pointLight position={[-10, -10, 10]} intensity={150} />

      {coins.map((coin, i) => (
        <FloatingCoin key={i} position={coin.position} />
      ))}
    </>
  );
}

export default function FloatingCoinsBackground() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 15] }}>
        <Scene />
      </Canvas>
    </div>
  );
}
