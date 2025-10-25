import React from "react";
import { useComponent } from "../context/contextComponent";
import "../scss/content/button.scss";

export function Button({
  sectionRefAbout,
  sectionRefProjects,
  sectionRefExperience,
}) {
  const { scrollTo, activeSection } = useComponent();
  return (
    <div className="button-content">
      <button
        onClick={() => scrollTo(sectionRefAbout)}
        className={` ${activeSection === "about" ? "nuevo" : ""}
        
        `}
      >
        <span className="line"></span>
        ABOUT
      </button>
      <button
        onClick={() => scrollTo(sectionRefProjects)}
        className={` ${activeSection === "projects" ? "nuevo" : ""}
        
        `}
      >
        <span className="line"></span>
        PROJECTS
      </button>
      <button
        onClick={() => scrollTo(sectionRefExperience)}
        className={` ${activeSection === "experience" ? "nuevo" : ""}
        
        `}
      >
        <span className="line"></span>
        EXPERIENCE
      </button>
    </div>
  );
}
