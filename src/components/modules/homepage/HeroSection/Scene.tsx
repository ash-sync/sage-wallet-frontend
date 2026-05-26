"use client";

import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";

import { ResponsiveCamera } from "./ResponsiveCamera";
import { FloatingCardWrapper } from "./CardWrapper";
import { useTheme } from "@/hooks/useTheme";

export default function Scene() {
  const { theme } = useTheme();

  const isDark = theme === "dark";

  return (
    <Canvas
      gl={{ antialias: true }}
      dpr={[1, 2]}
      camera={{ position: [0, 0, 8], fov: 45 }}
    >
      <ResponsiveCamera />

      <ambientLight intensity={8} />
      <directionalLight position={[5, 5, 5]} intensity={1} />

      <Environment preset={isDark ? "city" : "dawn"} />

      {/* LEFT CARD */}
      <FloatingCardWrapper side="left" />

      {/* RIGHT CARD */}
      <FloatingCardWrapper side="right" />
    </Canvas>
  );
}
