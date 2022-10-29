import {useEffect, useState} from "react";
import "./App.css";
import Navbar from "./components/Navbar.js";
import About from "./components/About.js";

function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "dark");

  useEffect(() => {
    document.body.removeAttribute('class');
    document.body.classList.add(`body__${theme}__theme`);

    localStorage.setItem("theme", theme); 
  }, [theme]);

  const handleThemeChangeClick = () => {
    if (theme === "light") {
      setTheme(prevTheme => prevTheme = "dark"); 
    } else if (theme === "dark") {
      setTheme(prevTheme => prevTheme = "light");
    }
  }

  return (
    <>
      <Navbar onThemeChangeClick={handleThemeChangeClick} theme={theme} />
      <main className={`App__main__${theme}`} >
        <About theme={theme} />
      </main>
    </>
  );
}

export default App;
