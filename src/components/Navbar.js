import React from "react";
import "./Navbar.css";
import persPic from "../assets/PersPic.png";
import sunOff from "../assets/sun-off.svg";
import sunOn from "../assets/sun.svg";


export default function Navbar({onThemeChangeClick, theme}) {
  return (
    <header className={`App__header__${theme}`}>
      <div className="navbar__container">
        <a className="navbar__pic__wrapper" href="/">
          <img 
            src={persPic} 
            alt="personal portfolio" 
            className="navbar__pic" 
          />
        </a>
        <nav  className="navbar__nav">
          <div className="nav__homepage">
            <a className={`nav__homepage__link nav__homepage__link__${theme}`} href="/">
              <h1 className="nav__homepage__header__link">Berend van 't Wout</h1>
            </a>
            <div className={`nav__homepage__divider nav__homepage__divider__${theme}`}></div>
          </div>
          <div className="nav__links__container">
            <a href="#About" className={`nav__links nav__links__${theme}`}>About</a>
            <a href="#Projects" className={`nav__links nav__links__${theme}`}>Projects</a>
            <a href="#Contact" className={`nav__links nav__links__${theme}`}>Contact</a>
          </div>
        </nav>
        <div>
          <button onClick={onThemeChangeClick} className="theme__switch__button">
            <img 
              src={theme === "light" ? sunOn : sunOff} 
              alt="theme icon"
              className={`theme__switch__img theme__switch__img__${theme}`} 
            />
          </button>
        </div>
      </div>
    </header>
  )
}
