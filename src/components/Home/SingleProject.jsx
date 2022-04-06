import React from "react";

const SingleProject = () => {
  return (
    <div className="project-item projects-style-2">
      <div className="projects-box">
        <div className="projects-thumbnail">
          <a href="portfolio-details-1.html">
            <img
              src="/assets/img/projects/project7-720x520.jpg"
              className=""
              alt=""
            />
            <span className="overlay"></span>
          </a>
        </div>
        <div className="portfolio-info">
          <div className="portfolio-info-inner">
            <a className="btn-link" href="portfolio-details-1.html">
              <i className="flaticon-right-arrow-1"></i>
            </a>
            <h5>
              <a href="portfolio-details-1.html">Project Title</a>
            </h5>
            <p className="portfolio-cates">
              <a href="#">Design</a>
              <span>/</span>
              <a href="#">Technology</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProject;