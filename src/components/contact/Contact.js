import React from "react";
import "./contact.css";

function Contact() {
  return (
    <div className="container">
      <h1 className="hero__heading">Contact</h1>
      <div className="contact__container">
        <form className="contact__form" method="post" name="contact">
          <input type="hidden" name="form-name" value="contact" />
          <div className="form__block">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter Full Name"
              required
            />
          </div>
          <div className="form__block">
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter E-mail"
              required
            />
          </div>
          <div className="form__block">
            <label htmlFor="message">Message</label>
            <textarea
              type="text"
              name="message"
              id="message"
              rows={10}
              placeholder="Enter Message"
            />
          </div>
          <button className="contact-btn" type="submit">
            Contact
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
