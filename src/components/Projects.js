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
import IVHome from "../assets/inVirtuaPage/IV-homepage.png";
import InVirtuaPage from "./projects/InVirtuaPage";

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
              <div className="project__img--hover--zoom">
                <img src={RCAHome} alt="" className="project__carousel__image"/>
              </div>
          </button>
          )}
        <div className="project__info__text">
          <h3>RESTCountryAPI</h3>
          <p>
            With this project you can search 200+ countries and view detailed information on each of the country's pages.
            The fetched data is shown to the user on-screen by making use of sereval map and/or filter functions.
            This project is built with React and uses React Router as routing. Several custom hooks are used to fetch data or close a dropdown menu.
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
            <InVirtuaPage/>
          </div>
        )}
        {matches && (
          <button className="project__carousel__modal__button" onClick={(e) => onProjectModalClick(e)} data-project="in-Virtua">
              <span hidden>Open project carousel</span>
              <div className="project__img--hover--zoom">
                <img src={IVHome} alt="" className="project__carousel__image"/>
              </div>
          </button>
          )}
        <div className="project__info__text">
          <h3>in-Virtua page</h3>
          <p>
            This is the page of a virtual reality startup called in-Virtua.
            The page is about showcasing and explaining their work and also about what they can do for potential customers.
            It's built with React and uses packages for the slider, text animations and qoutes carousel.
            It also has full page scrolling and is fully responsive. 
          </p>
          <div className="project__info__text__links">
            <a 
              href="https://github.com/Absorberend/in-Virtua" 
              className={`projects__info__button projects__info__button__${theme}`} 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <img src={githubIcon} alt="github icon" />
              View code
            </a>
            <a 
              href="https://bejewelled-trifle-ec8c87.netlify.app/" 
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
              <div className="project__img--hover--zoom">
                <img src={Homepage} alt="" className="project__carousel__image"/>
              </div>
          </button>
          )}
        <div className="project__info__text">
          <h3>RealEstateCare</h3>
          <p>
            The fictional company RealEstateCare needed a (mobile) solution to digitise their inspection reports and integrate them into their already existing workflow.
            My solution is a mobile web app (PWA) built with React and is fully functional offline. It passes the Lighthouse test.
            The data is exchanged in real time between Firebase and the front-end. The 2FA is simulated with the localStorage (case requirement). This project was the final assignment for a Frameworks course (part of HBO Frontend developer at the LOI) I was attending. It resulted in an A+!
            <br />
            <br />
            Use the following credentials to login:
            <br />
            D.smit 1111 or S.dvries 2222
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
              <div className="project__img--hover--zoom">
                <img src={RPSGHomepage} alt="" className="project__carousel__image"/>
              </div>
          </button>
          )}
        <div className="project__info__text">
          <h3>Rock Paper Scissors Game</h3>
          <p>
            This project simulates the Rock Paper Scissors game.
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

    </section>
  )
}
