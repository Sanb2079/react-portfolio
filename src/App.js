import "./App.css";
import { AboutMe } from "./components/AboutMe";
import { Contact } from "./components/Contact";
import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";

const App = () => {
  return (
    <div className="wrapper" id="wrapper">
      <Hero />
      <Skills />
      <Projects />
      <AboutMe />
      <Contact />
      <footer className="footer bg-dark text-light text-center py-5 mt-5">
        Copyright &copy; All Rights Reserved.2022
      </footer>
      <a href="#wrapper" className="goup" id="goup">
        <i className="fa-solid fa-circle-up fa-3x text-primary"></i>
      </a>
    </div>
  );
};

export default App;
