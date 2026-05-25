import { useThree } from "@react-three/fiber";
import { useEffect } from "react";

export function ResponsiveCamera() {
  const { camera, size } = useThree();

  useEffect(() => {
    if (size.width < 640) {
      // eslint-disable-next-line react-hooks/immutability
      camera.position.z = 11; // mobile (zoom out)
    } else if (size.width < 1024) {
      camera.position.z = 9; // tablet
    } else {
      camera.position.z = 8; // desktop
    }
  }, [size, camera]);

  return null;
}
