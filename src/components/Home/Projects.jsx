import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import SingleProject from "./SingleProject";

const Projects = () => {
  return (
    <section className="bg-light-1 no-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 mt--170">
            <div className="cta">
              <div className="row">
                <div className="col-md-9 text-md-left text-center mb-4 mb-md-0">
                  <div className="ot-heading">
                    <span>// Coding Motto will goes here</span>
                    <h2 className="main-heading">Let's Build Your Website!</h2>
                  </div>
                </div>
                <div className="col-md-3 text-md-right text-center align-self-end">
                  <a
                    href="contact.html"
                    className="octf-btn btn-border"
                    role="button"
                  >
                    contact us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="space-100"></div>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="ot-heading">
              <span>// Our latest Project</span>
              <h2 className="main-heading">Introduce Our Projects</h2>
            </div>
            <OwlCarousel className="owl-theme" loop margin={10} nav items={5}>
              <SingleProject />
              <SingleProject />
              <SingleProject />
              <SingleProject />
              <SingleProject />
              <SingleProject />
              <SingleProject />
              <SingleProject />
              <SingleProject />
              <SingleProject />
              <SingleProject />
              <SingleProject />
            </OwlCarousel>
          </div>
        </div>
      </div>
      <div className="space-40"></div>
    </section>
  );
};

export default Projects;
