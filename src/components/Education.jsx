export default function Education() {
  const education = [
    {
      name: "Seminario Diocesano de Cristo Sacerdote",
      degree: "Bachiller académico",
      logo: "/logos/seminario.png",
    },
    {
      name: "Universidad San Buenaventura Cali",
      degree: "Ingeniería Multimedia",
      logo: "/logos/sanbuenaventura.png",
    },
  ];

  return (
    <section className="projects-section">
      <h2 className="section-title">Educación</h2>

      <div className="projects-grid">
        {education.map((item, index) => (
          <div className="education-card" key={index}>
            <img src={item.logo} alt={item.name} className="education-logo" />
            <h3>{item.name}</h3>
            <p>{item.degree}</p>
          </div>
        ))}
      </div>
    </section>
  );
}