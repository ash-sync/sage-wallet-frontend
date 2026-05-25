import { useThree } from "@react-three/fiber";
import { layout } from "@/lib/threeLayout";

export function useResponsive3D() {
  const { size } = useThree();

  const isMobile = size.width < 640;
  const isTablet = size.width < 1024;

  const mode = isMobile ? "mobile" : isTablet ? "tablet" : "desktop";

  return layout[mode];
}
