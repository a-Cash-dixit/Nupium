import React from "react";
import "./Slides.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
var img1 = require("../../images/1001773457_577c3a7d70.jpg");
var img2 = require("../../images/1002674143_1b742ab4b8.jpg");
var img3 = require("../../images/1007320043_627395c3d8.jpg");
var img4 = require("../../images/1012212859_01547e3f17.jpg");
const Slides = () => {
  return (
    <div className="Slides">
      <Carousel
        showThumbs={false}
        autoPlay={true}
        interval={3000}
        infiniteLoop={true}
      >
        <div>
          <img style={{ height: "66vh" }} src={img1} alt="slide" />
          {/* <p className="legend">Legend 1</p> */}
        </div>
        <div>
          <img style={{ height: "66vh" }} src={img2} alt="slide" />
          {/* <p className="legend">Legend 2</p> */}
        </div>
        <div>
          <img style={{ height: "66vh" }} src={img3} alt="slide" />
          {/* <p className="legend">Legend 3</p> */}
        </div>
        <div>
          <img style={{ height: "66vh" }} src={img4} alt="slide" />
          {/* <p className="legend">Legend 4</p> */}
        </div>
      </Carousel>
      <div className="info">
        <div className="item">
          <h1>Founded</h1>
          <p>2020</p>
        </div>
        <div className="item">
          <h1>Candidates</h1>
          <p>7500+</p>
        </div>
        <div className="item">
          <h1>Team Size</h1>
          <p>125+</p>
        </div>
        <div className="item">
          <h1>Training</h1>
          <p>Globally</p>
        </div>
      </div>
    </div>
  );
};
export default Slides;
