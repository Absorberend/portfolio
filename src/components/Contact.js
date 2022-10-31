import React, {useState} from "react";
import "./Contact.css";

export default function Contact({theme}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <section className="contact__section" id="Contact">
      <h2>Contact</h2>

      <form 
        className={`contact__form contact__form__${theme}`} 
        name="contact__form"
      >
        <div>

        </div>
        <label htmlFor="contact__name">
          Name
          <input 
            className={`input__${theme}__theme`}
            type="text" 
            name="contact__form" 
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
            name="contact__form" 
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
            name="contact__form" 
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
