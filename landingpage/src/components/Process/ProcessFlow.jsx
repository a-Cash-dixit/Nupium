import React from "react";
import "./ProcessFlow.css";
var beforeSubscribing = require("../../images/Screenshot (255).png");
var afterSubscribing = require("../../images/Screenshot (256).png");
const ProcessFlow = () => {
  return (
    <div className="flowchart">
      <div className="Item">
        <h2>Before Subscribing</h2>
        <img src={beforeSubscribing} alt="chart"></img>
      </div>
      <div className="Item">
        <h2>After Subscribing</h2>
        <img src={afterSubscribing} alt="chart"></img>
      </div>
    </div>
  );
};
export default ProcessFlow;
