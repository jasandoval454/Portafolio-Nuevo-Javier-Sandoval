import { OrbitControls, Stars } from "@react-three/drei";
import ContactModel from "./Robot";

export default function Scene() {
  return (
    <>
      <fog attach="fog" args={["#0c1221", 4, 12]} />
      <ambientLight intensity={0.7} />
      <directionalLight position={[5, 5, 6]} intensity={1.4} />
      <pointLight position={[-2.5, 2, 3]} intensity={1.1} color="#7c3aed" />
      <pointLight position={[2.5, -1.5, 4]} intensity={0.8} color="#38bdf8" />
      <pointLight position={[0, 4, 0]} intensity={0.45} color="#f8fafc" />

      <Stars
        radius={85}
        depth={50}
        count={1300}
        factor={4}
        saturation={0}
        fade
      />

      <ContactModel />

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.9}
        minPolarAngle={0.9}
        maxPolarAngle={1.5}
      />
    </>
  );
}