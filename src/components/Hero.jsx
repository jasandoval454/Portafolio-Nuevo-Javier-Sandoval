import { Canvas } from "@react-three/fiber";
import { Float, Html, OrbitControls, Stars } from "@react-three/drei";

function HeroScene() {
  const openPortfolio3D = () => {
    window.open("https://zerok454.itch.io/portafolio-javier-sandoval", "_blank");
  };

  return (
    <>
      <ambientLight intensity={0.65} />
      <directionalLight position={[4, 4, 5]} intensity={1.2} />
      <pointLight position={[-3, 2, 4]} intensity={0.8} color="#38bdf8" />
      <pointLight position={[3, -2, 4]} intensity={0.6} color="#c084fc" />

      <Stars radius={70} depth={35} count={500} factor={4} saturation={0} fade />

      <Float floatIntensity={1.4} rotationIntensity={0.4} speed={1.6}>
        <mesh>
          <torusKnotGeometry args={[1.5, 0.35, 140, 24]} />
          <meshStandardMaterial
            color="#818cf8"
            metalness={0.55}
            roughness={0.22}
            emissive="#6366f1"
            emissiveIntensity={0.2}
          />
        </mesh>
      </Float>

      <Html center transform distanceFactor={1.7}>
        <div className="hero-html-card">
          <h1 className="title">Javier A. Sandoval M.</h1>
          <p className="subtitle">Multimedia Engineer and Creative person</p>

          <div className="hero-actions">
            <button
              className="main-button"
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Ver Proyectos
            </button>
            <button className="main-button" onClick={openPortfolio3D}>
              Entrar al Portafolio 3D
            </button>
          </div>
        </div>
      </Html>

      <OrbitControls
        enableZoom={false}
        autoRotate
        autoRotateSpeed={0.95}
        minPolarAngle={0.9}
        maxPolarAngle={1.5}
      />
    </>
  );
}

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-canvas">
        <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
          <HeroScene />
        </Canvas>
      </div>
    </section>
  );
}
