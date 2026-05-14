export default function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-card">
        <div className="about-image-wrapper">
          <img
            src="/img/Retrato Javier Sandoval.jpg"
            alt="Retrato Javier Sandoval"
            className="about-image"
          />
        </div>

        <div className="about-content">
          <h2>Sobre mí</h2>
          <p>
            Soy estudiante de Ingeniería Multimedia de la universidad de San Buenaventura de Cali.
            Me gusta combinar React, Three.js, Unity y diseño 3D para crear proyectos visuales y creativos.
          </p>
          <p>
            Además de mis habilidades técnicas, me apasiona la parte audiovisual y creativa de la multimedia.
            Trabajo bien en equipo y disfruto entregar soluciones limpias y funcionales.
          </p>
        </div>
      </div>
    </section>
  );
}
