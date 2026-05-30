"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import { useMemo, useRef } from "react";
import * as THREE from "three";
import Coin from "./Coin";

function FallingCoin({
  position,
  speed,
}: {
  position: [number, number, number];
  speed: number;
}) {
  const ref = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (!ref.current) return;

    ref.current.rotation.x += delta;
    ref.current.rotation.y += delta * 2;

    ref.current.position.y -= speed * delta;

    if (ref.current.position.y < -15) {
      ref.current.position.y = 15;
    }
  });

  return (
    <group ref={ref} position={position}>
      <Coin size={0.55} />
    </group>
  );
}

function Scene() {
  const coins = useMemo(() => {
    return Array.from({ length: 40 }, () => ({
      position: [
        // eslint-disable-next-line react-hooks/purity
        (Math.random() - 0.5) * 20,
        // eslint-disable-next-line react-hooks/purity
        Math.random() * 30 - 15,
        // eslint-disable-next-line react-hooks/purity
        (Math.random() - 0.5) * 10,
      ] as [number, number, number],
      // eslint-disable-next-line react-hooks/purity
      speed: Math.random() * 2 + 1,
    }));
  }, []);

  return (
    <>
      <Environment preset="city" />

      <ambientLight intensity={1.5} />

      {coins.map((coin, i) => (
        <FallingCoin key={i} position={coin.position} speed={coin.speed} />
      ))}
    </>
  );
}

export default function AuthCoinRain() {
  return (
    <div className="absolute inset-0 z-0 opacity-50">
      <Canvas camera={{ position: [0, 0, 10] }}>
        <Scene />
      </Canvas>
    </div>
  );
}
