import React from "react";
import "../Assly/Project.css";
import ProjectCard from "../Components/ProjectCards";
import project from "../Static Data/Project";
function Projects() {
  return (
    <>
      <div className="project">
        <div className="project_list">
          {project.map((item, index) => {
            return <ProjectCard key={index} data={item} />;
          })}
        </div>
      </div>
    </>
  );
}

export default Projects;
