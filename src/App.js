import "./App.css";
import { Routes, Route } from "react-router-dom";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import Home from "./containers/home/index";
import About from "./containers/about";
import Resume from "./containers/resume";
import Skills from "./containers/skills";
import Portfolio from "./containers/portfolio";
import Contact from "./containers/contact";
import Navbar from "./components/navBar";

function App() {
  const particlesInit = async (main) => {
    // Ensures the full tsparticles engine is loaded
    await loadFull(main);
  };

  const particlesOptions = {
    background: {
      color: {
        value: "#1d1d1d",
      },
    },
    fpsLimit: 120,
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: "push",
        },
        onHover: {
          enable: true,
          mode: "repulse",
        },
        resize: true,
      },
      modes: {
        push: {
          quantity: 4,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: "#ffffff",
      },
      links: {
        color: "#ffffff",
        distance: 150,
        enable: true,
        opacity: 0.5,
        width: 1,
      },
      move: {
        direction: "none",
        enable: true,
        outModes: {
          default: "bounce",
        },
        random: false,
        speed: 6,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: 80,
      },
      opacity: {
        value: 0.5,
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 1, max: 5 },
      },
    },
    detectRetina: true,
  };

  return (
    <div className="App">
      {/* Particles js */}
      <Particles id="particles" init={particlesInit} options={particlesOptions} />

      {/* Navbar */}
      <Navbar />

      {/* Main page content */}
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/about/" element={<About />} />
        <Route path="/resume/" element={<Resume />} />
        <Route path="/skills/" element={<Skills />} />
        <Route path="/portfolio/" element={<Portfolio />} />
        <Route path="/contact/" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
