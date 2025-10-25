import { useComponent } from "../context/contextComponent";
import audioImage from "../asset/img/AUDIOPHILE.png";
import dicionaryImage from "../asset/img/Diccionary.png";
import TodoImage from "../asset/img/Todo.png";

import "../scss/content/projects.scss";

export const Project = () => {
  const { activeSection, projectRef } = useComponent();
  console.log("seccion activa en project", activeSection);

  const devTools = {
    html: "HTML5",
    css: "CSS3",
    js: "JavaScript",
    react: "ReactJS",
    scss: "Scss",
    node: "NodeJS",
    express: "ExpressJS",
    postgre: "PostgreSQL",
    fireBase: "Firebase",
    type: "TypeScript",
  };
  return (
    <>
      <section
        id="projects"
        ref={projectRef}
        className={`projects ${activeSection === "projects" ? "active" : ""}`}
      >
        <h2>projects</h2>
        <a
          href="https://enmanuel0112.github.io/Dictionary-app/"
          target="_blank"
          rel="noreferrer"
        >
          <ProjectsCard
            image={dicionaryImage}
            title="Dictionary"
            description="A simple dictionary app that allows users to 
          search for word definitions and view related information."
            tools={devTools}
          />
        </a>

        <a
          href="https://github.com/enmanuel0112/BackendTodoList.git"
          target="_blank"
          rel="noreferrer"
        >
          <ProjectsCard
            image={TodoImage}
            title="TodoList"
            description="A simple full-stack task manager where users can create, update,
           and delete todos. It includes secure JWT authentication and a clean interface built 
           with React, TypeScript,
           and Tailwind CSS — powered by an Express + PostgreSQL backend."
            tools={devTools}
          />
        </a>

        <a
          href="https://enmanuel0112.github.io/New-AudioPhile-React/"
          target="_blank"
          rel="noreferrer"
        >
          <ProjectsCard
            image={audioImage}
            title="AudioPhile"
            description="An interactive e-commerce app built with React and SCSS, 
          featuring product browsing, cart management, and checkout functionality. 
          User data and authentication are handled securely with Firebase."
            tools={devTools}
          />
        </a>
      </section>
    </>
  );
};

const ProjectsCard = ({ title, description, image, tools }) => {
  const HandleTools = () => {
    if (title === "AudioPhile") {
      return (
        <>
          <div className="toolsContainer">
            <span>{tools.react}</span>
            <span>{tools.scss}</span>
            <span>{tools.fireBase}</span>
          </div>
        </>
      );
    } else if (title === "Dictionary") {
      return (
        <>
          <div className="toolsContainer">
            <span>{tools.html}</span>
            <span>{tools.css}</span>
            <span>{tools.js}</span>
          </div>
        </>
      );
    } else if (title === "TodoList") {
      return (
        <>
          <div className="toolsContainer">
            <span>{tools.css}</span>
            <span>{tools.node}</span>
            <span>{tools.type}</span>
          </div>
        </>
      );
    }
  };

  return (
    <>
      <div className="container-project-card">
        <div className="project-image">
          <img src={image} alt="AudioImage" />
        </div>
        <div className="project-card">
          <h3>{title}</h3>
          <p>{description}</p>

          <div className="tools">
            <HandleTools />
          </div>
        </div>
      </div>
    </>
  );
};
