import { Carousel } from "antd";
import React from "react";
import SliderItem from "./SliderItem";

const Slider = () => {
  return (
    <Carousel style={{ width: "100%" }}>
      <div>
        <ul>
          <li>
            <SliderItem />
          </li>
        </ul>
      </div>

      <SliderItem />
      <SliderItem />
      <SliderItem />
    </Carousel>
  );
};

export default Slider;
