import "./App.scss";
import { Routes, Route, useLocation } from "react-router-dom";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import Home from "./containers/home/index";
import About from "./containers/about";
import Resume from "./containers/resume";
import Skills from "./containers/skills";
import Portfolio from "./containers/portfolio";
import Contact from "./containers/contact";
import Navbar from "./components/navBar";
import particles from "./utils/particles";

function App() {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const location = useLocation();
  console.log(location)

  const renderParticleJsInHomePage = location.pathname === '/';

  return (
    <div className="App">
      {/* Particles js */}

      {
        renderParticleJsInHomePage &&
        <Particles id="particles" init={particlesInit} options={particles} />
      }
      

      {/* Navbar */}
      <Navbar />

      {/* Main page content */}
      <div className="App__main-page-content">
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/about/" element={<About />} />
          <Route path="/resume/" element={<Resume />} />
          <Route path="/skills/" element={<Skills />} />
          <Route path="/portfolio/" element={<Portfolio />} />
          <Route path="/contact/" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
