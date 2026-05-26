"use client";

import { useTheme } from "@/hooks/useTheme";
import { Float, RoundedBox, Text } from "@react-three/drei";

import { useFrame } from "@react-three/fiber";
import { useDrag } from "@use-gesture/react";

import { useRef } from "react";

import * as THREE from "three";

export default function FloatingCard() {
  const groupRef = useRef<THREE.Group>(null!);
  const hovered = useRef(false);

  const { theme } = useTheme();

  const isDark = theme === "dark";

  useFrame((state) => {
    if (!groupRef.current) return;

    // Smooth floating rotation
    groupRef.current.rotation.y = THREE.MathUtils.lerp(
      groupRef.current.rotation.y,
      state.pointer.x * 0.6,
      0.08,
    );

    groupRef.current.rotation.x = THREE.MathUtils.lerp(
      groupRef.current.rotation.x,
      -state.pointer.y * 0.6,
      0.08,
    );
  });

  useFrame(() => {
    if (!groupRef.current) return;

    groupRef.current.position.lerp(
      new THREE.Vector3(
        groupRef.current.position.x,
        groupRef.current.position.y,
        0,
      ),
      0.1,
    );
  });

  const bind = useDrag(({ offset: [x, y] }) => {
    if (!groupRef.current) return;

    groupRef.current.position.x = x / 200;
    groupRef.current.position.y = -y / 200;
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <group
        ref={groupRef}
        onPointerOver={() => {
          hovered.current = true;
          document.body.style.cursor = "grab";
        }}
        onPointerOut={() => {
          hovered.current = false;
          document.body.style.cursor = "default";
        }}
        {...bind()}
      >
        {/* MAIN CARD */}
        <RoundedBox args={[3.4, 2.1, 0.08]} radius={0.08} smoothness={12}>
          <meshPhysicalMaterial
            color={isDark ? "#7c3aed" : "#3b145e"}
            emissive={isDark ? "#7c3aed" : "#3b145e"}
            emissiveIntensity={isDark ? 0.25 : 0.08}
            metalness={0.1}
            roughness={0.14}
            clearcoat={0.15}
            clearcoatRoughness={1}
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
        <mesh position={[-1.1, -0.35, 0.06]}>
          <circleGeometry args={[0.16, 32]} />
          <meshBasicMaterial color="#ef4444" transparent opacity={2} />
        </mesh>

        <mesh position={[-0.96, -0.35, 0.05]}>
          <circleGeometry args={[0.16, 32]} />
          <meshBasicMaterial color="#facc15" transparent opacity={0.85} />
        </mesh>
      </group>
    </Float>
  );
}
