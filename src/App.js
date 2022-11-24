import {useEffect, useState, useRef} from "react";
import "./App.css";
import Navbar from "./components/Navbar.js";
import About from "./components/About.js";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
import RealEstateCare from "./components/projects/RealEstateCare";
import useOutsideClick from './hooks/useOutsideClick.js';
import useCloseOnEsc from './hooks/useCloseOnEsc';
import iconClose from "./assets/icon-close.svg";
import RestCountryAPI from "./components/projects/RESTCountryAPI";
import RockPaperScissors from "./components/projects/RockPaperScissors";
import InVirtuaPage from "./components/projects/InVirtuaPage";

function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "dark");
  const [matches, setMatches] = useState(window.matchMedia("(min-width: 50em)").matches);
  const [openModal, setOpenModal] = useState(false);
  const [projectModal, setProjectModal] = useState("");
  const ref = useRef();

  useOutsideClick(ref, () => setOpenModal(false));
  useCloseOnEsc(() => setOpenModal(false));

  useEffect(() => {
    document.body.removeAttribute('class');
    document.body.classList.add(`body__${theme}__theme`);

    localStorage.setItem("theme", theme); 
  }, [theme]);

  useEffect(() => {
    window.matchMedia("(min-width: 50em)").addEventListener("change", e => setMatches( e.matches ));
  }, [])

  const handleThemeChangeClick = () => {
    if (theme === "light") {
      setTheme(prevTheme => prevTheme = "dark"); 
    } else if (theme === "dark") {
      setTheme(prevTheme => prevTheme = "light");
    }
  }

  const handleProjectModalClick = (e) => {
    setProjectModal(e.currentTarget.dataset.project);
    setOpenModal(true);
  }

  return (
    <>
      {openModal && (
        <div className="projects__modal__container">
          <div className="projects__modal__wrapper" ref={ref}>
            <div className="projects__modal__close__icon" onClick={() => setOpenModal(false)}>
              <img 
                src={iconClose} 
                alt="close modal icon" 
                className={`projects__modal__close__icon__img projects__modal__close__icon__img__${theme}`}
              />
            </div>
            {projectModal === "RealEstateCare" && (
              <RealEstateCare openModal={openModal} />
            )}
            {projectModal === "RESTCountryAPI" && (
              <RestCountryAPI openModal={openModal} />
            )}
            {projectModal === "RPSG" && (
              <RockPaperScissors openModal={openModal} />
            )}
            {projectModal === "in-Virtua" && (
              <InVirtuaPage openModal={openModal} />
            )}
          </div>
        </div>
      )}
      <Navbar onThemeChangeClick={handleThemeChangeClick} theme={theme} />
      <main className={`App__main__${theme}`}>
        <About theme={theme} />
        <Projects 
          theme={theme} 
          matches={matches} 
          onProjectModalClick={handleProjectModalClick} 
        />
        <Contact theme={theme} />
      </main>
    </>
  );
}

export default App;
