import React, { useState } from "react";
import "./nav.css";

import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiBook, BiMessageSquareDetail } from "react-icons/bi";
import { FaExpeditedssl } from "react-icons/fa"
import { RiProjectorFill } from "react-icons/ri"

const Nav = () => {
  const [active, setActive] = useState("#");

  return (
    <nav>
      <a
        href="/#"
        onClick={() => {
          setActive("#");
        }}
        className={active === "#" ? "active" : ""}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        onClick={() => {
          setActive("#about");
        }}
        className={active === "#about" ? "active" : ""}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#testimonials"
        onClick={() => {
          setActive("#testimonials");
        }}
        className={active === "#testimonials" ? "active" : ""}
      >
        <FaExpeditedssl />
      </a>
      <a
        href="#portfolio"
        onClick={() => {
          setActive("#portfolio");
        }}
        className={active === "#portfolio" ? "active" : ""}
      >
        <RiProjectorFill />
      </a>
      <a
        href="#experience"
        onClick={() => {
          setActive("#experience");
        }}
        className={active === "#experience" ? "active" : ""}
      >
        <BiBook />
      </a>

      <a
        href="#contact"
        onClick={() => {
          setActive("#contact");
        }}
        className={active === "#contact" ? "active" : ""}
      >
        <BiMessageSquareDetail />
      </a>
    </nav>
  );
};

export default Nav;
