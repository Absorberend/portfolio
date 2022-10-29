import React from "react";
import "./Skills.css";

import htmlIcon from "../assets/brand-icons/brand-html5.svg";
import cssIcon from "../assets/brand-icons/brand-css3.svg";
import jsIcon from "../assets/brand-icons/brand-javascript.svg";
import reactIcon from "../assets/brand-icons/brand-react.svg";
import firebaseIcon from "../assets/brand-icons/brand-firebase.svg";
import gitIcon from "../assets/brand-icons/brand-git.svg";
import githubIcon from "../assets/brand-icons/brand-github.svg";
import netlifyIcon from "../assets/brand-icons/brand-netlify.svg";

export default function Skills({theme}) {
  return (
    <div className={`skills__container skills__container__${theme}`}>
      <div className={`skill skill__${theme}`}>
        <img src={htmlIcon} alt="HTML icon" />
        HTML
      </div>
      <div className={`skill skill__${theme}`}>
        <img src={cssIcon} alt="CSS icon" />
        CSS
      </div>
      <div className={`skill skill__${theme}`}>
      <img src={jsIcon} alt="Javascript icon" />
        Javascript
      </div>
      <div className={`skill skill__${theme}`}>
        <img src={reactIcon} alt="React icon" />
        React
      </div>
      <div className={`skill skill__${theme}`}>
        <img src={firebaseIcon} alt="Firebase icon" />
        Firebase
      </div>
      <div className={`skill skill__${theme}`}>
        <img src={gitIcon} alt="Git icon" />
        Git
      </div>
      <div className={`skill skill__${theme}`}>
        <img src={githubIcon} alt="Github icon" />
        GitHub
      </div>
      <div className={`skill skill__${theme}`}>
        <img src={netlifyIcon} alt="Netlify icon" />
        Netlify
      </div>
    </div>
  )
}
