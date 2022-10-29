import React from "react";
import "./Navbar.css";
import persPic from "../assets/PersPic.png";


export default function Navbar({onThemeChangeClick, theme}) {
  return (
    <header className={`App__header__${theme}`}>
      <div className="navbar__container">
        <div className="navbar__pic__wrapper">
          <img 
            src={persPic} 
            alt="personal portfolio picture" 
            className="navbar__pic" 
          />
        </div>
        <nav  className="navbar__nav">
          <div className="nav__homepage">
            <a className={`nav__homepage__link nav__homepage__link__${theme}`} href="/">
              <h1 className="nav__homepage__header__link">Berend van 't Wout</h1>
            </a>
            <div className={`nav__homepage__divider nav__homepage__divider__${theme}`}></div>
          </div>
          <div className="nav__links__container">
            <a href="/" className={`nav__links nav__links__${theme}`}>About</a>
            <a href="/" className={`nav__links nav__links__${theme}`}>Projects</a>
            <a href="/" className={`nav__links nav__links__${theme}`}>Contact</a>
          </div>
        </nav>
        <div className="theme-switch-wrapper">
          <label className="theme-switch" htmlFor="checkbox" title="theme switcher">
            <span hidden>Theme switcher</span>
            <input type="checkbox" id="checkbox" onChange={onThemeChangeClick} checked={theme === "light" ? false : true}/>
            <div className="slider round"></div>
          </label>
        </div>
      </div>
    </header>
  )
}
