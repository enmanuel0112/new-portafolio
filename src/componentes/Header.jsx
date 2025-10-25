// import { useEffect } from "react";

import { useComponent } from "../context/contextComponent";
import { Button } from "./Button";
import "../scss/content/header.scss";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareUpwork } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
export function Header() {
  const { projectRef, experienceRef, aboutRef } = useComponent();

  return (
    <>
      <div className="header-container">
        <div className="header-content">
          <h1>Cesar Ogando</h1>
          <h3>Full Stack Software Engineer</h3>
          <p>
            I build scalable and high-performance full-stack applications with
            modern technologies like React, Node.js, and PostgreSQL
          </p>
        </div>

        <nav className="nav">
          <Button
            sectionRefAbout={aboutRef}
            sectionRefProjects={projectRef}
            sectionRefExperience={experienceRef}
          />
        </nav>

        <div className="social-media">
          <a
            href="https://github.com/enmanuel0112"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>
              <FaGithub />
            </span>
          </a>
          <a
            href="https://www.linkedin.com/in/cesar-ogando"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>
              <FaLinkedin />
            </span>
          </a>
          <a
            href="https://www.upwork.com/freelancers/~01135bdc7be9d1b9de?mp_source=share"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>
              <FaSquareUpwork />
            </span>
          </a>
          
        </div>
        <div className="contact">
 <p> <span>cesarogando0112@gmail.com</span> </p>
        <p> <span>Dominican Republic: {`+1 (829-444-0426)`}</span> </p>
        </div>
       
      </div>
    </>
  );
}
