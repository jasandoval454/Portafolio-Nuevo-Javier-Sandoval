export default function Skills() {
  const skills = [
    {
      name: "React",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      color: "#61DBFB",
    },
    {
      name: "Three.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/threejs/threejs-original.svg",
      color: "#ffffff",
    },
    {
      name: "Unity",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg",
      color: "#888888",
    },
    {
      name: "After Effects",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/aftereffects/aftereffects-original.svg",
      color: "#9999FF",
    },
    {
      name: "Illustrator",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg",
      color: "#FF9A00",
    },
    {
      name: "Figma",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
      color: "#F24E1E",
    },
    {
      name: "Blender",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/blender/blender-original.svg",
      color: "#F5792A",
    },
    {
      name: "DaVinci",
      icon: "https://upload.wikimedia.org/wikipedia/commons/9/90/DaVinci_Resolve_17_logo.svg",
      color: "#00C8FF",
    },
  ];

  return (
    <section className="projects-section">
      <h2 className="section-title">Skills</h2>

      <div className="projects-grid">
        {skills.map((skill, index) => (
          <div
            className="skill-card"
            key={index}
            style={{ "--hover-color": skill.color }}
          >
            <img src={skill.icon} alt={skill.name} className="skill-icon" />
            <h3>{skill.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}