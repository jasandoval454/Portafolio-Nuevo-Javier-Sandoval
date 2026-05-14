import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Certificates from "./components/Certificates";
import Projects from "./components/Projects";
import LinksSection from "./components/LinksSection";
import Contact from "./components/Contact";

function App() {
  return (
    <main className="app">
      <Hero />

      <About />

      <Skills />

      <Education />

      <Certificates />

      <Projects />

      <LinksSection />

      <Contact />
    </main>
  );
}

export default App;