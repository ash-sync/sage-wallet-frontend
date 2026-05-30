"use client";

import { Text } from "@react-three/drei";

type CoinProps = {
  size?: number;
};

export default function Coin({ size = 1 }: CoinProps) {
  return (
    <group scale={size}>
      {/* Main coin body */}
      <mesh castShadow receiveShadow>
        <cylinderGeometry args={[1, 1, 0.18, 128]} />
        <meshPhysicalMaterial
          color="#f5c542"
          metalness={1}
          roughness={0.25}
          clearcoat={1}
        />
      </mesh>

      {/* Rim edge (gives real coin thickness feel) */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.98, 0.03, 16, 200]} />
        <meshStandardMaterial color="#d4a017" metalness={1} roughness={0.3} />
      </mesh>

      {/* ================= FRONT ENGRAVING ================= */}

      {/* recessed engraving plate (THIS is the key) */}
      <mesh position={[0, 0.085, 0]}>
        <cylinderGeometry args={[0.65, 0.65, 0.02, 128]} />
        <meshStandardMaterial color="#caa24a" metalness={0.9} roughness={0.6} />
      </mesh>

      {/* engraved symbol (flat, NOT extruded) */}
      <Text
        position={[0, 0, 0]}
        fontSize={0.6}
        color="#7a5a12"
        anchorX="center"
        anchorY="middle"
      >
        $
      </Text>

      {/* decorative rings */}
      <mesh position={[0, 0.021, 0]}>
        <torusGeometry args={[0.8, 0.015, 16, 200]} />
        <meshStandardMaterial color="#e0b84c" metalness={1} roughness={0.25} />
      </mesh>

      <mesh position={[0, 0.091, 0]}>
        <torusGeometry args={[0.55, 0.01, 16, 200]} />
        <meshStandardMaterial color="#e0b84c" metalness={1} roughness={0.25} />
      </mesh>

      {/* ================= BACK SIDE ================= */}

      <group rotation={[Math.PI, 0, 0]}>
        <mesh position={[0, 0.085, 0]}>
          <cylinderGeometry args={[0.65, 0.65, 0.02, 128]} />
          <meshStandardMaterial
            color="#caa24a"
            metalness={0.9}
            roughness={0.6}
          />
        </mesh>

        <Text
          position={[0, 0.096, 0]}
          fontSize={0.6}
          color="#7a5a12"
          anchorX="center"
          anchorY="middle"
        >
          $
        </Text>
      </group>
    </group>
  );
}
