import React from "react";
import "./footer.css";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
const Footer = () => {

  return (
    <footer>
      <a href="/#" className={"footer__logo"}>Shylesh</a>
      <ul className="permalinks">
        <li> <a href="/#">Home</a></li>
        <li> <a href="#about">About</a></li>
        <li> <a href="#testimonials"> Experience</a></li>
        <li> <a href="#experience">Skills</a></li>
        <li> <a href="#portfolio">Portfolio</a></li>
        <li> <a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/shylesh-s-a2b871214/"
          target="_blank"
          rel="noopener noreferrer">      
          <BsLinkedin /></a>
        <a
          href="https://github.com/ANGUSHYLESH"
          target="_blank"
          rel="noopener noreferrer"
        ><FaGithub /></a>


        <a
          href="https://leetcode.com/sshylesh34/"
          target="_blank"
          rel="noopener noreferrer"
        ><SiLeetcode /></a>
      </div>



    </footer>
  );
};

export default Footer;
