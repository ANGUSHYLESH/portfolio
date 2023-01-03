import React, { useRef } from 'react';
import emailjs from "emailjs-com"

import "./contact.css";

import { MdOutlineEmail } from "react-icons/md"
import { BsLinkedin, BsWhatsapp } from "react-icons/bs";

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {

    e.preventDefault();

    emailjs.sendForm('service_drotbdg', 'template_yx7kkeb', form.current, 'lXIgLzlc4-npVfd3B')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };



  return (<section id="contact">
    <h5>Get In Touch</h5>
    <h2>Contact Me</h2>

    <div className="container contact__container">

      <div className="contact__options">

        <article className="contact__option">
          <MdOutlineEmail className="contact__option_icon" />
          <h4>Email</h4>
          <h5>sshylesh34@gmail.com</h5>
          <a href="mailto:sshylesh34@gmail.com" target="_blank" rel="noreferrer">Send a message</a>
        </article>
        <article className="contact__option">
          <BsLinkedin className="contact__option_icon" />
          <h4>LinkedIn</h4>
          <h5>shylesh-s</h5>
          <a href="https://www.linkedin.com/in/shylesh-s-a2b871214/" target="_blank" rel="noreferrer">Send a message</a>
        </article>
        <article className="contact__option">
          <BsWhatsapp className="contact__option_icon" />
          <h4>Whatsapp</h4>
          <h5>+919585920319</h5>
          <a href="https://web.whatsapp.com/send?phone=+919585920319" target="_blank" rel="noreferrer">Send a message</a>
        </article>
      </div>

      {/* END OF CONTACT OPTIONS */}
      <form ref={form} onSubmit={sendEmail} >
        <input type="text" name="name" placeholder="Your Full Name" required />
        <input type="email" name="email" placeholder="Your Email " required />
        <textarea name="message" rows="7" placeholder="Your Message" required></textarea>
        <button type="submit" className="btn btn-primary">Send Message</button>

      </form>


    </div>

  </section>);
};

export default Contact;
