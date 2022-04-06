import React from "react";
import { Carousel } from "antd";
import { AboutCompany, Clients, Projects, Services, Slider, Technology, WhyChoose } from "../components";

const Home = () => {
  return (
    <div className="">
      <div className="">
        <div id="content" className="site-content">
          <div style={{ background: "#ffffff", padding: "0px" }}>
            <div
              style={{
                backgroundImage: "url('/assets/img/slider/slide_2.jpg')",
                height: "500px",
              }}
            >
              <Slider />
            </div>
            <AboutCompany/>
            <WhyChoose/>
            <Services/>
            <Projects/>
            <Technology/>
            <Clients/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
