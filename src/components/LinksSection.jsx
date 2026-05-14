export default function LinksSection() {
  const links = [
    {
      name: "Behance",
      url: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/behance.svg",
      realUrl: "https://www.behance.net/javiersandoval34",
      color: "#1769FF",
    },
    {
      name: "LinkedIn",
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg",
      realUrl: "https://www.linkedin.com/in/javier-sandoval-202a88305/",
      color: "#0A66C2",
    },
    {
      name: "GitHub",
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
      realUrl: "https://github.com/jasandoval454",
      color: "#ffffff",
    },
  ];

  return (
    <section className="projects-section">
      <h2 className="section-title">Mis Redes</h2>

      <div className="projects-grid">
        {links.map((link, index) => (
          <a
            key={index}
            href={link.realUrl || link.url}
            target="_blank"
            rel="noreferrer"
            className="social-card"
            style={{ "--hover-color": link.color }}
          >
            <img src={link.url} alt={link.name} className="social-icon" />
            <h3>{link.name}</h3>
          </a>
        ))}
      </div>
    </section>
  );
}