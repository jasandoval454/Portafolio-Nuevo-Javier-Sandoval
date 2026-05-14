import { Canvas } from "@react-three/fiber";
import Scene from "./Scene";

export default function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-wrapper">
        <form className="contact-form">
          <h2>Contacto</h2>

          <input type="text" placeholder="Nombre" />
          <input type="email" placeholder="Correo" />
          <textarea rows="5" placeholder="Mensaje" />

          <button type="submit">Enviar</button>
        </form>

        <div className="contact-3d">
          <Canvas
            camera={{ position: [0, 0, 5], fov: 45 }}
            style={{ width: '100%', height: '100%', position: 'absolute', inset: 0 }}
            gl={{ antialias: true, alpha: true }}
          >
            <Scene />
          </Canvas>
        </div>
      </div>
    </section>
  );
}