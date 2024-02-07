import React from "react";
import "./ProcessFlow.css";
var beforeSubscribing = require("../../images/Screenshot (255).png");
var afterSubscribing = require("../../images/Screenshot (256).png");
const ProcessFlow = () => {
  return (
    <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
      <h1>Steps to follow</h1>
    <div class="stepscontainer">
        <div class="step">
            <p>1.Register to Candidate Dashboard</p>
        </div>
        <div class="step">
            <p>2.Visit the Website</p>
        </div>
        <div class="step">
            <p>3.Fill the Subscription Form</p>
        </div>
        <div class="step">
            <p>4.Choose Multiple Payment Options</p>
        </div>
        <div class="step">
            <p>5.Pay and Check Email</p>
        </div>
    </div>
    <div class="stepscontainer" style={{paddingBottom:"10%"}}>
    <div class="step">
        <p>6.Login to Candidate Dashboard</p>
    </div>
    <div class="step">
        <p>7.Join Course sessions</p>
    </div>
    <div class="step">
        <p>8.Download Files and videos</p>
    </div>
    <div class="step">
        <p>9.Manage Your Courses</p>
    </div>
    <div class="step">
        <p>10.Download certificates</p>
    </div>
</div>
</div>
  );
};
export default ProcessFlow;
{/* // <div className="flowchart">
    //   <div className="Item">
    //     <h2>Before Subscribing</h2>
    //     <img src={beforeSubscribing} alt="chart"></img>
    //   </div>
    //   <div className="Item">
    //     <h2>After Subscribing</h2>
    //     <img src={afterSubscribing} alt="chart"></img>
    //   </div>
    // </div> */}
