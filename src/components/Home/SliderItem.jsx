import React from "react";

const SliderItem = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 d-flex align-items-center" style={{height:"500px"}}>
          <div>
            <div
              className="tp-caption tp-resizeme slider-tag-line"
              style={{
                fontWeight: "400",
                color: "#fff",
                fontFamily: "Nunito Sans",
              }}
            >
              // Full Cycle Software Development
            </div>

            <div
              style={{
                textTransform: "uppercase",
                fontWeight: "900",
                color: "#fff",
                fontFamily: "Montserrat",
              }}
            >
              From idea <br /> to product
            </div>

            <div
              style={{
                whiteSpace: "normal",
                color: "#fff",
                fontFamily: "Nunito Sans",
              }}
            >
              We are 100+ professional software engineers with more than <br />{" "}
              10 years of experience in delivering superior products.
            </div>

            <div>
              <a className="octf-btn octf-btn-primary btn-slider btn-large">
                View Our Works
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SliderItem;
