import { useComponent } from "../context/contextComponent";
import "../scss/content/experience.scss";

export const Experience = () => {
  const { experienceRef } = useComponent();
  return (
    <>
      <section id="experience" ref={experienceRef} className="experience">
        <h2>experience</h2>
        <p>
          Over the past few years, I’ve developed a variety of personal and
          academic projects that have greatly shaped my skills as a developer.
          I’m passionate about turning ideas into real applications — from
          building responsive interfaces with <span>React</span>  and <span>Tailwind CSS </span>to creating
          secure backends with <span>Node.js</span> , <span>Express</span>, and <span>PostgreSQL</span>..
        </p>
        <p>
          {" "}
          Some of the projects I’ve built include a task management app with
          authentication and dynamic boards, a student management system written
          in <span>Java OOP</span>, and a clinic appointment system focused on database
          relationships and normalization. I also designed my own developer
          portfolio using Figma and turned it into a real React application.{" "}
        </p>
        <p>
          {" "}
          These experiences taught me how to handle both the creative and
          technical sides of development — planning, designing, coding,
          debugging, and improving performance. Every project I build is another
          step toward becoming the kind of engineer who combines design,
          functionality, and user experience in a meaningful way.
        </p>
      </section>
    </>
  );
};
