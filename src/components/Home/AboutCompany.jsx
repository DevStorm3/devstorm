import React from "react";

const AboutCompany = () => {
  return (
    <section className="over-hidden">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-md-12 align-self-center">
            <div className="ot-heading">
              <span>// about company</span>
              <h2 className="main-heading">
                Your Partner for <br />
                Software Innovation
              </h2>
            </div>
            <p className="mb-15">
              Lorem ipsum dolor sit amet, consectetur adipisicing, elit. Vitae,
              sequi voluptatibus repellendus minus a iure esse, labore adipisci.
              Velit voluptatum modi delectus amet eius nisi quis consequatur
              numquam debitis architecto.
            </p>
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-6">
                <div className="icon-box-s1">
                  <div className="icon-main">
                    <span className="flaticon-medal"></span>
                  </div>
                  <h5>Experience</h5>
                  <div className="line-box"></div>
                  <p>Our great team of more than 1400 software experts.</p>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6">
                <div className="icon-box-s1">
                  <div className="icon-main">
                    <span className="flaticon-gear"></span>
                  </div>
                  <h5>Quick Support</h5>
                  <div className="line-box"></div>
                  <p>We’ll help you test bold new ideas while sharing your.</p>
                </div>
              </div>
              <div className="space-15"></div>
            </div>
          </div>
          <div className="offset-lg-1 col-lg-6 col-md-12 align-self-center">
            <div className="about-right">
              <div className="img-small">
                <img
                  className="img-small-1"
                  src="images/home-about-small-1.jpg"
                  alt=""
                />
                <img
                  className="img-small-2"
                  src="images/home-about-small-2.jpg"
                  alt=""
                />
              </div>
              <div className="home-about-video d-flex justify-content-center">
                <div className="video-btn align-self-center"></div>
              </div>
              <div className="home-about-btn">
                <div className="ot-button">
                  <a href="about-us.html" className="btn-details">
                    <i className="flaticon-right-arrow-1"></i> LEANR MORE ABOUT US
                  </a>
                  <div className="space-15"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCompany;
