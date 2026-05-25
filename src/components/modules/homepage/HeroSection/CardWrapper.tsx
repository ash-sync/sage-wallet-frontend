import { useResponsive3D } from "@/hooks/useResponsiveLayout";
import FloatingCard from "./FloatingCard";

export function FloatingCardWrapper({ side }: { side: "left" | "right" }) {
  const { gap, y, scale } = useResponsive3D();

  const isLeft = side === "left";

  const offsetX = isLeft ? -gap / 1.7 : gap / 1.9;
  const offsetY = y + (isLeft ? 0.05 : -0.05);

  return (
    <group
      scale={scale}
      position={[offsetX, offsetY, -1]}
      rotation={isLeft ? [-0.1, 0.35, -0.12] : [-0.1, -0.8, 0.15]}
    >
      <FloatingCard />
    </group>
  );
}
