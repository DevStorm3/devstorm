import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const Clients = () => {
  return (
    <section className="bg-map-dots">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="ot-heading text-center">
              <span>// our clients</span>
              <h2 className="main-heading">
                We are Trusted <br />
                15+ Countries Worldwide
              </h2>
            </div>
          </div>
        </div>
        <div className="space-35"></div>
        <div className="row">
          <div className="col-md-12">
            <div className="ot-testimonials">
              <OwlCarousel className="owl-theme" loop margin={10} nav items={5}>
                <div className="testi-item">
                  {/* <div className="layer1"></div> */}
                  <div className="layer2">
                    <div className="t-head flex-middle">
                      <div className="tinfo">
                        <h6>SoftTech,</h6>
                        <span>Manager of Company</span>
                      </div>
                    </div>
                    <div className="ttext">
                      "Lorem ipsum dolor sit amet, consectetur, adipisicing
                      elit. Dicta fugiat vel fugit culpa quod unde blanditiis
                      eos laboriosam distinctio accusantium rerum, id mollitia
                      commodi magni eius expedita accusamus ad eligendi."
                    </div>
                  </div>
                </div>
                <div className="testi-item">
                  {/* <div className="layer1"></div> */}
                  <div className="layer2">
                    <div className="t-head flex-middle">
                      <div className="tinfo">
                        <h6>SoftTech,</h6>
                        <span>Manager of Company</span>
                      </div>
                    </div>
                    <div className="ttext">
                      "Lorem ipsum dolor sit amet, consectetur, adipisicing
                      elit. Dicta fugiat vel fugit culpa quod unde blanditiis
                      eos laboriosam distinctio accusantium rerum, id mollitia
                      commodi magni eius expedita accusamus ad eligendi."
                    </div>
                  </div>
                </div>
              </OwlCarousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
