/* eslint-disable */
import React, { useContext, useState, useEffect } from "react";
import { ProjectContext } from "../../contexts/projectContext";
import $ from "jquery";

const Projects = () => {
  const { project } = useContext(ProjectContext);
  const width = window.innerWidth;
  var value;
  if (width <= 500) {
    value = 2;
  } else {
    value = 4;
  }

  const [Index, setIndex] = useState({ start: 0, end: value });

  const projectArray = project && project.project;
  const projectArraylength = projectArray && projectArray.length;
  var displayProjects =
    projectArray && projectArray.slice(Index.start, Index.end);
  useEffect(() => {
    $(".project-card-container").fadeIn();
  }, Index);

  if (Index.end > projectArraylength) {
    $(".next-btn").css("opacity", "0.5");
    console.log("end");
  }
  if (Index.start === 0) {
    $(".previous-btn").css("opacity", "0.5");
  }

  const handleNext = () => {
    $(".previous-btn").css("opacity", "1");
    console.log(Index.start);
    if (Index.end > projectArraylength) {
    } else {
      setIndex({ start: Index.end, end: Index.end + value });
      console.log(Index);
    }
  };

  const handlePrevious = () => {
    $(".next-btn").css("opacity", "1");
    if (Index.start === 0) {
    } else {
      setIndex({ start: Index.start - value, end: Index.end - value });
      console.log(Index);
    }
  };

  return (
    <div id="projects" className="">
      <header className="header animation-element">Projects</header>

      <div className="project-card-container">
        {displayProjects &&
          displayProjects.map((project) => {
            return (
              <div key={project.imageUrl} className="project-image-container">
                <img
                  alt="ProjectImage"
                  className="animation-element"
                  src={project.imageUrl}
                />
                <div className="project-image-text">
                  <span>{project.Name}</span>
                  <span>{project.Speciality}</span>
                  <span>
                    <a target="__blank" href={project.projectUrl}>
                      Learn More
                    </a>
                  </span>
                </div>
              </div>
            );
          })}
      </div>
      <div className="text-center">
        <div className="buttons">
          <img
            className="previous-btn"
            onClick={handlePrevious}
            style={{ width: "30px" }}
            src="https://www.svgrepo.com/show/247763/left-arrow-previous.svg"
            alt=""
          />
          <img
            className="next-btn"
            onClick={handleNext}
            style={{ width: "30px" }}
            src="https://www.svgrepo.com/show/247777/right-arrow-next.svg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
