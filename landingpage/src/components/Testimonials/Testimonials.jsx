import React from "react";
import TestimonialCard from "./TestimonialCard";
import "./Testimonials.css";
const Testimonials=()=>{
    return (
        <div className="Testimonials">
            <div className="heading">
                TESTIMONIALS
            </div>
            <div className="Cards">
            <TestimonialCard />
            <TestimonialCard />
            <TestimonialCard />
            <TestimonialCard />
            </div>
        </div>
    )
}
export default Testimonials;