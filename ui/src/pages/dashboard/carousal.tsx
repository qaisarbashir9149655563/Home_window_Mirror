import React from "react";
import { Carousel } from "antd";
import "./carousal.scss";
const Carousal = () => {
  const contentStyle: React.CSSProperties = {
    height: "10%",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
  };
  return (
    <div className="carousal">
      <Carousel
        autoplay
        className="custom-carousel"
        speed={1000}
        dotPosition="right"
      >
        <div>
          <img
            src="https://images.pexels.com/photos/6402384/pexels-photo-6402384.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="Mirror1"
            className="carousel-image"
          />
        </div>
        <div>
          <img
            src="https://images.pexels.com/photos/248877/pexels-photo-248877.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="image2"
            className="carousel-image"
          />
        </div>
        <div>
          <img
            src="https://images.pexels.com/photos/425135/pexels-photo-425135.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="image3"
            className="carousel-image"
          />
        </div>
        <div>
          <img
            src="https://images.pexels.com/photos/2710139/pexels-photo-2710139.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="image4"
            className="carousel-image"
          />
        </div>
      </Carousel>
    </div>
  );
};

export default Carousal;
