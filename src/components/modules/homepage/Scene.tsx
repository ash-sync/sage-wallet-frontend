"use client";

import { Canvas } from "@react-three/fiber";
import { Float, Environment } from "@react-three/drei";
import FloatingCard from "./FloatingCard";

export default function Scene() {
  return (
    <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
      <ambientLight intensity={8} />

      <directionalLight position={[5, 5, 5]} intensity={3} />

      <Environment preset="dawn" />

      {/* Left Card */}
      <Float speed={2} rotationIntensity={1} floatIntensity={2}>
        <group position={[-2.8, 0.3, 0]} rotation={[0.2, 0.4, -0.2]}>
          <FloatingCard />
        </group>
      </Float>

      {/* Right Card */}
      <Float speed={2.5} rotationIntensity={1} floatIntensity={2}>
        <group position={[2.8, -0.2, 0]} rotation={[-0.1, -0.4, 0.2]}>
          <FloatingCard />
        </group>
      </Float>
    </Canvas>
  );
}
