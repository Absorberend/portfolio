import React from "react";
import "./About.css";
import Skills from "./Skills.js";

export default function About({theme}) {
  return (
    <section className={`about__section about__section__${theme}`} id="About">
      <h2 className="about__header"><span className="about__wave">👋</span> Hi, I'm Berend.</h2>
      <p className="about__text">
        I'm a web developer from the Netherlands. After working as a bookkeeper and dealing with business processes I became very passionate about development. 
        Being able to built and come up with solutions to complex problems is something I really enjoy doing. 
        I'm very eager to learn and provide as much value as I possibly can to your project or company. 
      </p>
      <p className="about__text"> These are the technologies I've got experience with so far:</p>
      <Skills theme={theme} />
    </section>
  )
}
