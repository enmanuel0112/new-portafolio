import { createContext, useContext, useState, useEffect, useRef } from "react";

const ContextComponent = createContext();

export function StateContext({ children }) {
  const [activeSection, setActiveSection] = useState("");

  const aboutRef = useRef(null);
  const projectRef = useRef(null);
  const experienceRef = useRef(null);
  useEffect(() => {
    const sections = [
      { ref: aboutRef, id: "about" },
      { ref: projectRef, id: "project" },
      { ref: experienceRef, id: "experience" },
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => {
      if (section.ref.current) {
        observer.observe(section.ref.current);
      }
    });


    return () => observer.disconnect();
  }, []);

  const scrollTo = (ref) => {
    if(ref.current){
  ref.current?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return ( 
    <ContextComponent.Provider
      value={{
        scrollTo,
        activeSection,
        aboutRef,
        projectRef,
        experienceRef,
      }}
    >
      {children}
    </ContextComponent.Provider>
  );
}

export function useComponent() {
  return useContext(ContextComponent);
}
