import { useState } from "react";

export default function FloatingLaptop() {

  const [hovered, setHovered] = useState(false);

  return (
    <mesh
      position={[2, 0, 0]}
      scale={hovered ? 1.3 : 1}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <boxGeometry args={[2, 1.2, 0.2]} />

      <meshStandardMaterial
        color={hovered ? "#00ffff" : "#555"}
      />
    </mesh>
  );
}