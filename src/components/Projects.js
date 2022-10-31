import React from "react";
import "./Projects.css";
import RealEstateCare from "./projects/RealEstateCare";
import Homepage from "../assets/RealEstateCare/Homepage.png";
import RCAHome from "../assets/RESTCountryAPI/RCA-Homepage.png";
import githubIcon from "../assets/brand-icons/brand-github.svg";
import eyeIcon from "../assets/eye.svg";
import RestCountryAPI from "./projects/RESTCountryAPI";
import RockPaperScissors from "./projects/RockPaperScissors";
import RPSGHomepage from "../assets/RockPaperScissors/RPSG-Homepage.png";
import DBHome from "../assets/DirtyBombFanSite/DB-Homepage.png";
import DirtyBombFanSite from "./projects/DirtyBombFanSite";

export default function Projects({theme, matches, onProjectModalClick}) {

  return (
    <section className="project__section" id="Projects">
      <h2>Projects</h2>
      <div className={`project__container project__container__${theme}`}>
        {!matches && (
          <div className="project__carousel__wrapper">
            <RestCountryAPI />
          </div>
        )}
        {matches && (
          <button className="project__carousel__modal__button" onClick={(e) => onProjectModalClick(e)} data-project="RESTCountryAPI">
              <span hidden>Open project carousel</span>
              <img src={RCAHome} alt="" className="project__carousel__image"/>
          </button>
          )}
        <div className="project__info__text">
          <h3>RESTCountryAPI</h3>
          <p>
            With this project you can search 200+ countries and view detailed information on each of the country's pages.
            The fetched data is shown to the user on-screen by using sereval map and/or filter functions.
            This project is built with React and uses React Router as routing. Several custom Hooks are used to fetch data or close modals etc.
          </p>
          <div className="project__info__text__links">
            <a 
              href="https://github.com/Absorberend/REST-Countries-API" 
              className={`projects__info__button projects__info__button__${theme}`} 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <img src={githubIcon} alt="github icon" />
              View code
            </a>
            <a 
              href="https://tourmaline-rolypoly-f76373.netlify.app/#/" 
              className={`projects__info__button projects__info__button__${theme}`}
              target="_blank" 
              rel="noopener noreferrer"
            >
              <img src={eyeIcon} alt="view icon" />
              View live
            </a>
          </div>
        </div>
      </div>

      <div className={`project__container project__container__${theme}`}>
        {!matches && (
          <div className="project__carousel__wrapper">
            <RealEstateCare />
          </div>
        )}
        {matches && (
          <button className="project__carousel__modal__button" onClick={(e) => onProjectModalClick(e)} data-project="RealEstateCare">
              <span hidden>Open project carousel</span>
              <img src={Homepage} alt="" className="project__carousel__image"/>
          </button>
          )}
        <div className="project__info__text">
          <h3>RealEstateCare</h3>
          <p>
            The fictional company RealEstateCare in this case needed a (mobile) solution to digitise their inspection reports and integrate them into their already existing workflow.
            My solution is a mobile web app (PWA) built with React and is fully functional offline. With this app personnel can fill in inspection reports on sight while being offline.
            The data is stored in real time in a Firebase database. The 2FA is simulated with the localStorage (case requirement).
          </p>
          <div className="project__info__text__links">
            <a 
              href="https://github.com/Absorberend/Real-Estate-Care-App" 
              className={`projects__info__button projects__info__button__${theme}`} 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <img src={githubIcon} alt="github icon" />
              View code
            </a>
            <a 
              href="https://realestatecare.netlify.app/#/" 
              className={`projects__info__button projects__info__button__${theme}`}
              target="_blank" 
              rel="noopener noreferrer"
            >
              <img src={eyeIcon} alt="view icon" />
              View live
            </a>
          </div>
        </div>
      </div>

      <div className={`project__container project__container__${theme}`}>
        {!matches && (
          <div className="project__carousel__wrapper">
            <RockPaperScissors />
          </div>
        )}
        {matches && (
          <button className="project__carousel__modal__button" onClick={(e) => onProjectModalClick(e)} data-project="RPSG">
              <span hidden>Open project carousel</span>
              <img src={RPSGHomepage} alt="" className="project__carousel__image"/>
          </button>
          )}
        <div className="project__info__text">
          <h3>Rock Paper Scissors Game</h3>
          <p>
            This project simulates the rock paper scissors game.
            It uses some JavaScript seTimeOut functions to facilitate the game mechanics and timings.
            It also has sound effects. This application is built with React. 
          </p>
          <div className="project__info__text__links">
            <a 
              href="https://github.com/Absorberend/Rock-paper-scissors-game-fm" 
              className={`projects__info__button projects__info__button__${theme}`} 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <img src={githubIcon} alt="github icon" />
              View code
            </a>
            <a 
              href="https://ifyoureadthisurecool.netlify.app/" 
              className={`projects__info__button projects__info__button__${theme}`}
              target="_blank" 
              rel="noopener noreferrer"
            >
              <img src={eyeIcon} alt="view icon" />
              View live
            </a>
          </div>
        </div>
      </div>

      <div className={`project__container project__container__${theme}`}>
        {!matches && (
          <div className="project__carousel__wrapper">
            <DirtyBombFanSite />
          </div>
        )}
        {matches && (
          <button className="project__carousel__modal__button" onClick={(e) => onProjectModalClick(e)} data-project="DirtyBomb">
              <span hidden>Open project carousel</span>
              <img src={DBHome} alt="" className="project__carousel__image"/>
          </button>
          )}
        <div className="project__info__text">
          <h3>Dirty Bomb Fan Page</h3>
          <p>
            This project is fan site about a game I used to play vigorously.
            This is a pure HTML/CSS project with just a few lines of JavaScript.
            It was also a final assignment for a CSS course (part of HBO Frontend developer at the LOI) I was following.
            This project resulted in an A+!
          </p>
          <div className="project__info__text__links">
            <a 
              href="https://github.com/Absorberend/dirty-bomb-fan-site" 
              className={`projects__info__button projects__info__button__${theme}`} 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <img src={githubIcon} alt="github icon" />
              View code
            </a>
            <a 
              href="https://rococo-lokum-fe4de0.netlify.app/" 
              className={`projects__info__button projects__info__button__${theme}`}
              target="_blank" 
              rel="noopener noreferrer"
            >
              <img src={eyeIcon} alt="view icon" />
              View live
            </a>
          </div>
        </div>
      </div>

    </section>
  )
}
