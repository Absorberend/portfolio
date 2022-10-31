import React, {useState, useRef} from "react";
import "./Contact.css";
import mailIcon from "../assets/mail.svg";
import linkedInIcon from "../assets/brand-icons/brand-linkedin.svg";
import githubIcon from "../assets/brand-icons/brand-github.svg";
import emailjs from '@emailjs/browser';

export default function Contact({theme}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_93v9yjk', 'template_uri8pss', form.current, 'h2jh2zTHRL5oz1Wxl')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });

    setName("");
    setEmail("");
    setMessage("");
  }

  return (
    <section className="contact__section" id="Contact">
      <h2>Contact</h2>

      <form 
        className={`contact__form contact__form__${theme}`} 
        name="contact__form"
        onSubmit={(e) => handleSubmit(e)}
        ref={form}
      >
        <div className="contact__social__media">
          <a href="/" >
            <img src={linkedInIcon} alt="linkedin icon" />
          </a>
          <a href="https://github.com/Absorberend" target="_blank" rel="noopener noreferrer">
            <img src={githubIcon} alt="github icon" className="contact__social__media__github" />
          </a>
          <a href="mailto:berend_wout@live.nl" target="_blank" rel="noopener noreferrer">
            <img src={mailIcon} alt="mail icon" />
          </a>
        </div>
        <label htmlFor="contact__name">
          Name
          <input 
            className={`input__${theme}__theme`}
            type="text" 
            name="user_name" 
            id="contact__name" 
            size="25" 
            placeholder="Name" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            required 
          />
        </label>

        <label htmlFor="contact__email">
          Email
          <input 
            className={`input__${theme}__theme`}
            type="email" 
            name="user_email" 
            id="contact__email" 
            size="25" 
            placeholder="Email address" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
        </label>

        <label htmlFor="contact__message">
          Message
          <textarea 
            className={`input__${theme}__theme`}
            rows="7" 
            cols="42"
            name="message" 
            id="contact__message"
            placeholder="Type your message here."
            value={message} 
            onChange={(e) => setMessage(e.target.value)} 
            required
          />
        </label>

        <input 
            className={`contact__submit__button contact__submit__button__${theme}`}
            type="submit" 
            value="Send"
          />

      </form>
    </section>
  )
}
