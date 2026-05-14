import { useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Html, OrbitControls, ScrollControls, Stars, useScroll } from "@react-three/drei";

function ProjectBlock({ project, position, index, selected, onSelect }) {
  const ref = useRef();
  const scroll = useScroll();
  const [hovered, setHovered] = useState(false);

  useFrame((_, delta) => {
    if (!ref.current) return;
    ref.current.rotation.x += delta * 0.25;
    ref.current.rotation.y += delta * 0.18;
    const offset = scroll.offset;
    ref.current.position.y = position[1] + Math.sin(offset * Math.PI * 2 + index * 0.9) * 0.5;
  });

  return (
    <mesh
      ref={ref}
      position={position}
      scale={selected === project.title ? 1.15 : 1}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      onClick={() => onSelect(project)}
      castShadow
    >
      <boxGeometry args={[1.4, 1, 0.35]} />
      <meshStandardMaterial
        color={hovered ? project.hoverColor : project.color}
        metalness={0.6}
        roughness={0.3}
      />
      <Html position={[0, 0.8, 0]} center distanceFactor={1.7} className="project-html-label">
        <div className="project-label">{project.title}</div>
      </Html>
    </mesh>
  );
}

function ProjectScene({ projects, selected, onSelect }) {
  const groupRef = useRef();

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.06;
    }
  });

  return (
    <>
      <ambientLight intensity={0.45} />
      <directionalLight position={[3, 4, 5]} intensity={1.1} />
      <pointLight position={[-2.5, 2, 3]} intensity={0.9} color="#38bdf8" />

      <group ref={groupRef}>
        {projects.map((project, index) => (
          <ProjectBlock
            key={project.title}
            project={project}
            position={[index * 2.2 - 2, 0, 0]}
            index={index}
            selected={selected}
            onSelect={onSelect}
          />
        ))}
      </group>

      <Stars radius={45} depth={30} count={350} factor={4} saturation={0} fade />
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.45} minPolarAngle={0.9} maxPolarAngle={1.5} />
    </>
  );
}

export default function Projects() {
  const projectList = [
    {
      title: "Ferrari UI",
      description: "Interfaz inspirada en Ferrari con diseño deportivo y animaciones pulidas.",
      details: "Componente interactivo con navegación moderna y animaciones fluidas.",
      color: "#f97316",
      hoverColor: "#fb923c",
    },
    {
      title: "Movie App",
      description: "Aplicación de películas con consumo de APIs y filtros dinámicos.",
      details: "Incluye búsqueda en tiempo real, tarjeta de detalles y UX móvil optimizada.",
      color: "#38bdf8",
      hoverColor: "#60a5fa",
    },
    {
      title: "Portafolio 3D",
      description: "Experiencia 3D interactiva creada con Three Fiber y Drei.",
      details: "Modelos flotantes, transparencia y navegación 3D para mostrar proyectos.",
      color: "#a855f7",
      hoverColor: "#c084fc",
    },
  ];

  const [selectedProject, setSelectedProject] = useState(projectList[2]);

  return (
    <section className="projects-section" id="projects">
      <div className="projects-header">
        <h2 className="section-title">Proyectos</h2>
        <p className="projects-subtitle">Explora los proyectos interactivos tocando los objetos 3D.</p>
      </div>

      <div className="projects-grid">
        <div className="projects-3d">
          <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
            <ScrollControls pages={1.2} damping={5}>
              <ProjectScene projects={projectList} selected={selectedProject.title} onSelect={setSelectedProject} />
            </ScrollControls>
          </Canvas>
        </div>

        <div className="project-info-card">
          <span className="project-tag">Seleccionado</span>
          <h3>{selectedProject.title}</h3>
          <p>{selectedProject.description}</p>
          <p>{selectedProject.details}</p>
          <button
            type="button"
            className="certificate-button"
            onClick={() => window.open("https://zerok454.itch.io/portafolio-javier-sandoval", "_blank")}
          >
            Ver demo
          </button>
        </div>
      </div>
    </section>
  );
}
