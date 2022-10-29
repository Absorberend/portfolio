import React from "react";
import "./About.css";
import Skills from "./Skills.js";

export default function About({theme}) {
  return (
    <section className={`about__section about__section__${theme}`}>
      <h2 className="about__header">👋 Hi, I'm Berend.</h2>
      <p className="about__text">
        I'm a frontend developer from the Netherlands. After experiencing the endless possibilities within the crypto space I got very passionate about web development.
        Creating webpages that truly come to life and provide value to users is just astonishing to me. 
        I decided to give up my stable career in accounting and take on this great web development adventure. 
        I'm very eager to learn and provide as much value as I possibly can to your project or company.
      </p>
      <p className="about__text"> Here are the technologies I've got experience with so far:</p>
      <Skills theme={theme} />
    </section>
  )
}
