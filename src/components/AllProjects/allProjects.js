import React, { useEffect } from "react";
import $ from "jquery";
import "./css/allProjects.css";
import ProjectCard from "./projectCard";

const AllProjects = () => {
  useEffect(() => {
    $(function () {
      $(".toggle-overlay").click(function () {
        console.log("s");
        $("aside").toggleClass("open");
      });
    });
  }, []);

  return (
    <div className="all-projects">
      <aside>
        <div class="outer-close toggle-overlay">
          <a class="close">
            <span></span>
          </a>
        </div>
        <div>{/* <ProjectCard /> */}</div>
      </aside>
    </div>
  );
};

export default AllProjects;
