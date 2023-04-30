import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ProjectLayout from "./ProjectLayout";
import Project from "../projects";

function Projects() {
  return (
    <section id="projects" className="projects">
      <h1 className="projects-title">PROJECTS</h1>
      <div className="container-fluid">
        <div className="row">
          {Project.map((project) => (
            <ProjectLayout
              key={project.key}
              image={project.image}
              content={project.content}
              url={project.url}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
