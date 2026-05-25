// "use client";

// import { MeshDistortMaterial, RoundedBox } from "@react-three/drei";
// import { useFrame } from "@react-three/fiber";
// import { useRef } from "react";
// import * as THREE from "three";

// export default function FloatingCard() {
//   const ref = useRef<THREE.Mesh>(null!);

//   useFrame((state) => {
//     if (!ref.current) return;

//     ref.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;

//     ref.current.rotation.x = Math.cos(state.clock.elapsedTime * 0.3) * 0.1;
//   });

//   return (
//     <group>
//       {/* Main Card */}
//       <RoundedBox ref={ref} args={[3.2, 2, 0.08]} radius={0.12} smoothness={4}>
//         <MeshDistortMaterial
//           color="#6d28d9"
//           emissive="#7c3aed"
//           emissiveIntensity={2}
//           metalness={0.3}
//           roughness={0.1}
//           distort={0.15}
//           speed={2}
//         />
//       </RoundedBox>
//     </group>
//   );
// }

"use client";

import {
  Float,
  RoundedBox,
  Text,
  MeshTransmissionMaterial,
} from "@react-three/drei";

import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

import * as THREE from "three";

export default function FloatingCard() {
  const groupRef = useRef<THREE.Group>(null!);

  useFrame((state) => {
    if (!groupRef.current) return;

    // Smooth floating rotation
    groupRef.current.rotation.y = THREE.MathUtils.lerp(
      groupRef.current.rotation.y,
      state.pointer.x * 0.3,
      0.05,
    );

    groupRef.current.rotation.x = THREE.MathUtils.lerp(
      groupRef.current.rotation.x,
      -state.pointer.y * 0.2,
      0.05,
    );
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <group ref={groupRef}>
        {/* MAIN CARD */}
        <RoundedBox args={[3.4, 2.1, 0.08]} radius={0.18} smoothness={2}>
          <MeshTransmissionMaterial
            backside
            samples={6}
            resolution={256}
            ior={1.5}
            chromaticAberration={0.04}
            anisotropy={0.1}
            distortion={0.2}
            distortionScale={0.2}
            temporalDistortion={0.2}
            color="#6d28d9"
          />
        </RoundedBox>

        {/* CHIP */}
        <mesh position={[1.05, 0.45, 0.05]}>
          <boxGeometry args={[0.38, 0.28, 0.02]} />
          <meshStandardMaterial color="#d4d4d8" metalness={1} roughness={0.2} />
        </mesh>

        {/* CHIP LINES */}
        <mesh position={[1.05, 0.45, 0.061]}>
          <planeGeometry args={[0.3, 0.2]} />
          <meshBasicMaterial color="#999" wireframe />
        </mesh>

        {/* CARD NUMBER */}
        <Text
          position={[0, -0.2, 0.05]}
          fontSize={0.16}
          color="white"
          anchorX="center"
          anchorY="middle"
          letterSpacing={0.05}
        >
          4589 4589 4589 4589
        </Text>

        {/* CARD HOLDER */}
        <Text
          position={[-0.9, -0.75, 0.05]}
          fontSize={0.09}
          color="#d1d5db"
          anchorX="left"
        >
          ASH-SYNC
        </Text>

        {/* EXPIRY */}
        <Text
          position={[0.9, -0.75, 0.05]}
          fontSize={0.08}
          color="#d1d5db"
          anchorX="right"
        >
          12/30
        </Text>

        {/* CARD TITLE */}
        <Text
          position={[-1.15, 0.72, 0.05]}
          fontSize={0.11}
          color="#c084fc"
          anchorX="left"
        >
          SAGE
        </Text>

        {/* MASTERCARD LOGO */}
        <mesh position={[-1.1, -0.35, 0.05]}>
          <circleGeometry args={[0.16, 32]} />
          <meshBasicMaterial color="#ef4444" transparent opacity={0.85} />
        </mesh>

        <mesh position={[-0.95, -0.35, 0.05]}>
          <circleGeometry args={[0.16, 32]} />
          <meshBasicMaterial color="#facc15" transparent opacity={0.85} />
        </mesh>
      </group>
    </Float>
  );
}
