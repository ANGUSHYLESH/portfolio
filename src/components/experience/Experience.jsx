import React from "react";
import "./experience.css";

import {
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiJava,
  SiPython,
  SiFirebase,
  SiMaterialui,
} from "react-icons/si";
import { FaHtml5, FaCss3Alt, FaReact } from "react-icons/fa";
import { FaNodeJs, FaBootstrap } from "react-icons/fa";
import { GrMysql, GrGraphQl } from "react-icons/gr";
import { DiJavascript1 } from "react-icons/di";
import { FiGithub } from "react-icons/fi";


const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Web Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <FaHtml5 className="experience__details-icon" />
              <div>
                <h4>HTML5</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <FaCss3Alt className="experience__details-icon" />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <SiTailwindcss className="experience__details-icon" />
              <div>
                <h4>Tailwind Css</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <DiJavascript1 className="experience__details-icon" />
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <FaReact className="experience__details-icon" />
              <div>
                <h4>ReactJs</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <FaNodeJs className="experience__details-icon" />
              <div>
                <h4>NodeJs</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <SiExpress className="experience__details-icon" />
              <div>
                <h4>ExpressJs</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <SiMongodb className="experience__details-icon" />
              <div>
                <h4>MongoDB</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>

        {/* backend */}

        <div className="experience__backend">
          <h3>Skills</h3>
          <div className="experience__content">
            <article className="experience__details">
              <SiJava className="experience__details-icon" />
              <div>
                <h4>JAVA</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <SiPython className="experience__details-icon" />
              <div>
                <h4>PYTHON</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <FiGithub className="experience__details-icon" />
              <div>
                <h4>GITHUB</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <SiFirebase className="experience__details-icon" />
              <div>
                <h4>FIREBASE</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <SiMaterialui className="experience__details-icon" />
              <div>
                <h4>MATERIAL UI</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <GrMysql className="experience__details-icon" />
              <div>
                <h4>MY SQL</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <FaBootstrap className="experience__details-icon" />
              <div>
                <h4>BOOTSTRAP</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <GrGraphQl className="experience__details-icon" />
              <div>
                <h4>GraphQL</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
