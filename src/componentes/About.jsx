import React from "react";
import { useComponent } from "../context/contextComponent";
import "../scss/content/about.scss";

export const About = () => {
  const { aboutRef } = useComponent();
  console.log(aboutRef.current);
  return (
    <>
      <section id="about" ref={aboutRef} className="about">
        <h2>About Me</h2>
        <p>
          I’m a passionate <span>Full Stack Software Engineer</span> with over
          three years of hands-on experience in web development. Currently
          pursuing my degree in software engineering, I’ve spent the last few
          years building projects that combine clean design, efficient code, and
          solid architecture. I enjoy turning ideas into functional and visually
          appealing applications that deliver real value to users.
        </p>
        <p>
          {" "}
          My technical skill set includes <span>Node.js</span>,
          <span> TypeScript</span>, <span> React</span>, <span> SQL</span>,
          <span> Docker</span>, <span> Tailwind CSS</span>, and{" "}
          <span> SCSS</span> . On the creative side, I also work with
          <span> Figma</span> and <span> Adobe Photoshop</span> to design
          intuitive interfaces before bringing them to life through code. This
          combination of technical and design knowledge allows me to manage
          projects from concept to deployment, ensuring both strong
          functionality and a polished user experience.{" "}
        </p>
        <p>
          {" "}
          I’m constantly exploring new technologies and improving my workflow to
          write cleaner, more scalable, and maintainable code. For me,
          programming isn’t just about solving problems—it’s about creating
          solutions that are efficient, elegant, and user-centered. My goal is
          to continue growing as a developer, contributing to impactful
          projects, and becoming the kind of engineer who bridges the gap
          between design and technology.
        </p>
      </section>
    </>
  );
};
