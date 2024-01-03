import React from "react";
import FeatureCard from "./FeatureCard";
import "./Features.css";
import data from "./Features";
const Features = () => {
  return (
    <div className="Features">
      {data.map((ele)=>{
        return(
            <FeatureCard title={ele.title} desc={ele.desc} />
        )
      })}
    </div>
  );
};
export default Features;
