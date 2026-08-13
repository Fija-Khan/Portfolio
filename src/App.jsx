import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from "./components/About";
import "./components/About.css";
import Skills from "./components/Skills";
import "./components/Skills.css";
import Projects from "./components/Projects";
import "./components/Projects.css";
import Experience from "./components/Experience";
import "./components/Experience.css";
import Contact from "./components/Contact";
import "./components/Contact.css";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
          <Projects />
          <Experience />
          <Contact />

      </main>
      
      
    </>
  )
}

export default App