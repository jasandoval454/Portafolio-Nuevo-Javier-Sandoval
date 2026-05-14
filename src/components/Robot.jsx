import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export default function ContactModel() {
  const groupRef = useRef();

  useFrame(({ clock, mouse }) => {
    if (!groupRef.current) return;

    const elapsed = clock.getElapsedTime();
    groupRef.current.rotation.y = elapsed * 0.25 + mouse.x * 0.2;
    groupRef.current.rotation.x = Math.sin(elapsed * 0.3) * 0.08 + mouse.y * 0.05;
    groupRef.current.position.y = Math.sin(elapsed * 0.8) * 0.1;
  });

  return (
    <group ref={groupRef}>
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[1.3, 64, 64]} />
        <meshStandardMaterial
          color="#8b5cf6"
          metalness={0.4}
          roughness={0.18}
          emissive="#7c3aed"
          emissiveIntensity={0.18}
        />
      </mesh>

      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1.7, 0.1, 24, 140]} />
        <meshStandardMaterial color="#38bdf8" metalness={0.7} roughness={0.12} />
      </mesh>

      <mesh position={[1.9, 0, 0]} scale={0.22}>
        <sphereGeometry args={[1, 24, 24]} />
        <meshStandardMaterial color="#60a5fa" emissive="#38bdf8" emissiveIntensity={0.3} />
      </mesh>

      <mesh position={[-1.5, 0, 0]} scale={0.14}>
        <sphereGeometry args={[1, 24, 24]} />
        <meshStandardMaterial color="#c084fc" emissive="#a78bfa" emissiveIntensity={0.18} />
      </mesh>

      <mesh position={[0, 0, 1.7]} scale={0.12}>
        <sphereGeometry args={[1, 24, 24]} />
        <meshStandardMaterial color="#22d3ee" emissive="#38bdf8" emissiveIntensity={0.22} />
      </mesh>

      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.35, 0]}>
        <circleGeometry args={[3.5, 64]} />
        <meshStandardMaterial color="#0b1221" roughness={0.7} metalness={0.2} />
      </mesh>
    </group>
  );
}